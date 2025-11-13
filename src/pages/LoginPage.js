import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

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
      console.error('Login gagal:', error.response.data);
      alert('Login gagal: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Belum punya akun? <Link to="/register">Registrasi di sini</Link>
      </p>
    </div>
  );
}