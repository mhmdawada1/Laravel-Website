<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request; // Import the Request class
use App\Models\User;

class TestController extends BaseController
{
    public function store(Request $request) // Inject the Request object here
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required', // Add more validation rules here...
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'fname' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);

        // auth()->login($user);

        // Optionally, you can return a response to indicate success or failure.
        return response()->json(['message' => 'User created successfully']);
    }
}
