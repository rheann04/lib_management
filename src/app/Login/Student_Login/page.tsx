"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import "../../login/login.css";

export default function Student_Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    // Validate email
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError(""); // Clear error if inputs are valid
      // Redirect to the registration page
      router.push('/Dashboard/Admin_dashboard'); // Adjusted to match the correct route
  };

  const handleSignUp = () => {
    // Redirect to the registration page
    router.push('/Registration'); // Adjusted to match the correct route
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
        </div>

        <div className="login-inputWrapper">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>

        <div className="login-forgotPassword">
          <a href="#">Forgot Password? Click Here!</a>
        </div>
      </div>

      <div className="login-buttonGroup">
        <Button variant="outline" className="signup-button" onClick={handleSignUp}>
          Sign Up
        </Button>
        <Button className="login-Button" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}