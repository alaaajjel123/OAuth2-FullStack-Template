from flask import Blueprint
from app.controllers.auth_controller import AuthController

auth_routes = Blueprint('auth_routes', __name__)

@auth_routes.route('/auth/login', methods=['POST'])
def login_with_google():
    return AuthController.login_with_google()
