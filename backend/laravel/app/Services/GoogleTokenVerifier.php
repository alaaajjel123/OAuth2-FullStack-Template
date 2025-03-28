<?php

namespace App\Services;

use Google_Client;
use Exception;

class GoogleTokenVerifier
{
    private $clientId;

    public function __construct()
    {
        $this->clientId = env('GOOGLE_CLIENT_ID');
    }

    public function verifyToken($idToken)
    {
        $client = new Google_Client(['client_id' => $this->clientId]);

        try {
            $payload = $client->verifyIdToken($idToken);
            if ($payload) {
                return $payload['email'];
            }
            throw new Exception('Invalid Google token.');
        } catch (Exception $e) {
            throw new Exception('Failed to verify Google token.');
        }
    }
}
