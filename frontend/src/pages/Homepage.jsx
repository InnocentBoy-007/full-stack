import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Homepage() {
  const fetchUsersURL = import.meta.env.VITE_BACKEND;
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${fetchUsersURL}/fetchUsers`);
      console.log(response.data);
      setUsers(response.data.users);
      setMessage(response.data.message);
    } catch (error) {
      console.log(`error:${error}`);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="text-center h-screen">
      <h1 style={{ fontSize: "5rem" }} className="mt-10">
        This is home page
      </h1>
      <h1>Here are the list of users:</h1>
      {users.map((user, index) => (
        <div key={user.id}>
          <div>
            {index + 1}
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Password: {user.password}</h2>
            <h2>Message: {message}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
