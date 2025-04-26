"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "./LoginPage.module.css";
import { useNavigate } from 'react-router-dom';

export default function Student_Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.underline} />

      <div className={styles.form}>
        <div className={styles.inputWrapper}>
          <Input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <span className={styles.inputIcon}>📧</span>
        </div>

        <div className={styles.inputWrapper}>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <span className={styles.inputIcon}>🔒</span>
        </div>

        <div className={styles.forgotPassword}>
          <a href="#">Lost password? Click here!</a>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <Button variant="outline" className={styles.button}>
          Sign Up
        </Button>
        <Button className={styles.loginButton}>
          Login
        </Button>
      </div>
    </div>
  );
}
