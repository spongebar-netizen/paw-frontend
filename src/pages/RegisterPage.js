import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // <-- 2. Tambahkan Link
import axios from 'axios';
import './RegisterPage.css'; // <-- 1. Impor file CSS

export default function RegisterPage() {
  // State untuk menyimpan data form
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('mahasiswa'); // Default role
  
  // Hook untuk navigasi
  const navigate = useNavigate();

  // Fungsi yang dijalankan saat form disubmit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah form refresh halaman

    // Pastikan backend-mu (NIM-NODE-SERVER) berjalan di port 3001
    const apiBackend = 'http://localhost:3001/api/auth/register';

    try {
      // Kirim data registrasi ke API
      const response = await axios.post(apiBackend, {
        nama: nama,
        email: email,
        password: password,
        role: role,
      });

      // Jika sukses (API mengembalikan data)
      console.log(response.data);
      alert('Registrasi berhasil! Silakan login.');
      
      // Arahkan pengguna ke halaman login
      navigate('/login');

    } catch (error) {
      // Jika gagal
      const errorMessage = error.response?.data?.message || "Terjadi kesalahan";
      console.error('Registrasi gagal:', errorMessage);
      alert('Registrasi gagal: ' + errorMessage);
    }
  };

  return (
    // 3. Tambahkan className
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-title">Buat Akun</h1>
        
        <form onSubmit={handleSubmit} className="register-form">
          
          <div className="input-group">
            <label htmlFor="nama">Nama:</label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="role">Role:</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="mahasiswa">Mahasiswa</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <button type="submit">Daftar</button>
        </form>

        {/* 4. Tambahkan link kembali ke Login */}
        <p className="login-link">
          Sudah punya akun? <Link to="/login">Login di sini</Link>
        </p>
      </div>
    </div>
  );
}