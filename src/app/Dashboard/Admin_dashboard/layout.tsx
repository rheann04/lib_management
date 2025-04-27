// app/login/layout.tsx
"use client";

import React from 'react';
import './dashboard.css'; // Import the CSS file for styling

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
{/* Header Section (Optional) */}
      <header className="dashboard-header">
      
      </header>

      {/* Main Content Section */}
      <main className="dashboard-main-content">
        {children} {/* This will render the page content like Student_Login or Admin_Login */}
      </main>

      {/* Footer Section */}
      <footer className="dashboard-footer">
        <p>&copy; 2025 BSIT 2-4</p>
      </footer>
    </div>
  );
}
