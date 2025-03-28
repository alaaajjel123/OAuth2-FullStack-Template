from flask import Blueprint
from app.controllers.user_controller import UserController
from app.middleware.jwt_middleware import jwt_middleware

user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/user/profile', methods=['GET'])
@jwt_middleware
def get_profile():
    return UserController.get_profile()

@user_routes.route('/user/update-username', methods=['PUT'])
@jwt_middleware
def update_username():
    return UserController.update_username()
