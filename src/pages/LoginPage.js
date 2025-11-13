import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // --- Logika form tetap sama ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiBackend = 'http://localhost:3001/api/auth/login';
    try {
      const response = await axios.post(apiBackend, { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('Login berhasil, token disimpan:', token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login gagal:', error.response.data);
      alert('Login gagal: ' + error.response.data.message);
    }
  };

  // --- Tampilan JSX kita ubah total ---
  return (
    // Container Utama: Memenuhi layar, gradien, dan di tengah
    <div className="flex items-center justify-center min-h-screen p-4">
      
      {/* Kartu Kaca (Glassmorphism) */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-white">
          Login
        </h1>
        <p className="text-center text-gray-200">
          Selamat datang kembali!
        </p>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-white"
            >
              Alamat Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-white bg-opacity-70 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="email@contoh.com"
            />
          </div>

          {/* Password */}
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-white bg-opacity-70 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="••••••••"
            />
          </div>

          {/* Tombol Submit */}
          <div>
            <button 
              type="submit"
              className="w-full px-4 py-3 font-bold text-blue-600 bg-white rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Link ke Registrasi */}
        <p className="text-sm text-center text-gray-200">
          Belum punya akun?{' '}
          <Link to="/register" className="font-medium text-white hover:underline">
            Registrasi di sini
          </Link>
        </p>
      </div>
    </div>
  );
}