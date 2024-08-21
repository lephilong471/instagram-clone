<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorites extends Model
{
  use HasFactory;

  protected $table = 'favorites';

  public function posts()
  {
    return $this->belongsTo(Posts::class);
  }

  public function user()
  {
    return $this->belongsTo(Users::class);
  }
}
