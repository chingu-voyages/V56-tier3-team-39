// src/socket.ts
import io from 'socket.io-client';
import type { Socket } from 'socket.io-client';

const URL = 'http://localhost:3001/'//our server URL'
const socket: Socket = io(URL, {
  transports: ['websocket'],
  withCredentials: true,
});

export default socket;
