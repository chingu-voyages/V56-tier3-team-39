from flask import Blueprint, jsonify, request
from .models import db, User, Message

api = Blueprint('api', __name__)
auth_bp = Blueprint('auth', __name__)

@api.route('/messages', methods=['GET'])
def get_messages():
    messages = Message.query.order_by(Message.timestamp.asc()).all()
    return jsonify([m.serialize() for m in messages])

@api.route('/messages', methods=['POST'])
def create_message():
    data = request.get_json()
    msg = Message(sender=data['sender'], content=data['content'])
    db.session.add(msg)
    db.session.commit()
    return jsonify(msg.serialize()), 201

@api.route('/users', methods=['GET']) # get all users
def get_users():
    users = User.query.all()
    return jsonify([u.serialize() for u in users])

@api.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(username=data['username'], email=data['email'], password=data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize()), 201

@api.route('/login', methods=['POST']) # get user upon login
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'error': 'Username and password required'}), 400

    user = User.query.filter_by(username=username, password=password).first()
    if user:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401
        
@api.route('/logout', methods=['POST'])
def logout():

# @api.route('/users/<int:user_id>', methods=['PUT'])

# @api.route('/users/<int:user_id>', methods=['DELETE'])