from google.oauth2 import id_token
from google.auth.transport import requests
from config.settings import Config

class GoogleTokenVerifier:
    @staticmethod
    def verify_token(id_token_str):
        try:
            id_info = id_token.verify_oauth2_token(id_token_str, requests.Request(), Config.GOOGLE_CLIENT_ID)
            return id_info['email']
        except ValueError:
            raise Exception('Invalid Google token.')
