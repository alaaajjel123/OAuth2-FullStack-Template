<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\JwtService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $jwtService;

    public function __construct(JwtService $jwtService)
    {
        $this->jwtService = $jwtService;
    }

    public function getProfile(Request $request)
    {
        $token = $request->header('Authorization');
        $email = $this->jwtService->getEmailFromToken($token);
        $user = User::where('email', $email)->first();

        return response()->json($user);
    }

    public function updateUsername(Request $request)
    {
        $token = $request->header('Authorization');
        $email = $this->jwtService->getEmailFromToken($token);
        $user = User::where('email', $email)->first();

        $newUsername = $request->input('username');
        $user->username = $newUsername;
        $user->save();

        return response()->json($user);
    }
}
