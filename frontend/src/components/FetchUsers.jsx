import React, { useState } from "react";
import axios from "axios";

export default function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const fetchUsersURL = import.meta.env.VITE_BACKEND;
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${fetchUsersURL}/fetchUsers`);
      setUsers(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.log("Bad request from frontend: ", error);
    }
  };
  return { users, fetchUsers };
}
