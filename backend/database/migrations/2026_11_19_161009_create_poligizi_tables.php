<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. TABEL USERS (Akun & Role)
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id_user');
            $table->string('email', 100)->unique();
            $table->string('password', 255);
            $table->string('role', 20); // admin / kader / orang_tua
            $table->boolean('status_aktif')->default(true);
            $table->timestamp('created_at')->useCurrent();
        });

        // 2. TABEL ADMIN
        Schema::create('admin', function (Blueprint $table) {
            $table->increments('id_admin');
            $table->unsignedInteger('id_user')->unique();
            $table->string('nama_admin', 100);
            $table->string('nip_pembina', 30)->nullable();
            $table->string('no_hp', 20)->nullable();
            $table->string('instansi', 100)->default('Puskesmas');
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
        });

        // 3. TABEL KADER
        Schema::create('kader', function (Blueprint $table) {
            $table->increments('id_kader');
            $table->unsignedInteger('id_user')->unique();
            $table->string('nama_kader', 100);
            $table->string('posyandu_unit', 50);
            $table->string('wilayah_rt_rw', 20);
            $table->string('no_hp', 20);
            $table->string('jabatan_kader', 30)->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
        });

        // 4. TABEL ORANG TUA
        Schema::create('orang_tua', function (Blueprint $table) {
            $table->increments('id_orangtua');
            $table->unsignedInteger('id_user')->unique();
            $table->string('no_kk', 16);
            $table->string('nama_ibu', 100);
            $table->string('nik_ibu', 16)->unique();
            $table->string('nama_ayah', 100)->nullable();
            $table->string('nik_ayah', 16)->nullable();
            $table->string('no_hp_wa', 20);
            $table->text('alamat_rumah');
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
        });

        // 5. TABEL BALITA
        Schema::create('balita', function (Blueprint $table) {
            $table->increments('id_balita');
            $table->unsignedInteger('id_orangtua');
            $table->string('nik_balita', 16)->unique();
            $table->string('nama_balita', 100);
            $table->date('tanggal_lahir');
            $table->string('jenis_kelamin', 1); // L / P
            $table->float('bb_lahir_kg');
            $table->float('tb_lahir_cm');
            $table->string('posyandu_unit', 50);
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('id_orangtua')->references('id_orangtua')->on('orang_tua')->onDelete('cascade');
        });

        // 6. TABEL PENIMBANGAN
        Schema::create('penimbangan', function (Blueprint $table) {
            $table->increments('id_penimbangan');
            $table->unsignedInteger('id_balita');
            $table->unsignedInteger('id_kader');
            $table->date('tanggal_pengukuran');
            $table->integer('usia_bulan');
            $table->float('berat_badan_kg');
            $table->float('tinggi_badan_cm');
            $table->float('lingkar_kepala_lk_cm');
            $table->float('lingkar_lengan_lila_cm');
            $table->string('cara_pengukuran', 15); // telentang / berdiri
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('id_balita')->references('id_balita')->on('balita')->onDelete('cascade');
            $table->foreign('id_kader')->references('id_kader')->on('kader')->onDelete('restrict');
        });

        // 7. TABEL HASIL KLASIFIKASI (ML + Z-Score)
        Schema::create('hasil_klasifikasi', function (Blueprint $table) {
            $table->increments('id_hasil');
            $table->unsignedInteger('id_penimbangan')->unique();
            $table->float('zscore_bbu')->nullable();
            $table->float('zscore_tbu')->nullable();
            $table->float('zscore_bbtb')->nullable();
            $table->string('status_gizi_ml', 30); // normal/stunting/wasting_underweight/overweight
            $table->string('status_stunting', 20)->nullable();
            $table->string('status_wasting', 20)->nullable();
            $table->string('status_weight_category', 20)->nullable();
            $table->boolean('is_flagged')->default(false);
            $table->text('catatan_petugas')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('id_penimbangan')->references('id_penimbangan')->on('penimbangan')->onDelete('cascade');
        });

        // 8. TABEL ATURAN REKOMENDASI
        Schema::create('aturan_rekomendasi', function (Blueprint $table) {
            $table->increments('id_aturan');
            $table->unsignedInteger('id_admin')->nullable();
            $table->string('status_gizi_target', 30);
            $table->integer('kelompok_usia_min')->nullable();
            $table->integer('kelompok_usia_max')->nullable();
            $table->string('kondisi_riwayat_bb', 50)->nullable();
            $table->text('teks_edukasi_gizi');
            $table->text('teks_pmt_lokal')->nullable();
            $table->text('tindak_lanjut_rujukan')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('id_admin')->references('id_admin')->on('admin')->onDelete('set null');
        });

        // 9. TABEL REKOMENDASI BALITA
        Schema::create('rekomendasi_balita', function (Blueprint $table) {
            $table->increments('id_rekomendasi');
            $table->unsignedInteger('id_hasil');
            $table->unsignedInteger('id_aturan');
            $table->text('detail_saran_tindak_lanjut');
            $table->timestamp('tanggal_generasi')->useCurrent();

            $table->foreign('id_hasil')->references('id_hasil')->on('hasil_klasifikasi')->onDelete('cascade');
            $table->foreign('id_aturan')->references('id_aturan')->on('aturan_rekomendasi')->onDelete('restrict');
        });

        // 10. TABEL NOTIFIKASI
        Schema::create('notifikasi', function (Blueprint $table) {
            $table->increments('id_notifikasi');
            $table->unsignedInteger('id_orangtua');
            $table->unsignedInteger('id_balita');
            $table->string('judul_notif', 100);
            $table->text('pesan_notif');
            $table->boolean('is_read')->default(false);
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('id_orangtua')->references('id_orangtua')->on('orang_tua')->onDelete('cascade');
            $table->foreign('id_balita')->references('id_balita')->on('balita')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notifikasi');
        Schema::dropIfExists('rekomendasi_balita');
        Schema::dropIfExists('aturan_rekomendasi');
        Schema::dropIfExists('hasil_klasifikasi');
        Schema::dropIfExists('penimbangan');
        Schema::dropIfExists('balita');
        Schema::dropIfExists('orang_tua');
        Schema::dropIfExists('kader');
        Schema::dropIfExists('admin');
        Schema::dropIfExists('users');
    }
};