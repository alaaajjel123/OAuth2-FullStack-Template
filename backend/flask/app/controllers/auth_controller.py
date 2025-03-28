from flask import request, jsonify
from app.services.google_token_verifier import GoogleTokenVerifier
from app.services.jwt_service import JwtService
from app.models.user import User
from app import db

class AuthController:
    @staticmethod
    def login_with_google():
        token = request.json.get('token')
        email = GoogleTokenVerifier.verify_token(token)

        user = User.query.filter_by(email=email).first()
        if not user:
            user = User(email=email, username=email.split('@')[0])
            db.session.add(user)
            db.session.commit()

        jwt_token = JwtService.generate_token(email)
        return jsonify({'token': jwt_token})
