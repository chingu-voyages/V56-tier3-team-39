import io, { Socket } from 'socket.io-client'

const API_BASE = '/api'

let authToken: string | null = null
export function setAuthToken(token: string) {
  authToken = token
}

function getHeaders() {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (authToken) headers['Authorization'] = `Bearer ${authToken}`
  return headers
}

export async function getMessages() {
  const response = await fetch(`${API_BASE}/messages`, {
    headers: getHeaders(),
  })
  if (!response.ok) throw new Error('Failed to fetch messages')
  return response.json()
}

export async function createMessage(sender: string, content: string) {
  const response = await fetch(`${API_BASE}/messages`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ sender, content }),
  })
  if (!response.ok) throw new Error('Failed to create message')
  return response.json()
}

export async function getUsers() {
  const response = await fetch(`${API_BASE}/users`, {
    headers: getHeaders(),
  })
  if (!response.ok) throw new Error('Failed to fetch users')
  return response.json()
}

export async function createUser(username: string, email: string, password: string) {
  const response = await fetch(`${API_BASE}/users`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ username, email, password }),
  })
  if (!response.ok) throw new Error('Failed to create user')
  return response.json()
}

export async function login(username: string, password: string) {
  const response = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ username, password }),
  })
  if (!response.ok) throw new Error('Login failed')
  return response.json()
}

// --- WebSocket (Socket.IO) Client ---
let socket: Socket | null = null

export function connectSocket(token?: string) {
  if (socket) return socket
  socket = io({
    auth: token ? { token } : undefined,
    // You can add more options here if needed
  })
  return socket
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect()
    socket = null
  }
}
