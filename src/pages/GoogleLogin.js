import React, { useEffect } from 'react';
import { useAuth } from "../Context/AuthContext";
import { provider } from "../firebase";

const GoogleLogin = ({ onSubmit }) => {
  const { currentUser, loggedIn, signupWithGoogle, logout } = useAuth();

  useEffect(() => {
    if (currentUser) {
      onSubmit(currentUser);
    }
  }, [currentUser, onSubmit]);

  const handleLogin = async () => {
    try {
      await signupWithGoogle(provider);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {loggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default GoogleLogin;
