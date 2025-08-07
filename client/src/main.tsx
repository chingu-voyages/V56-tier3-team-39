import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthProvider.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.tsx'
import Login from './components/auth/Login.tsx'
import Register from './components/auth/Register.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/Register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>,
)
