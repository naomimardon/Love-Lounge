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
    <div className="container">
      <h1 className="header">Login to find your match!</h1>
      <div className="login-form">
        {loggedIn ? (
          <button className="logout-btn" onClick={logout}>Logout</button>
        ) : (
          <button className="google-login-btn" onClick={handleLogin}>Login with Google</button>
        )}
      </div>
    </div>
  );
};

export default GoogleLogin;
