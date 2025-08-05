from flask import Blueprint, jsonify, request
from .models import db, Message

api = Blueprint('api', __name__)

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