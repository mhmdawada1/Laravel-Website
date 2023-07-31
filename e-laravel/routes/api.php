<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\SignController;

Route::post('/users', [TestController::class, 'store']);
Route::post('/login',[SignController::class, 'signIn']);




