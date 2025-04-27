// app/login/layout.tsx
"use client";

import React from 'react';
import './login.css'; // Import the CSS file for styling

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="login-layout">
{/* Header Section (Optional) */}
      <header className="login-header">
      
      </header>

      {/* Main Content Section */}
      <main className="login-main-content">
        {children} {/* This will render the page content like Student_Login or Admin_Login */}
      </main>

      {/* Footer Section */}
      <footer className="login-footer">
        <p>&copy; 2025 Your Company</p>
      </footer>
    </div>
  );
}
