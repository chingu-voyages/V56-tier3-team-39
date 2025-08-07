from app_socket import create_app
from app_socket.models import db

app = create_app()

with app.app_context():
    db.create_all