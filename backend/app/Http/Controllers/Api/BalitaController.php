<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Balita;
use App\Models\OrangTua;
use Illuminate\Http\Request;

class BalitaController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // Jika yang login orang tua, hanya tampilkan balita miliknya
        if ($user->role === 'orang_tua' && $user->orangTua) {
            $balita = Balita::with(['orangTua', 'penimbangan.hasilKlasifikasi.rekomendasiBalita.aturanRekomendasi'])
                ->where('id_orangtua', $user->orangTua->id_orangtua)
                ->orderBy('nama_balita')
                ->get();
        } else {
            // Admin & Kader bisa melihat semua data balita
            $balita = Balita::with(['orangTua', 'penimbangan.hasilKlasifikasi'])
                ->orderBy('created_at', 'desc')
                ->get();
        }

        return response()->json([
            'status' => 'success',
            'data' => $balita,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_orangtua' => 'required|exists:orang_tua,id_orangtua',
            'nik_balita' => 'required|string|size:16|unique:balita,nik_balita',
            'nama_balita' => 'required|string|max:100',
            'tanggal_lahir' => 'required|date',
            'jenis_kelamin' => 'required|in:L,P',
            'bb_lahir_kg' => 'required|numeric|min:0.5|max:10',
            'tb_lahir_cm' => 'required|numeric|min:20|max:70',
            'posyandu_unit' => 'required|string|max:50',
        ]);

        $balita = Balita::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data balita berhasil ditambahkan.',
            'data' => $balita->load('orangTua'),
        ], 201);
    }

    public function show($id)
    {
        $balita = Balita::with([
            'orangTua',
            'penimbangan' => fn ($q) => $q->orderBy('tanggal_pengukuran', 'desc'),
            'penimbangan.hasilKlasifikasi.rekomendasiBalita.aturanRekomendasi',
        ])->findOrFail($id);

        return response()->json([
            'status' => 'success',
            'data' => $balita,
        ]);
    }

    public function update(Request $request, $id)
    {
        $balita = Balita::findOrFail($id);

        $validated = $request->validate([
            'nik_balita' => 'sometimes|string|size:16|unique:balita,nik_balita,' . $id . ',id_balita',
            'nama_balita' => 'sometimes|string|max:100',
            'tanggal_lahir' => 'sometimes|date',
            'jenis_kelamin' => 'sometimes|in:L,P',
            'bb_lahir_kg' => 'sometimes|numeric|min:0.5|max:10',
            'tb_lahir_cm' => 'sometimes|numeric|min:20|max:70',
            'posyandu_unit' => 'sometimes|string|max:50',
        ]);

        $balita->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data balita berhasil diperbarui.',
            'data' => $balita,
        ]);
    }

    public function destroy($id)
    {
        $balita = Balita::findOrFail($id);
        $balita->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Data balita berhasil dihapus.',
        ]);
    }

    // Endpoint bantu untuk dropdown daftar orang tua saat kader tambah balita
    public function listOrangTua()
    {
        return response()->json([
            'status' => 'success',
            'data' => OrangTua::orderBy('nama_ibu')->get(),
        ]);
    }
}