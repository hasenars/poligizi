<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admin';
    protected $primaryKey = 'id_admin';
    public $timestamps = false;

    protected $fillable = [
        'id_user',
        'nama_admin',
        'nip_pembina',
        'no_hp',
        'instansi',
        'created_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }

    public function aturanRekomendasi()
    {
        return $this->hasMany(AturanRekomendasi::class, 'id_admin', 'id_admin');
    }
}