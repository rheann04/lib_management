"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'; // Replace react-router-dom with next/navigation
import "../../login/login.css";

export default function Admin_Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Define error state
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State to control modal message

  const router = useRouter(); // Get the router object

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return emailRegex.test(email);
  };

// 1. Login validation and modal trigger
const handleLogin = () => {
  if (!email || !validateEmail(email)) {
    setError("Please enter a valid email address.");
    setModalMessage("Incorrect email or password.");
    setShowModal(true);
    return;
  }

  if (!password) {
    setError("Please enter your password.");
    setModalMessage("Incorrect email or password.");
    setShowModal(true);
    return;
  }

  setError("");
  setModalMessage("You have successfully logged in!");
  setShowModal(true); // Show modal on success
};

// 2. Called only when user clicks "Okay, Got it"
const handleModalConfirm = () => {
  setShowModal(false);
  router.push('/Dashboard/Admin_dashboard');
};


  return (
    <div className="login-container"> {/* Apply CSS class from login.css */}
      <h1 className="Adminlogin-title">Admin Login</h1>
      <div className="Adminlogin-underline" />

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

        <div className="ADMINlogin-forgotPassword">
          <a href="#">Forgot Password? Click Here!</a>
        </div>
      </div>

      <div className="login-buttonGroup">
        <Button className="ADMINlogin-Button" onClick={handleLogin}>
          Login
        </Button>
      </div>

      {showModal && (
  <div className="loginmodal">
    <div className="modal-box">
      <p>{modalMessage}</p>
      {modalMessage === "You have successfully logged in!" ? (
        <button className="btn-confirm" onClick={handleModalConfirm}>
          Okay, Got it
        </button>
      ) : (
        <button className="btn-close" onClick={() => setShowModal(false)}>
          Close
        </button>
      )}
    </div>
  </div>
)}
  
      </div>
  );
}