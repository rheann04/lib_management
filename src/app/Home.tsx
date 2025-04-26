// app/home/page.tsx
"use client";

import React from "react";
import "./Home.css"; // We'll create a separate CSS file

export default function Home() {
  return (
    <div className="home-body">
      <div className="choice-container">
        <h1>Select User Type</h1>
        <button className="choice-button" onClick={() => window.location.href = "/student-login"}>
          Student
        </button>
        <button className="choice-button" onClick={() => window.location.href = "/admin-login"}>
          Admin
        </button>
      </div>
    </div>
  );
}
