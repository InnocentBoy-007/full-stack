import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const SignIn = ({ toggleForm }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const resetFunction = () => {
    setUsername("");
    setPassword("");
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND}/signIn`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login success:", response.data);

      resetFunction();
      navigate("/home"); // Navigate to the home page after successful login
    } catch (error) {
      if (error.response) {
        console.error("Login error:", error.response.data);
      } else {
        console.error("Request error:", error.message);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 px-4 sm:px-0">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white p-6 sm:p-8 shadow-lg rounded-lg md:mt-0 sm:mt-0 mt-[-30%]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign In
        </h2>
        {/* Form to capture username and password */}
        <form onSubmit={submit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?
          <button
            onClick={toggleForm}
            className="text-pink-500 font-semibold ml-1"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
