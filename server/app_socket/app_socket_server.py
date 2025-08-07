  from app_socket import create_app, socketio
  from app_socket.models import db

  app = create_app()

  if __name__ == "__main__":
      with app.app_context():
          db.create_all()  # ensure tables exist
      socketio.run(app, host="0.0.0.0", port=5000)