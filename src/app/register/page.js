

// // this is ok

// 'use client';

// import { useState } from 'react';
// import axiosInstance from '@/utils/axiosInstance';
// import { UserPlus, Lock, Mail, UserCog, AlertTriangle } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// export default function RegisterUserPage() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     role: 'Associate',
//   });
//   const [errorMsg, setErrorMsg] = useState('');
//   const [successMsg, setSuccessMsg] = useState('');

//   const router = useRouter();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg('');
//     setSuccessMsg('');

//     try {
//       const res = await axiosInstance.post('/register/', formData);
//       setSuccessMsg('✅ User created successfully!');
//       setFormData({ username: '', email: '', password: '', role: 'Associate' });
//     } catch (err) {
//       setErrorMsg('❌ Error: ' + (err.response?.data?.detail || 'Something went wrong'));
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-gray-800"
//       >
//         <h2 className="text-xl font-bold mb-5 text-center flex items-center justify-center text-indigo-800 gap-2">
//           <UserPlus className="w-5 h-5" /> Create New Staff Account
//         </h2>

//         {errorMsg && (
//           <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-md p-3 mb-4">
//             <AlertTriangle className="w-4 h-4" />
//             <span className="text-sm">{errorMsg}</span>
//           </div>
//         )}
//         {successMsg && (
//           <div className="text-green-700 bg-green-50 border border-green-200 rounded-md p-3 mb-4 text-sm">
//             {successMsg}
//           </div>
//         )}

//         <div className="relative mb-3">
//           <UserCog className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="relative mb-3">
//           <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="relative mb-3">
//           <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <select
//           name="role"
//           className="border p-2 w-full rounded mb-4 text-gray-700"
//           value={formData.role}
//           onChange={handleChange}
//         >
//           <option value="Associate">Associate</option>
//           <option value="Receptionist">Receptionist</option>
//         </select>

//         <button
//           type="submit"
//           className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold w-full py-2 rounded-md transition duration-200"
//         >
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { UserPlus, Mail, Lock, User, AlertTriangle, CheckCircle } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'Doctor', // Default role
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // const res = await axios.post('http://127.0.0.1:8000/api/register/', form);
      const res = await axios.post('https://ankurm.pythonanywhere.com/api/register/', form);
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => router.push('/login'), 2000);
    } catch (err) {
      console.error('Registration error:', err);
      const errMsg =
        err.response?.data?.detail ||
        Object.values(err.response?.data || {})?.[0] ||
        'Registration failed. Please try again.';
      setError(errMsg);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 via-white to-indigo-100 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white text-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-5 text-center text-indigo-800 flex items-center justify-center gap-2">
          <UserPlus className="w-5 h-5" />
          Doctor Registration
        </h2>

        {error && (
          <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-md p-3 mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-md p-3 mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">{success}</span>
          </div>
        )}

        <div className="relative mb-3">
          <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative mb-3">
          <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative mb-3">
          <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Hidden field for role */}
        <input type="hidden" name="role" value="Doctor" />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold w-full py-2 rounded-md transition duration-200"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
