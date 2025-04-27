// app/login/layout.tsx
"use client";

import React from 'react';
import "../Registration/registration.css";

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="registration-layout">
{/* Header Section (Optional) */}
      <header className="registration-header">
      </header>

      {/* Main Content Section */}
      <main className="registration-main-content">
        {children}
      </main>

      {/* Footer Section */}
      <footer className="registration-footer">
        <p>&copy; 2025 BSIT 2-4</p>
      </footer>
    </div>
  );
}
