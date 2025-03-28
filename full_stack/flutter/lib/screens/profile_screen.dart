import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/auth_service.dart';
import '../services/user_service.dart';
import '../widgets/navbar.dart';
import '../models/user.dart';

class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthService>(context);
    final userService = UserService();

    return Scaffold(
      appBar: AppBar(
        title: Text('Profile'),
      ),
      body: Column(
        children: [
          NavBar(),
          if (authService.user != null)
            FutureBuilder<User>(
              future: userService.fetchUser(authService.user!.email),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return Center(child: CircularProgressIndicator());
                } else if (snapshot.hasError) {
                  return Center(child: Text('Error: ${snapshot.error}'));
                } else {
                  final user = snapshot.data!;
                  return Column(
                    children: [
                      Text('Email: ${user.email}'),
                      Text('Username: ${user.username}'),
                    ],
                  );
                }
              },
            ),
        ],
      ),
    );
  }
}
