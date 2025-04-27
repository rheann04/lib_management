"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';  // Replace react-router-dom with next/navigation
import "../../login/login.css";

export default function Student_Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Define error state
  
  const router = useRouter(); // Get the router object

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    // Validate email
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address."); // Update error state
      return;
    }

    // Validate password
    if (!password) {
      setError("Please enter your password."); // Update error state
      return;
    }

    setError(""); // Clear error if inputs are valid

    // Redirect to another page after login
    router.push('/student_dashboard');  // Change to the correct route you want
  };

  return (
    <div className="login-container"> {/* Apply CSS class from login.css */}
      <h1 className="login-title">Student Login</h1>
      <div className="login-underline" />

      {error && <p className="login-error">{error}</p>} {/* Display error message */}

      <div className="login-form">
        <div className="login-inputWrapper">
          <Input
            type="email"
            placeholder="Email Account"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <span className="login-inputIcon">📧</span>
        </div>

        <div className="login-inputWrapper">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <span className="login-inputIcon">🔒</span>
        </div>

        <div className="login-forgotPassword">
          <a href="#">Lost password? Click here!</a>
        </div>
      </div>

      <div className="login-buttonGroup">
        <Button variant="outline" className="login-button">
          Sign Up
        </Button>
        <Button className="login-loginButton" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}