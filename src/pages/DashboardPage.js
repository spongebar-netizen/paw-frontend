import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css'; // <-- 1. Impor file CSS

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
    // 2. Tambahkan className
    <div className="dashboard-page"> 
      <div className="dashboard-container">
        
        <h1 className="dashboard-title">Dashboard</h1>
        
        <p className="dashboard-welcome">
          Selamat datang! Anda berhasil login.
        </p>
        
        {/* Tombol Logout */}
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
        
      </div>
    </div>
  );
}