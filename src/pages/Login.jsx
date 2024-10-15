import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?size=626&ext=jpg&ga=GA1.1.1803329558.1728823935&semt=ais_hybrid')",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto bg-white rounded-lg p-6 border border-gray-300 shadow-lg">
        <h1 className="text-2xl font-bold mb-3 text-center text-blue-300">
          Welcome Back
        </h1>
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-300 text-white rounded transition duration-300 hover:bg-blue-600"
          >
            Sign In
          </button>
          <div className="text-center">
            <p className="text-sm">
              Create a new account?
              <span
                className="font-bold text-blue-500 cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign-Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
