import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      console.error('Registrasi gagal:', error.response.data);
      alert('Registrasi gagal: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Halaman Registrasi</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="mahasiswa">Mahasiswa</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}