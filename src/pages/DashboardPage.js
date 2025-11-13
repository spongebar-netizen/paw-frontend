import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();

  // --- Logika logout tetap sama ---
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Anda telah logout.');
    navigate('/login');
  };

  return (
    // Container Utama
    <div className="flex items-center justify-center min-h-screen p-4">
      
      {/* Kartu Kaca (Glassmorphism) */}
      <div className="w-full max-w-md p-8 space-y-6 text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>
        
        <p className="text-lg text-gray-200">
          Selamat datang! Anda berhasil login.
        </p>
        
        {/* Tombol Logout */}
        <div>
          <button 
            onClick={handleLogout}
            className="w-full px-4 py-3 font-bold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition duration-300"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}