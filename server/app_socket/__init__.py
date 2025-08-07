from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from .models import db
from .routes import api
from .config import Config

socketio = SocketIO(cors_allowed_origins="*")

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    app.register_blueprint(api, url_prefix="/api")
    socketio.init_app(app)

    return app