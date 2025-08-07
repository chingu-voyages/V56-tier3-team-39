import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl text-blue-500 mb-4">Welcome to Socket Chat</h2>
      <p className="text-gray-700 mb-6">Connect with friends and start chatting!</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        onClick={() => navigate("../auth/Login")}
      >
        Start Chatting
      </button>
    </div>
  );
}
