// app/page.tsx
"use client";

import React from "react";
import "./page.css"; // We'll create a separate CSS file

export default function page() {
  return (
    <div className="page-body">
      <div className="choice-container">
        <h1>Select User Type</h1>
        <button className="choice-button" onClick={() => window.location.href = "/Student_Login"}>
          Student
        </button>
        <button className="choice-button" onClick={() => window.location.href = "/admin-login"}>
          Admin
        </button>
      </div>
    </div>
  );
}
