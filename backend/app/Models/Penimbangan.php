<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penimbangan extends Model
{
    protected $table = 'penimbangan';
    protected $primaryKey = 'id_penimbangan';
    public $timestamps = false;

    protected $fillable = [
        'id_balita',
        'id_kader',
        'tanggal_pengukuran',
        'usia_bulan',
        'berat_badan_kg',
        'tinggi_badan_cm',
        'lingkar_kepala_lk_cm',
        'lingkar_lengan_lila_cm',
        'cara_pengukuran',
        'created_at',
    ];

    protected $casts = [
        'tanggal_pengukuran' => 'date',
        'usia_bulan' => 'integer',
        'berat_badan_kg' => 'float',
        'tinggi_badan_cm' => 'float',
        'lingkar_kepala_lk_cm' => 'float',
        'lingkar_lengan_lila_cm' => 'float',
    ];

    public function balita()
    {
        return $this->belongsTo(Balita::class, 'id_balita', 'id_balita');
    }

    public function kader()
    {
        return $this->belongsTo(Kader::class, 'id_kader', 'id_kader');
    }

    public function hasilKlasifikasi()
    {
        return $this->hasOne(HasilKlasifikasi::class, 'id_penimbangan', 'id_penimbangan');
    }
}