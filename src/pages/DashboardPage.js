import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    // 1. Hapus token dari localStorage
    localStorage.removeItem('token');
    
    alert('Anda telah logout.');

    // 2. Arahkan kembali ke halaman login
    navigate('/login');
  };

  return (
    <div>
      <h1>Halaman Dashboard</h1>
      <p>Selamat datang! Anda berhasil login.</p>
      
      {/* Tombol Logout */}
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}