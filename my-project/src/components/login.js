// src/components/Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.jpg"; // Adjust the path to your logo

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const authenticate = (event) => {
    event.preventDefault();

    // Example credentials; replace with actual authentication logic
    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      // Navigate to the dashboard
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <img src={logo} alt="CRY Logo" className="w-24 mx-auto mb-4" />
        <h1 className="text-xl font-semibold text-yellow-300 mb-4">
          CRY Login
        </h1>
        <form className="login-form" onSubmit={authenticate}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
          >
            Login
          </button>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
