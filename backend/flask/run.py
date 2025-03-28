from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config.settings import Config
from app.routes.auth_routes import auth_routes
from app.routes.product_routes import product_routes
from app.routes.user_routes import user_routes

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

app.register_blueprint(auth_routes)
app.register_blueprint(product_routes)
app.register_blueprint(user_routes)

if __name__ == '__main__':
    app.run(debug=True)
