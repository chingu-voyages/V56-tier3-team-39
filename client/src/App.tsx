import { useContext, useState } from "react";
import Home from "./components/home/Home"
import { AuthContext } from "./context/AuthContext"

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const {token} = useContext(AuthContext)
  return token ? children : <Home />
}
function App() {

  return (
    <div>
      <PrivateRoute>
        <h2 className="text-2xl text-blue-500">Socket Chat</h2>
        <input type="text" placeholder="Enter your message" />
        <button>Send</button>
      </PrivateRoute>
    </div>
  )
}

export default App
