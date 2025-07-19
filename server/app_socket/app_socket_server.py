# server/app_socket_server.py (or keep as app.py if it's your main)

from flask import Flask
import socketio
from gevent import pywsgi
from geventwebsocket.handler import WebSocketHandler

sio = socketio.Server(cors_allowed_origins="*", async_mode='gevent')
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

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == '__main__':
    server = pywsgi.WSGIServer(('0.0.0.0', 5000), app, handler_class=WebSocketHandler)
    print("Starting Gevent WSGI server on port 5000...")
    server.serve_forever()
