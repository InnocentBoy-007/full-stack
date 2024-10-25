import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = ({ toggleForm }) => {
  const postUsersUrl = import.meta.env.VITE_BACKEND;

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const resetFunction = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${postUsersUrl}/signUp`,
        { username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(
        JSON.stringify({
          message: "Sign up successfully!",
          data: response.data,
        })
      );
      resetFunction();
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 px-4 sm:px-0">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white p-6 sm:p-8 shadow-lg rounded-lg md:mt-0 sm:mt-0 mt-[-30%]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign Up
        </h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
        </div>
        <button
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
          onClick={signup}
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?
          <button
            onClick={toggleForm}
            className="text-pink-500 font-semibold ml-1"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
