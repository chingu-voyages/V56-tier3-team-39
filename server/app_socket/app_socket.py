# server/app.py
from flask import Flask
import socketio

sio = socketio.Server(cors_allowed_origins="*")
app = Flask(__name__)
app.wsgi_app = socketio.WSGIApp(sio, app.wsgi_app)

@sio.event
def connect(sid, environ):
    print(f'Client connected: {sid}')

@sio.event
def message(sid, data):
    print(f'Message from {sid}: {data}')
    sio.send(f"Echo: {data}", to=sid)

@sio.event
def disconnect(sid):
    print(f'Client disconnected: {sid}')

if __name__ == '__main__':
    app.run(port=5000)
