from flask import request, jsonify
from app.services.jwt_service import JwtService
from app.models.user import User

class UserController:
    @staticmethod
    def get_profile():
        token = request.headers.get('Authorization')
        email = JwtService.get_email_from_token(token)
        user = User.query.filter_by(email=email).first()
        return jsonify({'email': user.email, 'username': user.username})

    @staticmethod
    def update_username():
        token = request.headers.get('Authorization')
        email = JwtService.get_email_from_token(token)
        user = User.query.filter_by(email=email).first()

        new_username = request.json.get('username')
        user.username = new_username
        db.session.commit()

        return jsonify({'email': user.email, 'username': user.username})
