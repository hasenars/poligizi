<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HasilKlasifikasi extends Model
{
    protected $table = 'hasil_klasifikasi';
    protected $primaryKey = 'id_hasil';
    public $timestamps = false;

    protected $fillable = [
        'id_penimbangan',
        'zscore_bbu',
        'zscore_tbu',
        'zscore_bbtb',
        'status_gizi_ml',
        'status_stunting',
        'status_wasting',
        'status_weight_category',
        'is_flagged',
        'catatan_petugas',
        'created_at',
    ];

    protected $casts = [
        'zscore_bbu' => 'float',
        'zscore_tbu' => 'float',
        'zscore_bbtb' => 'float',
        'is_flagged' => 'boolean',
    ];

    public function penimbangan()
    {
        return $this->belongsTo(Penimbangan::class, 'id_penimbangan', 'id_penimbangan');
    }

    public function rekomendasiBalita()
    {
        return $this->hasMany(RekomendasiBalita::class, 'id_hasil', 'id_hasil');
    }
}