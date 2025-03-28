from app.services.jwt_service import JwtService
from app.services.google_token_verifier import GoogleTokenVerifier
from app.models.user import User
from app import db

class AuthService:
    @staticmethod
    def login_with_google(token):
        # Verify Google Token
        email = GoogleTokenVerifier.verify_token(token)

        # Check if user exists in DB
        user = User.query.filter_by(email=email).first()
        if not user:
            # If user doesn't exist, create a new user
            user = User(email=email, username=email.split('@')[0])
            db.session.add(user)
            db.session.commit()

        # Generate JWT Token
        jwt_token = JwtService.generate_token(email)
        return jwt_token

    @staticmethod
    def get_user_from_token(token):
        email = JwtService.get_email_from_token(token)
        return User.query.filter_by(email=email).first()

