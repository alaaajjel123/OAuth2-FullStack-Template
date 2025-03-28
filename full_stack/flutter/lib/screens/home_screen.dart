import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/auth_service.dart';
import '../services/product_service.dart';
import '../widgets/navbar.dart';
import '../models/product.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final authService = Provider.of<AuthService>(context);
    final productService = ProductService();

    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: Column(
        children: [
          NavBar(),
          if (authService.user != null)
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text('Hello ${authService.user!.username}'),
            ),
          Expanded(
            child: FutureBuilder<List<Product>>(
              future: productService.fetchProducts(),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return Center(child: CircularProgressIndicator());
                } else if (snapshot.hasError) {
                  return Center(child: Text('Error: ${snapshot.error}'));
                } else {
                  return ListView.builder(
                    itemCount: snapshot.data!.length,
                    itemBuilder: (context, index) {
                      final product = snapshot.data![index];
                      return ListTile(
                        title: Text(product.name),
                        subtitle: Text(product.description),
                      );
                    },
                  );
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}
