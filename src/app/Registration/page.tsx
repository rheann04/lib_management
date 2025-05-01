"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import "../Registration/registration.css";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState({ day: "", month: "", year: "" });
  const [error, setError] = useState("");

  const router = useRouter();

  const handleRegister = () => {
    if (!firstName || !lastName) {
      setError("Please enter your first and last name.");
      return;
    }

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!gender) {
      setError("Please select your gender.");
      return;
    }

    if (!phoneNumber) {
      setError("Please enter your phone number.");
      return;
    }

    if (!birthday.day || !birthday.month || !birthday.year) {
      setError("Please enter your birthday.");
      return;
    }

    setError("");
    router.push("/Login/Student_Login"); // <<< Correct placement
  };

  return (
    <div className="registration-container">
      <h1 className="registration-title">Create a new account</h1>
      <div className="registration-underline" />

      {error && <p className="registration-error">{error}</p>}

      <div className="registration-form">
        <div className="registration-row">
          <Input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="registration-input"
          />
          <Input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="registration-input"
          />
        </div>

        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registration-input"
        />

        <Input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="registration-input"
        />

        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="registration-input"
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="registration-input"
        />

        <div className="registration-row">
          <select
            value={birthday.month}
            onChange={(e) => setBirthday({ ...birthday, month: e.target.value })}
            className="registration-select"
          >
            <option value="">Month</option>
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          <select
            value={birthday.day}
            onChange={(e) => setBirthday({ ...birthday, day: e.target.value })}
            className="registration-select"
          >
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            value={birthday.year}
            onChange={(e) => setBirthday({ ...birthday, year: e.target.value })}
            className="registration-select"
          >
            <option value="">Year</option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={2025 - i} value={2025 - i}>
                {2025 - i}
              </option>
            ))}
          </select>
        </div>

        <div className="registration-row">
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
        </div>
      </div>

      <div className="registration-buttonGroup">
        <Button className="registration-button" onClick={handleRegister}>
          Sign Up
        </Button>
      </div>

      <div className="allready-have-account">
      <a href="#"><h5>Already have an account?</h5></a>
        
        </div>
    </div>
  );
}
