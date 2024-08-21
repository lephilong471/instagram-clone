<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Followers extends Model
{
    use HasFactory;
    protected $table = 'follower';
    // public function user()
    // {
    //     return $this->belongsTo(Users::class);
    // }

    public function follower()
    {
        return $this->belongsTo(Users::class, 'follower_id');
    }

    public function following()
    {
        return $this->belongsTo(Users::class, 'following_id');
    }
}
