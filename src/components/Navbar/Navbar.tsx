"use client";

import { useAuth } from "@/context/AuthContext";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="w-full py-4 px-6 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">SeusEventos</h1>
      {isAuthenticated ? (
        <div>
          <button onClick={logout} className="text-indigo-600 hover:underline mr-4">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <a href="/login" className="text-indigo-600 hover:underline mr-4">
            Login
          </a>
          <a
            href="/signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Criar Conta
          </a>
        </div>
      )}
    </header>
  );
};
