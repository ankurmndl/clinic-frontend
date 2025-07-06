

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';
import { User, Lock, LogIn, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const success = await login(username, password);
      if (success) {
        router.push('/');
      } else {
        setErrorMsg('Invalid username or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 via-white to-indigo-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-5 text-center text-indigo-800 flex items-center justify-center gap-2">
          <LogIn className="w-5 h-5" />
          Sign In
        </h2>

        {errorMsg && (
          <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-md p-3 mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">{errorMsg}</span>
          </div>
        )}

        <div className="relative mb-3">
          <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Username"
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="relative mb-2">
          <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="password"
            placeholder="Password"
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-right mb-4">
          <a
            href="#"
            className="text-sm text-indigo-600 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              alert('Forgot password feature coming soon!');
            }}
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold w-full py-2 rounded-md transition duration-200"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Don't have an account?{' '}
          <Link
            href="/register"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Register
          </Link>
        </p>

        <p className="text-center text-xs text-gray-400 mt-6">
          © Esthetix Dental {new Date().getFullYear()}
        </p>
      </form>
    </div>
  );
}
