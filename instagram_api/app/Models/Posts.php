<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
  use HasFactory;

  protected $table = 'posts';
  public function user()
  {
    return $this->belongsTo(Users::class);
  }

  public function comments()
  {
    return $this->hasMany(Comments::class);
  }

  public function savepost()
  {
    return $this->hasMany(SavePost::class);
  }

  public function favorites()
  {
    return $this->hasMany(Favorites::class);
  }
}
