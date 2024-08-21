<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\UserController;

Route::get('/test', [UserController::class, 'test']); // Tạo user mới

