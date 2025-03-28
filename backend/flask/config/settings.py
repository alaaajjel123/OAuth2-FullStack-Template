import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET = os.getenv('JWT_SECRET')
    JWT_EXPIRATION = int(os.getenv('JWT_EXPIRATION'))
    GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
