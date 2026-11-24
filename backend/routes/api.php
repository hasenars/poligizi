<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BalitaController;
use App\Http\Controllers\Api\PenimbanganController;

// Endpoint Publik (Tanpa Token)
Route::post('/login', [AuthController::class, 'login']);

// Endpoint Terproteksi (Wajib Header Authorization: Bearer <token>)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);

    // Manajemen Data Balita & Orang Tua
    Route::get('/orang-tua', [BalitaController::class, 'listOrangTua']);
    Route::apiResource('/balita', BalitaController::class);

    // Input & Riwayat Penimbangan + Klasifikasi + Rekomendasi
    Route::get('/penimbangan', [PenimbanganController::class, 'index']);
    Route::post('/penimbangan', [PenimbanganController::class, 'store']);
});