<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kader extends Model
{
    protected $table = 'kader';
    protected $primaryKey = 'id_kader';
    public $timestamps = false;

    protected $fillable = [
        'id_user',
        'nama_kader',
        'posyandu_unit',
        'wilayah_rt_rw',
        'no_hp',
        'jabatan_kader',
        'created_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }

    public function penimbangan()
    {
        return $this->hasMany(Penimbangan::class, 'id_kader', 'id_kader');
    }
}