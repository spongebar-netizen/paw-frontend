import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; // <-- 1. Impor file CSS

export default function LoginPage() {
  // State untuk email dan password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pastikan backend-mu (NIM-NODE-SERVER) berjalan di port 3001
    const apiBackend = 'http://localhost:3001/api/auth/login';

    try {
      // Kirim data login ke API
      const response = await axios.post(apiBackend, {
        email: email,
        password: password,
      });

      // Jika sukses (API mengembalikan token)
      const { token } = response.data;

      // Simpan token ke localStorage
      localStorage.setItem('token', token);
      
      console.log('Login berhasil, token disimpan:', token);
      
      // Arahkan pengguna ke halaman dashboard
      navigate('/dashboard');

    } catch (error) {
      // Jika gagal
      const errorMessage = error.response?.data?.message || "Terjadi kesalahan";
      console.error('Login gagal:', errorMessage);
      alert('Login gagal: ' + errorMessage);
    }
  };

  return (
    // 2. Tambahkan className
    <div className="login-page"> 
      <div className="login-container">
        <h1 className="login-title">Selamat Datang</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email" // Tambahkan id untuk 'htmlFor' di label
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password" // Tambahkan id untuk 'htmlFor' di label
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit">Masuk</button>
        </form>
        
        <p className="register-link">
          Belum punya akun? <Link to="/register">Registrasi di sini</Link>
        </p>
      </div>
    </div>
  );
}