import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function LoginSignup() {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      {isSignIn ? (
        <SignIn toggleForm={toggleForm} />
      ) : (
        <SignUp toggleForm={toggleForm} />
      )}
    </div>
  );
}
