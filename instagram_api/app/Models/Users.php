<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
  use HasFactory;

  protected $table = 'users';
  protected $fillable = [
    'username',
    'fullname',
    'email',
    'password'
  ];

  public function posts()
  {
    return $this->hasMany(Posts::class);
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

  // public function follower()
  // {
  //   return $this->hasMany(Followers::class);
  // }

  public function followers()
  {
    return $this->belongsToMany(Users::class, 'followers', 'following_id', 'follower_id')->withTimestamps();
  }

  public function followings()
  {
    return $this->belongsToMany(Users::class, 'followers', 'follower_id', 'following_id')->withTimestamps();
  }

  public function profile()
  {
    return $this->belongsTo(Profile::class);
  }
}
