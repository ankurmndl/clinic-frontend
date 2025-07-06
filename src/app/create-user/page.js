// // 'use client';

// // import { useState, useEffect } from 'react';
// // import axiosInstance from '@/utils/axiosInstance';
// // import { useRouter } from 'next/navigation';
// // import { UserPlus, ShieldCheck, Mail, Lock } from 'lucide-react';

// // export default function CreateUserPage() {
// //   const router = useRouter();
// //   const [form, setForm] = useState({ username: '', email: '', password: '', role: 'Associate' });
// //   const [success, setSuccess] = useState('');
// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setSuccess('');
// //     try {
// //       const res = await axiosInstance.post('register/', form);
// //       setSuccess('User registered successfully!');
// //       setForm({ username: '', email: '', password: '', role: 'Associate' });
// //     } catch (err) {
// //       console.error('Registration error:', err);
// //       setError(err.response?.data?.detail || 'Registration failed');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-white px-4">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-gray-800"
// //       >
// //         <h2 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2 justify-center">
// //           <UserPlus className="w-6 h-6" />
// //           Create Staff User
// //         </h2>

// //         {success && <p className="text-green-600 text-sm mb-3">{success}</p>}
// //         {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

// //         <div className="mb-3">
// //           <label className="block text-sm mb-1">Username</label>
// //           <div className="relative">
// //             <ShieldCheck className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
// //             <input
// //               type="text"
// //               name="username"
// //               value={form.username}
// //               onChange={handleChange}
// //               required
// //               className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500"
// //             />
// //           </div>
// //         </div>

// //         <div className="mb-3">
// //           <label className="block text-sm mb-1">Email</label>
// //           <div className="relative">
// //             <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
// //             <input
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               required
// //               className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full"
// //             />
// //           </div>
// //         </div>

// //         <div className="mb-3">
// //           <label className="block text-sm mb-1">Password</label>
// //           <div className="relative">
// //             <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
// //             <input
// //               type="password"
// //               name="password"
// //               value={form.password}
// //               onChange={handleChange}
// //               required
// //               className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full"
// //             />
// //           </div>
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-sm mb-1">Role</label>
// //           <select
// //             name="role"
// //             value={form.role}
// //             onChange={handleChange}
// //             className="border border-gray-300 rounded-md w-full px-3 py-2"
// //           >
// //             <option value="Associate">Associate</option>
// //             <option value="Receptionist">Receptionist</option>
// //           </select>
// //         </div>

// //         <button
// //           type="submit"
// //           className="bg-indigo-600 text-white w-full py-2 rounded-md hover:bg-indigo-700 transition"
// //         >
// //           Create User
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }
// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axiosInstance from '@/utils/axiosInstance';
// import { useAuth } from '@/context/AuthProvider';
// import { UserPlus, ShieldCheck, Mail, Lock } from 'lucide-react';

// export default function CreateUserPage() {
//   const router = useRouter();
//   const { user } = useAuth(); // ✅ Access user with role

//   const [form, setForm] = useState({
//     username: '',
//     email: '',
//     password: '',
//     role: 'Associate',
//   });

//   const [success, setSuccess] = useState('');
//   const [error, setError] = useState('');

//   // ✅ Protect the page: only accessible to Doctors
//   useEffect(() => {
//     if (!user) {
//       router.push('/login');
//     } else if (user.role !== 'Doctor') {
//       router.push('/unauthorized');
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const token = localStorage.getItem('access'); // ✅ get token from storage
//       const res = await axiosInstance.post('register/', form, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setSuccess('User registered successfully!');
//       setForm({ username: '', email: '', password: '', role: 'Associate' });
//     } catch (err) {
//       console.error('Registration error:', err);
//       const errMsg =
//         err.response?.data?.detail ||
//         Object.values(err.response?.data || {})?.[0] ||
//         'Registration failed';
//       setError(errMsg);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-white px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-gray-800"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2 justify-center">
//           <UserPlus className="w-6 h-6" />
//           Create Staff User
//         </h2>

//         {success && <p className="text-green-600 text-sm mb-3">{success}</p>}
//         {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

//         <div className="mb-3">
//           <label className="block text-sm mb-1">Username</label>
//           <div className="relative">
//             <ShieldCheck className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               name="username"
//               value={form.username}
//               onChange={handleChange}
//               required
//               className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500"
//             />
//           </div>
//         </div>

//         <div className="mb-3">
//           <label className="block text-sm mb-1">Email</label>
//           <div className="relative">
//             <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//         </div>

//         <div className="mb-3">
//           <label className="block text-sm mb-1">Password</label>
//           <div className="relative">
//             <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm mb-1">Role</label>
//           <select
//             name="role"
//             value={form.role}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-md w-full px-3 py-2"
//           >
//             <option value="Associate">Associate</option>
//             <option value="Receptionist">Receptionist</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="bg-indigo-600 text-white w-full py-2 rounded-md hover:bg-indigo-700 transition"
//         >
//           Create User
//         </button>
//       </form>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance';
import { useAuth } from '@/context/AuthProvider';
import { UserPlus, ShieldCheck, Mail, Lock } from 'lucide-react';

export default function CreateUserPage() {
  const router = useRouter();
  const { user, loading } = useAuth(); // ✅ Access both user and loading state

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'Associate',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // ✅ Wait until loading is complete before applying redirects
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
      } else if (user.role !== 'Doctor') {
        router.push('/unauthorized');
      }
    }
  }, [user, loading, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('access'); // ✅ Use stored token
      const res = await axiosInstance.post('register/', form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess('User registered successfully!');
      setForm({ username: '', email: '', password: '', role: 'Associate' });
    } catch (err) {
      console.error('Registration error:', err);
      const errMsg =
        err.response?.data?.detail ||
        Object.values(err.response?.data || {})?.[0] ||
        'Registration failed';
      setError(errMsg);
    }
  };

  if (loading) return null; // ✅ Prevent flashing or early rendering

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-gray-800"
      >
        <h2 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2 justify-center">
          <UserPlus className="w-6 h-6" />
          Create Staff User
        </h2>

        {success && <p className="text-green-600 text-sm mb-3">{success}</p>}
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <div className="mb-3">
          <label className="block text-sm mb-1">Username</label>
          <div className="relative">
            <ShieldCheck className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="border border-gray-300 rounded-md w-full px-3 py-2"
          >
            <option value="Associate">Associate</option>
            <option value="Receptionist">Receptionist</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white w-full py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Create User
        </button>
      </form>
    </div>
  );
}
