import {createUser} from '../../utils/api'
import { useState } from 'react'

export default function Register() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl text-blue-500 mb-4">Register</h2>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
          <input
            value={username} 
            onChange={e => setUsername(e.target.value)}
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            value={email} 
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            value={password} 
            onChange={e => setPassword(e.target.value)}
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"

          onClick = {() => {

            event.preventDefault()

            const form = event.target.closest("form")
            if (!form) return

            if (username && email && password) {
              createUser(username, email, password)
                .then(() => {
                  alert("Registration successful!")
                })
                .catch((err) => {
                  alert("Registration failed: " + err.message)
                })
            } else {
              alert("Please fill out all fields.")
            }
          }}
        >
          Register
        </button>
      </form>
    </div>
  )
}