import 'package:http/http.dart' as http;
import 'dart:convert';
import '../models/product.dart';

class ProductService {
  Future<List<Product>> fetchProducts() async {
    final response =
        await http.get(Uri.parse('https://your-backend-api.com/products'));
    if (response.statusCode == 200) {
      List<dynamic> data = json.decode(response.body);
      return data.map((json) => Product.fromJson(json)).toList();
    } else {
      throw Exception('Failed to load products');
    }
  }
}
