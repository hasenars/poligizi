<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Balita extends Model
{
    protected $table = 'balita';
    protected $primaryKey = 'id_balita';
    public $timestamps = false;

    protected $fillable = [
        'id_orangtua',
        'nik_balita',
        'nama_balita',
        'tanggal_lahir',
        'jenis_kelamin',
        'bb_lahir_kg',
        'tb_lahir_cm',
        'posyandu_unit',
        'created_at',
    ];

    protected $casts = [
        'tanggal_lahir' => 'date',
        'bb_lahir_kg' => 'float',
        'tb_lahir_cm' => 'float',
    ];

    public function orangTua()
    {
        return $this->belongsTo(OrangTua::class, 'id_orangtua', 'id_orangtua');
    }

    public function penimbangan()
    {
        return $this->hasMany(Penimbangan::class, 'id_balita', 'id_balita');
    }
}