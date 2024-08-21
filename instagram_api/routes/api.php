<?php

use App\Http\Controllers\UserController;
// use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

//User
Route::post('/register', [UserController::class, 'register']); // Tạo user mới
Route::post('/login', [UserController::class, 'login']); // Tạo user mới

