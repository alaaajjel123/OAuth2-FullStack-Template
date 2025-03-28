from flask import request, jsonify
from app.services.jwt_service import JwtService

def jwt_middleware(func):
    def wrapper(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token or not JwtService.validate_token(token):
            return jsonify({'error': 'Unauthorized'}), 401
        return func(*args, **kwargs)
    return wrapper
