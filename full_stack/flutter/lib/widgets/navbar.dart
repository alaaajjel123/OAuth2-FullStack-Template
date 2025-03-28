import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/auth_service.dart';

class NavBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthService>(context);

    return Row(
      children: [
        TextButton(
          onPressed: () => Navigator.pushReplacementNamed(context, '/home'),
          child: Text('Home'),
        ),
        if (authService.user != null)
          TextButton(
            onPressed: () =>
                Navigator.pushReplacementNamed(context, '/profile'),
            child: Text('Profile'),
          ),
        if (authService.user != null)
          TextButton(
            onPressed: () async {
              await authService.logout();
              Navigator.pushReplacementNamed(context, '/login');
            },
            child: Text('Logout'),
          ),
        if (authService.user == null)
          TextButton(
            onPressed: () => Navigator.pushReplacementNamed(context, '/login'),
            child: Text('Login'),
          ),
      ],
    );
  }
}
