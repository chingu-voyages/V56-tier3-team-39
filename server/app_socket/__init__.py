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

    CORS(app)

    db.init_app(app)
    # Ensure tables are created in dev environments
    with app.app_context():
        db.create_all()
    app.register_blueprint(api, url_prefix="/api")
    socketio.init_app(app)

    return app