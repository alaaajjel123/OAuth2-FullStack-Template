from flask import jsonify
from app.models.product import Product

class ProductController:
    @staticmethod
    def get_products():
        products = Product.query.all()
        return jsonify([{'name': p.name, 'price': p.price} for p in products])
