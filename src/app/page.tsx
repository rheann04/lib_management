"use client";

import React from "react";
import "./page.css";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handleStudentClick = () => {
    router.push('/Login/Student_Login'); // Navigate to Student Login page
  };

  const handleAdminClick = () => {
    router.push('/Login/Admin_Login'); // Navigate to Admin Login page
  };

  return (
    <div className="page-body">
      <div className="choice-container">
        <h1>Select User Type</h1>
        <button className="choice-button" onClick={handleStudentClick}>Student</button>
        <button className="ADMINchoice-button" onClick={handleAdminClick}>Admin</button>
      </div>
    </div>
  );
};

export default Page;
