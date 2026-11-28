<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AturanRekomendasi;
use App\Models\Balita;
use App\Models\HasilKlasifikasi;
use App\Models\Notifikasi;
use App\Models\Penimbangan;
use App\Models\RekomendasiBalita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PenimbanganController extends Controller
{
    public function index()
    {
        $data = Penimbangan::with([
            'balita.orangTua',
            'kader',
            'hasilKlasifikasi.rekomendasiBalita.aturanRekomendasi',
        ])
            ->orderBy('tanggal_pengukuran', 'desc')
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => $data,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_balita' => 'required|exists:balita,id_balita',
            'id_kader' => 'required|exists:kader,id_kader',
            'tanggal_pengukuran' => 'required|date',
            'usia_bulan' => 'required|integer|min:0|max:60',
            'berat_badan_kg' => 'required|numeric|min:1|max:50',
            'tinggi_badan_cm' => 'required|numeric|min:30|max:150',
            'lingkar_kepala_lk_cm' => 'required|numeric|min:20|max:70',
            'lingkar_lengan_lila_cm' => 'required|numeric|min:5|max:35',
            'cara_pengukuran' => 'required|in:telentang,berdiri',
            // Hasil dari ML / Z-Score (opsional karena otomatis diisi dari ML Service)
            'zscore_bbu' => 'nullable|numeric',
            'zscore_tbu' => 'nullable|numeric',
            'zscore_bbtb' => 'nullable|numeric',
            'status_gizi_ml' => 'nullable|in:normal,stunting,wasting,underweight,overweight',
            'status_stunting' => 'nullable|string|max:20',
            'status_wasting' => 'nullable|string|max:20',
            'status_weight_category' => 'nullable|string|max:20',
            'catatan_petugas' => 'nullable|string',
        ]);

        return DB::transaction(function () use ($validated) {
            $balita = Balita::findOrFail($validated['id_balita']);

            // 1. Panggil Python ML Service untuk prediksi otomatis (fallback ke input/normal jika service mati)
            $mlResult = [
                'status_gizi_ml' => $validated['status_gizi_ml'] ?? 'normal',
                'zscore_bbu' => $validated['zscore_bbu'] ?? null,
                'zscore_tbu' => $validated['zscore_tbu'] ?? null,
                'zscore_bbtb' => $validated['zscore_bbtb'] ?? null,
            ];

            try {
                $response = Http::timeout(5)->post(env('ML_SERVICE_URL', 'http://127.0.0.1:8001') . '/predict', [
                    'umur_bulan' => $validated['usia_bulan'],
                    'jenis_kelamin' => $balita->jenis_kelamin,
                    'bb_kg' => (float) $validated['berat_badan_kg'],
                    'tb_cm' => (float) $validated['tinggi_badan_cm'],
                ]);

                if ($response->successful()) {
                    $json = $response->json();
                    $mlResult['status_gizi_ml'] = $json['status_gizi_ml'] ?? $mlResult['status_gizi_ml'];
                    $mlResult['zscore_bbu'] = $json['zscore_bbu'] ?? $mlResult['zscore_bbu'];
                    $mlResult['zscore_tbu'] = $json['zscore_tbu'] ?? $mlResult['zscore_tbu'];
                    $mlResult['zscore_bbtb'] = $json['zscore_bbtb'] ?? $mlResult['zscore_bbtb'];
                }
            } catch (\Throwable $e) {
                Log::warning('ML Service tidak terjangkau, memakai fallback: ' . $e->getMessage());
            }

            // 2. Simpan Data Penimbangan
            $penimbangan = Penimbangan::create([
                'id_balita' => $validated['id_balita'],
                'id_kader' => $validated['id_kader'],
                'tanggal_pengukuran' => $validated['tanggal_pengukuran'],
                'usia_bulan' => $validated['usia_bulan'],
                'berat_badan_kg' => $validated['berat_badan_kg'],
                'tinggi_badan_cm' => $validated['tinggi_badan_cm'],
                'lingkar_kepala_lk_cm' => $validated['lingkar_kepala_lk_cm'],
                'lingkar_lengan_lila_cm' => $validated['lingkar_lengan_lila_cm'],
                'cara_pengukuran' => $validated['cara_pengukuran'],
            ]);

            $statusGizi = $mlResult['status_gizi_ml'];
            $isFlagged = $statusGizi !== 'normal' || $validated['lingkar_lengan_lila_cm'] < 12.5;

            // 3. Simpan Hasil Klasifikasi (ML + Z-Score)
            $hasil = HasilKlasifikasi::create([
                'id_penimbangan' => $penimbangan->id_penimbangan,
                'zscore_bbu' => $mlResult['zscore_bbu'],
                'zscore_tbu' => $mlResult['zscore_tbu'],
                'zscore_bbtb' => $mlResult['zscore_bbtb'],
                'status_gizi_ml' => $statusGizi,
                'status_stunting' => $validated['status_stunting'] ?? ($statusGizi === 'stunting' ? 'stunting' : 'normal'),
                'status_wasting' => $validated['status_wasting'] ?? ($statusGizi === 'wasting' ? 'wasting' : 'normal'),
                'status_weight_category' => $validated['status_weight_category'] ?? $statusGizi,
                'is_flagged' => $isFlagged,
                'catatan_petugas' => $validated['catatan_petugas'] ?? null,
            ]);

            // 4. RULE ENGINE: Ambil aturan berdasarkan Status Gizi + Panduan Kelompok Usia
            $usia = $validated['usia_bulan'];
            $aturanStatus = AturanRekomendasi::where('status_gizi_target', $statusGizi)->first();
            $aturanUsia = AturanRekomendasi::where('status_gizi_target', 'panduan_usia')
                ->where('kelompok_usia_min', '<=', $usia)
                ->where('kelompok_usia_max', '>=', $usia)
                ->first();

            $rekomendasiTersimpan = [];

            if ($aturanStatus) {
                $rekomendasiTersimpan[] = RekomendasiBalita::create([
                    'id_hasil' => $hasil->id_hasil,
                    'id_aturan' => $aturanStatus->id_aturan,
                    'detail_saran_tindak_lanjut' => "[Status Gizi: " . strtoupper($statusGizi) . "] "
                        . $aturanStatus->teks_edukasi_gizi . " | Pemantauan: "
                        . $aturanStatus->teks_pmt_lokal . " | Tindak Lanjut: "
                        . $aturanStatus->tindak_lanjut_rujukan,
                ]);
            }

            if ($aturanUsia) {
                $rekomendasiTersimpan[] = RekomendasiBalita::create([
                    'id_hasil' => $hasil->id_hasil,
                    'id_aturan' => $aturanUsia->id_aturan,
                    'detail_saran_tindak_lanjut' => "[Panduan Usia {$usia} Bulan] "
                        . $aturanUsia->teks_edukasi_gizi . " | "
                        . $aturanUsia->teks_pmt_lokal . " | "
                        . $aturanUsia->tindak_lanjut_rujukan,
                ]);
            }

            // 5. Buat Notifikasi Otomatis untuk Orang Tua
            Notifikasi::create([
                'id_orangtua' => $balita->id_orangtua,
                'id_balita' => $balita->id_balita,
                'judul_notif' => 'Hasil Penimbangan Posyandu: ' . $balita->nama_balita,
                'pesan_notif' => "Penimbangan tanggal {$validated['tanggal_pengukuran']} (BB: {$validated['berat_badan_kg']} kg, TB: {$validated['tinggi_badan_cm']} cm) telah dicatat. Status gizi terdeteksi: " . strtoupper($statusGizi) . ". Silakan cek detail rekomendasi gizi anak.",
                'is_read' => false,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Data penimbangan, klasifikasi, dan rekomendasi berhasil diproses.',
                'data' => $penimbangan->load([
                    'balita.orangTua',
                    'hasilKlasifikasi.rekomendasiBalita.aturanRekomendasi',
                ]),
            ], 201);
        });
    }
}