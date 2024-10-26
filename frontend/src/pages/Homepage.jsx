import React, { useState, useEffect } from "react";
import ModalForm from "../components/ModalForm";
import useFetchUsers from "../components/FetchUsers";

export default function Homepage() {
  const { users, fetchUsers } = useFetchUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="text-center">
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
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <ModalForm />
      </div>
    </>
  );
}
