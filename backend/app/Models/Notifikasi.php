<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notifikasi extends Model
{
    protected $table = 'notifikasi';
    protected $primaryKey = 'id_notifikasi';
    public $timestamps = false;

    protected $fillable = [
        'id_orangtua',
        'id_balita',
        'judul_notif',
        'pesan_notif',
        'is_read',
        'created_at',
    ];

    protected $casts = [
        'is_read' => 'boolean',
    ];

    public function orangTua()
    {
        return $this->belongsTo(OrangTua::class, 'id_orangtua', 'id_orangtua');
    }

    public function balita()
    {
        return $this->belongsTo(Balita::class, 'id_balita', 'id_balita');
    }
}