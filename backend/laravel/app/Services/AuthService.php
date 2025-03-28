<?php

namespace App\Services;

use App\Models\User;
use App\Services\JwtService;
use App\Services\GoogleTokenVerifier;

class AuthService
{
    private $jwtService;
    private $googleTokenVerifier;

    public function __construct(JwtService $jwtService, GoogleTokenVerifier $googleTokenVerifier)
    {
        $this->jwtService = $jwtService;
        $this->googleTokenVerifier = $googleTokenVerifier;
    }

    public function authenticateWithGoogle($idToken)
    {
        $email = $this->googleTokenVerifier->verifyToken($idToken);

        $user = User::firstOrCreate(['email' => $email], ['username' => 'default_username']);
        $jwtToken = $this->jwtService->generateToken($user->email);

        return $jwtToken;
    }
}
