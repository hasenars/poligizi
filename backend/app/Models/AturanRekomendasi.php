<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AturanRekomendasi extends Model
{
    protected $table = 'aturan_rekomendasi';
    protected $primaryKey = 'id_aturan';
    public $timestamps = false;

    protected $fillable = [
        'id_admin',
        'status_gizi_target',
        'kelompok_usia_min',
        'kelompok_usia_max',
        'kondisi_riwayat_bb',
        'teks_edukasi_gizi',
        'teks_pmt_lokal',
        'tindak_lanjut_rujukan',
        'created_at',
    ];

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'id_admin', 'id_admin');
    }
}