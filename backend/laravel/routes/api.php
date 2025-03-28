<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;

Route::post('/auth/login', [AuthController::class, 'loginWithGoogle']);

Route::get('/products', [ProductController::class, 'getProducts']);

Route::middleware('jwt')->group(function () {
    Route::get('/user/profile', [UserController::class, 'getProfile']);
    Route::put('/user/update-username', [UserController::class, 'updateUsername']);
});
