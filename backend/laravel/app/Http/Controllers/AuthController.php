<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function loginWithGoogle(Request $request)
    {
        $token = $request->input('token');
        $jwtToken = $this->authService->authenticateWithGoogle($token);

        return response()->json(['token' => $jwtToken]);
    }
}
