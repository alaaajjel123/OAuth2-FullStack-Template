<?php

namespace App\Services;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JwtService
{
    private $secretKey;
    private $expiration;

    public function __construct()
    {
        $this->secretKey = env('JWT_SECRET');
        $this->expiration = env('JWT_EXPIRATION');
    }

    public function generateToken($email)
    {
        $payload = [
            'email' => $email,
            'iat' => time(),
            'exp' => time() + $this->expiration,
        ];

        return JWT::encode($payload, $this->secretKey, 'HS256');
    }

    public function validateToken($token)
    {
        try {
            JWT::decode($token, new Key($this->secretKey, 'HS256'));
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function getEmailFromToken($token)
    {
        $decoded = JWT::decode($token, new Key($this->secretKey, 'HS256'));
        return $decoded->email;
    }
}
