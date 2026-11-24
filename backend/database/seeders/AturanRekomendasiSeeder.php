<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AturanRekomendasi;

class AturanRekomendasiSeeder extends Seeder
{
    public function run(): void
    {
        $aturan = [
            // =========================================================================
            // BAGIAN 1: BERDASARKAN KATEGORI STATUS GIZI (TABEL 1 PDF)
            // =========================================================================
            [
                'id_admin' => 1,
                'status_gizi_target' => 'normal',
                'kelompok_usia_min' => 0,
                'kelompok_usia_max' => 59,
                'kondisi_riwayat_bb' => 'naik_adekuat',
                'teks_edukasi_gizi' => 'Pertahankan gizi seimbang sesuai kelompok usia (ASI eksklusif < 6 bln; MPASI kaya protein hewani & bervariasi mulai 6 bln; makanan keluarga 3x sehari + selingan sehat usia >= 2 thn).',
                'teks_pmt_lokal' => 'Timbang berat badan dan ukur panjang/tinggi badan rutin setiap bulan di Posyandu serta pantau kurva KMS.',
                'tindak_lanjut_rujukan' => 'Lanjutkan imunisasi lengkap, kapsul Vitamin A (Februari/Agustus), dan obat cacing sesuai jadwal. (Acuan: Buku KIA 2024 Hal. 39, 58-59, 79)',
            ],
            [
                'id_admin' => 1,
                'status_gizi_target' => 'stunting',
                'kelompok_usia_min' => 0,
                'kelompok_usia_max' => 59,
                'kondisi_riwayat_bb' => 'semua',
                'teks_edukasi_gizi' => 'Prioritaskan asupan protein hewani harian tinggi asam amino esensial (telur, ikan, ayam, daging, hati, susu) untuk mendukung kejar tumbuh linear (catch-up growth), disertai kecukupan zat besi dan zinc.',
                'teks_pmt_lokal' => 'Lakukan pemantauan pertumbuhan bulanan secara ketat di Posyandu/Puskesmas dan evaluasi pola makan serta sanitasi/kebersihan anak.',
                'tindak_lanjut_rujukan' => 'Rujuk ke Puskesmas / Tenaga Pelaksana Gizi (TPG) untuk konfirmasi pengukuran ulang, skrining penyebab infeksi kronis, dan pertimbangan program intervensi gizi spesifik. (Acuan: Buku KIA 2024 Hal. 56, 64; Juknis Tata Laksana Stunting Kemenkes)',
            ],
            [
                'id_admin' => 1,
                'status_gizi_target' => 'wasting',
                'kelompok_usia_min' => 0,
                'kelompok_usia_max' => 59,
                'kondisi_riwayat_bb' => 'tidak_naik_atau_turun',
                'teks_edukasi_gizi' => 'Tingkatkan kepadatan energi dan frekuensi makan (3-4x makan utama + 2x selingan padat gizi), tambahkan sumber lemak sehat (minyak/santan), dan utamakan lauk hewani di setiap waktu makan. (Khusus Gizi Buruk: hindari pemberian diet mandiri tanpa pengawasan medis).',
                'teks_pmt_lokal' => 'Pantau kenaikan berat badan setiap 2 minggu di Posyandu/Puskesmas serta ukur Lingkar Lengan Atas (LiLA).',
                'tindak_lanjut_rujukan' => 'Gizi Kurang: Konsultasi ke TPG Puskesmas untuk evaluasi PMT pangan lokal. Gizi Buruk / ada tanda bahaya: Rujuk segera ke dokter/Puskesmas untuk tata laksana medis gizi buruk. (Acuan: Buku KIA 2024 Hal. 49-50; Juknis PMT Lokal & Pedoman Gizi Buruk Kemenkes)',
            ],
            [
                'id_admin' => 1,
                'status_gizi_target' => 'underweight',
                'kelompok_usia_min' => 0,
                'kelompok_usia_max' => 59,
                'kondisi_riwayat_bb' => 'tidak_naik_atau_turun',
                'teks_edukasi_gizi' => 'Terapkan prinsip pemberian makan aktif (responsive feeding) dengan jadwal teratur (lama makan maks. 30 menit, tanpa gawai/TV), serta tingkatkan variasi makanan padat gizi dan protein hewani sesuai tekstur usia.',
                'teks_pmt_lokal' => 'Evaluasi kenaikan berat badan pada penimbangan bulan berikutnya untuk memastikan garis pertumbuhan di KMS kembali naik.',
                'tindak_lanjut_rujukan' => 'Jika berat badan tidak naik dalam 2 kali penimbangan berturut-turut (2T), rujuk ke Puskesmas untuk pemeriksaan kesehatan dan evaluasi program PMT lokal. (Acuan: Buku KIA 2024 Hal. 58-59; Juknis PMT Pangan Lokal Kemenkes)',
            ],
            [
                'id_admin' => 1,
                'status_gizi_target' => 'overweight',
                'kelompok_usia_min' => 0,
                'kelompok_usia_max' => 59,
                'kondisi_riwayat_bb' => 'naik_berlebih',
                'teks_edukasi_gizi' => 'Batasi makanan/minuman tinggi gula, garam, dan lemak jenuh (jajanan kemasan, minuman manis, gorengan berlebih), perbanyak sayur dan buah tinggi serat, serta sesuaikan porsi karbohidrat tanpa mengurangi protein pertumbuhan.',
                'teks_pmt_lokal' => 'Pantau indeks BB/TB setiap bulan di Posyandu serta dorong aktivitas fisik bermain aktif minimal 60 menit/hari dan batasi screen time <= 1 jam/hari untuk usia > 2 thn.',
                'tindak_lanjut_rujukan' => 'Konsultasikan ke ahli gizi/dokter Puskesmas untuk evaluasi pola makan terukur apabila indeks berada pada kategori obesitas. (Acuan: Buku KIA 2024 Hal. 79, 81; Pedoman Gizi Seimbang Kemenkes)',
            ],

            // =========================================================================
            // BAGIAN 2: PANDUAN SPESIFIK KELOMPOK USIA (TABEL 2 PDF - BUKU KIA 2024)
            // =========================================================================
            [
                'id_admin' => 1,
                'status_gizi_target' => 'panduan_usia',
                'kelompok_usia_min' => 0,
                'kelompok_usia_max' => 5,
                'kondisi_riwayat_bb' => 'usia_0_5_bulan',
                'teks_edukasi_gizi' => 'Usia 0-5 Bulan: ASI Eksklusif saja hingga usia 6 bulan tanpa tambahan air putih, makanan, minuman, obat, atau vitamin kecuali anjuran dokter. Tekstur cair (ASI langsung atau ASI perah dengan cangkir/sendok; hindari dot/botol).',
                'teks_pmt_lokal' => 'Frekuensi & Kebutuhan: Menyusu semau bayi (on demand) rata-rata 8-12 kali dalam 24 jam. Kebutuhan cairan & energi penuh dari ASI.',
                'tindak_lanjut_rujukan' => 'Skrining LiLA < 6 bln (Hal. 128): < 11,0 cm (berisiko hambatan pertumbuhan) vs >= 11,0 cm (baik). Rujuk segera jika BB tidak naik (T), tampak lemah, tidak mau menyusu, demam tinggi, sesak, atau diare (Buku KIA 2024 Hal. 39, 41, 51, 66).',
            ],
            [
                'id_admin' => 1,
                'status_gizi_target' => 'panduan_usia',
                'kelompok_usia_min' => 6,
                'kelompok_usia_max' => 8,
                'kondisi_riwayat_bb' => 'usia_6_8_bulan',
                'teks_edukasi_gizi' => 'Usia 6-8 Bulan: Lanjutkan ASI + mulai MPASI dengan prioritas protein hewani (telur, ikan, ayam, daging, hati), makanan pokok, protein nabati, sayur/buah, serta lemak/minyak/santan. Tekstur disaring/lumat dan kental (puree kental, tidak encer).',
                'teks_pmt_lokal' => 'Frekuensi & Porsi: Makan utama 2-3x sehari, selingan 1-2x sehari. Porsi bertahap mulai 2-3 sdm hingga 1/2 mangkok ukuran 250 ml (125 ml). Energi MPASI: 200 kkal/hari; Cairan: 800 ml/hari (+- 3 gelas belimbing).',
                'tindak_lanjut_rujukan' => 'Skrining LiLA (Hal. 49): Gizi Buruk < 11,5 cm, Gizi Kurang 11,5-12,4 cm, Gizi Baik > 12,4 cm. Rujuk jika LiLA < 12,5 cm, BB tidak naik (T), atau ada tanda bahaya balita (Buku KIA 2024 Hal. 58-59, 49, 51).',
            ],
            [
                'id_admin' => 1,
                'status_gizi_target' => 'panduan_usia',
                'kelompok_usia_min' => 9,
                'kelompok_usia_max' => 11,
                'kondisi_riwayat_bb' => 'usia_9_11_bulan',
                'teks_edukasi_gizi' => 'Usia 9-11 Bulan: Lanjutkan ASI + MPASI beragam berbasis bahan makanan keluarga dengan prioritas protein hewani. Tekstur dicincang halus/kasar (minced/chopped) atau makanan yang dapat dipegang (finger food).',
                'teks_pmt_lokal' => 'Frekuensi & Porsi: Makan utama 3-4x sehari, selingan 1-2x sehari. Porsi 1/2 - 3/4 mangkok ukuran 250 ml (125-200 ml). Energi MPASI: 300 kkal/hari; Cairan sesuai kebutuhan (+ ASI).',
                'tindak_lanjut_rujukan' => 'Skrining LiLA (Hal. 49): < 11,5 cm (Gizi Buruk), 11,5-12,4 cm (Gizi Kurang) wajib pemeriksaan lanjutan nakes. Rujuk jika muncul tanda bahaya (tidak bisa minum, muntah, diare, demam tinggi, sesak) (Buku KIA 2024 Hal. 58-59, 49, 51).',
            ],
            [
                'id_admin' => 1,
                'status_gizi_target' => 'panduan_usia',
                'kelompok_usia_min' => 12,
                'kelompok_usia_max' => 23,
                'kondisi_riwayat_bb' => 'usia_12_23_bulan',
                'teks_edukasi_gizi' => 'Usia 12-23 Bulan: Lanjutkan ASI hingga 2 tahun + Makanan Keluarga (MPASI menyumbang +- 70% kebutuhan gizi, ASI +- 30%). Hindari jajanan tinggi gula, garam, pengawet, dan soda. Tekstur masak biasa / makanan keluarga (diiris-iris kecil jika diperlukan).',
                'teks_pmt_lokal' => 'Frekuensi & Porsi: Makan utama 3-4x sehari, selingan 1-2x sehari. Porsi 3/4 - 1 mangkok ukuran 250 ml. Energi MPASI: 550 kkal/hari; Cairan: 1.300 ml/hari (+- 5 gelas belimbing).',
                'tindak_lanjut_rujukan' => 'Pemantauan BB & PB tiap bulan + Vit A kapsul merah & obat cacing 2x/tahun. Skrining LiLA (Hal. 49): Rujuk jika < 12,5 cm. Rujuk jika BB tidak naik (T) atau ada tanda bahaya (Buku KIA 2024 Hal. 58-59, 64-65, 49, 67).',
            ],
            [
                'id_admin' => 1,
                'status_gizi_target' => 'panduan_usia',
                'kelompok_usia_min' => 24,
                'kelompok_usia_max' => 59,
                'kondisi_riwayat_bb' => 'usia_24_59_bulan',
                'teks_edukasi_gizi' => 'Usia 24-59 Bulan: Makanan keluarga bervariasi (makanan pokok, lauk hewani & nabati, sayur, buah). Batasi selingan manis, asin, dan berlemak (GGL). Tekstur makanan keluarga padat biasa.',
                'teks_pmt_lokal' => 'Frekuensi & Porsi: Makan utama 3x sehari (pagi, siang, malam bersama keluarga), selingan 2x sehari. Porsi 1 mangkok penuh ukuran 250 ml. Cairan 2-3 thn: 1.300 ml/hari (+- 5 gelas); > 3 thn: 1.700 ml/hari (+- 7 gelas). Ditambah aktivitas fisik rutin.',
                'tindak_lanjut_rujukan' => 'Timbang BB & ukur TB tiap bulan. Skrining LiLA (Hal. 49): Berlaku sampai usia 59 bulan (< 11,5 cm Gizi Buruk; 11,5-12,4 cm Gizi Kurang). Rujuk jika BB tidak naik (T), tidak mau makan/minum, atau ada tanda bahaya (Buku KIA 2024 Hal. 71-72, 78, 123, 49, 51, 75, 77).',
            ],
        ];

        foreach ($aturan as $item) {
            AturanRekomendasi::create($item);
        }
    }
}