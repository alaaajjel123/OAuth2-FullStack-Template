from flask import Blueprint
from app.controllers.product_controller import ProductController

product_routes = Blueprint('product_routes', __name__)

@product_routes.route('/products', methods=['GET'])
def get_products():
    return ProductController.get_products()
