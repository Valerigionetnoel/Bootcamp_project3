import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import img3 from '../images/food/img3.jpg';
import axios from "axios";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post('/api/login', credentials);
      // Handle successful login (e.g., store token, redirect)
      console.log(response.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignup = async (userData) => {
    try {
      const response = await axios.post('/api/signup', userData);
      // Handle successful signup (e.g., redirect to login)
      console.log(response.data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return ( 
    <div className="loginDiv">
      <div className="rightLogin">
        <img src={img3} alt='food' className="responsiveImg2"></img>
      </div>
      <div className="leftLogin">
        {isLogin ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <SignupForm onSignup={handleSignup} />
        )}
        <button onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? "Signup" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
