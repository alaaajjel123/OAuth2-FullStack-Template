import jwt
import datetime
from config.settings import Config

class JwtService:
    @staticmethod
    def generate_token(email):
        payload = {
            'email': email,
            'iat': datetime.datetime.utcnow(),
            'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=Config.JWT_EXPIRATION),
        }
        return jwt.encode(payload, Config.JWT_SECRET, algorithm='HS256')

    @staticmethod
    def validate_token(token):
        try:
            jwt.decode(token, Config.JWT_SECRET, algorithms=['HS256'])
            return True
        except jwt.ExpiredSignatureError:
            return False
        except jwt.InvalidTokenError:
            return False

    @staticmethod
    def get_email_from_token(token):
        decoded = jwt.decode(token, Config.JWT_SECRET, algorithms=['HS256'])
        return decoded['email']
