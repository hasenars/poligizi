<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrangTua extends Model
{
    protected $table = 'orang_tua';
    protected $primaryKey = 'id_orangtua';
    public $timestamps = false;

    protected $fillable = [
        'id_user',
        'no_kk',
        'nama_ibu',
        'nik_ibu',
        'nama_ayah',
        'nik_ayah',
        'no_hp_wa',
        'alamat_rumah',
        'created_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }

    public function balita()
    {
        return $this->hasMany(Balita::class, 'id_orangtua', 'id_orangtua');
    }

    public function notifikasi()
    {
        return $this->hasMany(Notifikasi::class, 'id_orangtua', 'id_orangtua');
    }
}