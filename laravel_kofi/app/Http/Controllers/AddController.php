<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class AddController extends Controller
{
    public function add_product(request $request) {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'category' => 'required',
            'image' => 'required'
        ]);

        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'category' => $request->category,
            'image' => $request->image
        ]);

        return $product;
    }
}
