const Product = require('../models/Product');

class ProductController {
  static async getProducts(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }
}

module.exports = ProductController; 
