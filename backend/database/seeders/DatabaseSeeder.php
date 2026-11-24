<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Admin;
use App\Models\Kader;
use App\Models\OrangTua;
use App\Models\Balita;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Akun Admin (Ahli Gizi Puskesmas)
        $userAdmin = User::create([
            'email' => 'admin@poligizi.test',
            'password' => Hash::make('password123'),
            'role' => 'admin',
            'status_aktif' => true,
        ]);

        Admin::create([
            'id_user' => $userAdmin->id_user,
            'nama_admin' => 'Ahli Gizi Puskesmas Rowosari',
            'nip_pembina' => '198501012010012001',
            'no_hp' => '081234567890',
            'instansi' => 'Puskesmas Rowosari',
        ]);

        // 2. Akun Kader Posyandu
        $userKader = User::create([
            'email' => 'kader@poligizi.test',
            'password' => Hash::make('password123'),
            'role' => 'kader',
            'status_aktif' => true,
        ]);

        Kader::create([
            'id_user' => $userKader->id_user,
            'nama_kader' => 'Siti Aminah',
            'posyandu_unit' => 'Posyandu Mawar RW 02',
            'wilayah_rt_rw' => 'RT 03 / RW 02',
            'no_hp' => '081298765432',
            'jabatan_kader' => 'Ketua Kader',
        ]);

        // 3. Akun Orang Tua & 1 Data Balita Dummy
        $userOrtu = User::create([
            'email' => 'ortu@poligizi.test',
            'password' => Hash::make('password123'),
            'role' => 'orang_tua',
            'status_aktif' => true,
        ]);

        $ortu = OrangTua::create([
            'id_user' => $userOrtu->id_user,
            'no_kk' => '3374123456780001',
            'nama_ibu' => 'Rina Wulandari',
            'nik_ibu' => '3374124506950001',
            'nama_ayah' => 'Budi Santoso',
            'nik_ayah' => '3374121208920001',
            'no_hp_wa' => '085712345678',
            'alamat_rumah' => 'Jl. Rowosari Raya No. 12, Semarang',
        ]);

        Balita::create([
            'id_orangtua' => $ortu->id_orangtua,
            'nik_balita' => '3374121005250001',
            'nama_balita' => 'Arka Pratama',
            'tanggal_lahir' => '2025-05-10',
            'jenis_kelamin' => 'L',
            'bb_lahir_kg' => 3.2,
            'tb_lahir_cm' => 49.5,
            'posyandu_unit' => 'Posyandu Mawar RW 02',
        ]);

        // 4. Jalankan Seeder Aturan Rekomendasi KIA 2024
        $this->call(AturanRekomendasiSeeder::class);
    }
}