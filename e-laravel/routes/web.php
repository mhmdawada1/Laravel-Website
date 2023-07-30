<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;




Route::get('/token', function () {
  return csrf_token(); 
});
