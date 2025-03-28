import 'package:flutter/material.dart';
import 'package:flutter_app/services/user_service.dart';
import 'package:flutter_app/models/user.dart';

class ProfileScreen extends StatefulWidget {
  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  final UserService _userService = UserService();
  User? _user;

  @override
  void initState() {
    super.initState();
    _loadUserProfile();
  }

  Future<void> _loadUserProfile() async {
    final user = await _userService.getUserProfile();
    setState(() {
      _user = user;
    });
  }

  Future<void> _updateUsername() async {
    final newUsername = await showDialog<String>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Update Username'),
        content: TextField(
          decoration: InputDecoration(hintText: 'Enter new username'),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text('Cancel'),
          ),
          TextButton(
            onPressed: () {
              final newUsername =
                  (context as Element).findRenderObject() as String;
              Navigator.pop(context, newUsername);
            },
            child: Text('Save'),
          ),
        ],
      ),
    );

    if (newUsername != null) {
      final updatedUser = await _userService.updateUsername(newUsername);
      setState(() {
        _user = updatedUser;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Profile'),
      ),
      body: _user == null
          ? Center(child: CircularProgressIndicator())
          : Column(
              children: [
                Text('Email: ${_user!.email}'),
                Text('Username: ${_user!.username}'),
                ElevatedButton(
                  onPressed: _updateUsername,
                  child: Text('Update Username'),
                ),
              ],
            ),
    );
  }
}
