<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class DisplayController extends Controller
{
    public function display() {
        $products = Product::all();
       return response()->json($products);
    }
}
