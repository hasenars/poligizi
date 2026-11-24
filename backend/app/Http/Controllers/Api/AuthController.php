<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Email atau password salah.',
            ], 401);
        }

        if (!$user->status_aktif) {
            return response()->json([
                'status' => 'error',
                'message' => 'Akun Anda nonaktif. Hubungi admin Puskesmas.',
            ], 403);
        }

        // Ambil profil spesifik sesuai role
        $profil = match ($user->role) {
            'admin' => $user->admin,
            'kader' => $user->kader,
            'orang_tua' => $user->orangTua,
            default => null,
        };

        $token = $user->createToken('poligizi-token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Login berhasil.',
            'token' => $token,
            'user' => [
                'id_user' => $user->id_user,
                'email' => $user->email,
                'role' => $user->role,
                'profil' => $profil,
            ],
        ]);
    }

    public function me(Request $request)
    {
        $user = $request->user();
        $profil = match ($user->role) {
            'admin' => $user->admin,
            'kader' => $user->kader,
            'orang_tua' => $user->orangTua,
            default => null,
        };

        return response()->json([
            'status' => 'success',
            'user' => [
                'id_user' => $user->id_user,
                'email' => $user->email,
                'role' => $user->role,
                'profil' => $profil,
            ],
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Logout berhasil.',
        ]);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|string|min:8|confirmed',
        ]);

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Password lama tidak sesuai.',
            ], 422);
        }

        $user->update([
            'password' => Hash::make($request->new_password),
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Password berhasil diperbarui.',
        ]);
    }
}