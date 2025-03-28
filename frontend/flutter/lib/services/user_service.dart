import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/user.dart';
import 'auth_service.dart';

class UserService {
  static const String apiUrl = 'http://localhost:8080/api/user';

  Future<User> getUserProfile() async {
    final token = await AuthService().getToken();
    final response = await http.get(
      Uri.parse('$apiUrl/profile'),
      headers: {'Authorization': 'Bearer $token'},
    );

    if (response.statusCode == 200) {
      return User.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to load user profile');
    }
  }

  Future<User> updateUsername(String newUsername) async {
    final token = await AuthService().getToken();
    final response = await http.put(
      Uri.parse('$apiUrl/update-username'),
      headers: {
        'Authorization': 'Bearer $token',
        'Content-Type': 'application/json'
      },
      body: jsonEncode({'username': newUsername}),
    );

    if (response.statusCode == 200) {
      return User.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to update username');
    }
  }
}
