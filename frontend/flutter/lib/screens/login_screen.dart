import 'package:flutter/material.dart';
import 'package:flutter_app/services/auth_service.dart';

class LoginScreen extends StatelessWidget {
  final AuthService _authService = AuthService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () async {
            // Implement Google OAuth2 login logic here
            const googleToken =
                'dummy-google-token'; // Replace with actual token
            await _authService.loginWithGoogle(googleToken);
            Navigator.pushNamed(context, '/home');
          },
          child: Text('Login with Google'),
        ),
      ),
    );
  }
}
