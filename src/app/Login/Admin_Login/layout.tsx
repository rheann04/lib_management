// app/auth/layout.tsx
import { ReactNode } from "react";
import './Login';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-700 to-purple-900">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {children}
      </div>
    </div>
  );
}
