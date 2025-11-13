import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function RegisterPage() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('mahasiswa');
  const navigate = useNavigate();

  // --- Logika form tetap sama ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiBackend = 'http://localhost:3001/api/auth/register';
    try {
      const response = await axios.post(apiBackend, { nama, email, password, role });
      console.log(response.data);
      alert('Registrasi berhasil! Silakan login.');
      navigate('/login');
    } catch (error) {
      console.error('Registrasi gagal:', error.response.data);
      alert('Registrasi gagal: ' + error.response.data.message);
    }
  };

  // --- Tampilan JSX kita ubah total ---
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      
      {/* Kartu Kaca (Glassmorphism) */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-white">
          Buat Akun
        </h1>
        <p className="text-center text-gray-200">
          Bergabunglah bersama kami.
        </p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Nama */}
          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-white">
              Nama Lengkap
            </label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-white bg-opacity-70 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
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
            <label htmlFor="password" className="block text-sm font-medium text-white">
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

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-white">
              Daftar sebagai
            </label>
            <select 
              id="role"
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-white bg-opacity-70 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="mahasiswa">Mahasiswa</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Tombol Submit */}
          <div>
            <button 
              type="submit"
              className="w-full px-4 py-3 mt-4 font-bold text-blue-600 bg-white rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300"
            >
              Register
            </button>
          </div>
        </form>

        {/* Link ke Login */}
        <p className="text-sm text-center text-gray-200">
          Sudah punya akun?{' '}
          <Link to="/login" className="font-medium text-white hover:underline">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
}