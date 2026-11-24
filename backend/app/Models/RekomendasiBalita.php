<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RekomendasiBalita extends Model
{
    protected $table = 'rekomendasi_balita';
    protected $primaryKey = 'id_rekomendasi';
    public $timestamps = false;

    protected $fillable = [
        'id_hasil',
        'id_aturan',
        'detail_saran_tindak_lanjut',
        'tanggal_generasi',
    ];

    public function hasilKlasifikasi()
    {
        return $this->belongsTo(HasilKlasifikasi::class, 'id_hasil', 'id_hasil');
    }

    public function aturanRekomendasi()
    {
        return $this->belongsTo(AturanRekomendasi::class, 'id_aturan', 'id_aturan');
    }
}