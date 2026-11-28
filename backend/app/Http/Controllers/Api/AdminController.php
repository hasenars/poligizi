<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Balita;
use App\Models\HasilKlasifikasi;
use App\Models\Kader;
use App\Models\OrangTua;
use App\Models\Penimbangan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class AdminController extends Controller
{
    public function dashboard()
    {
        $sebaranStatus = HasilKlasifikasi::select('status_gizi_ml', DB::raw('count(*) as total'))
            ->groupBy('status_gizi_ml')
            ->pluck('total', 'status_gizi_ml');

        $balitaBerisiko = HasilKlasifikasi::with(['penimbangan.balita.orangTua'])
            ->where('is_flagged', true)
            ->latest('id_hasil')
            ->limit(10)
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'total_balita' => Balita::count(),
                'total_orang_tua' => OrangTua::count(),
                'total_kader' => Kader::count(),
                'total_penimbangan' => Penimbangan::count(),
                'sebaran_status_gizi' => $sebaranStatus,
                'balita_berisiko_terbaru' => $balitaBerisiko,
            ],
        ]);
    }

    public function simulasiModel(Request $request)
    {
        $validated = $request->validate([
            'umur_bulan' => 'required|integer|min:0|max:60',
            'jenis_kelamin' => 'required|in:L,P,l,p',
            'bb_kg' => 'required|numeric|min:1|max:50',
            'tb_cm' => 'required|numeric|min:20|max:150',
        ]);

        $response = Http::timeout(10)->post(
            env('ML_SERVICE_URL', 'http://127.0.0.1:8001') . '/simulate',
            $validated
        );

        if (!$response->successful()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal terhubung ke layanan ML Python.',
            ], 502);
        }

        return response()->json($response->json());
    }

    public function metricsModel()
    {
        $response = Http::timeout(5)->get(
            env('ML_SERVICE_URL', 'http://127.0.0.1:8001') . '/metrics'
        );

        if (!$response->successful()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal mengambil metrik model dari ML Service.',
            ], 502);
        }

        return response()->json($response->json());
    }
}