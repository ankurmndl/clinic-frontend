
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import axiosInstance from '@/utils/axiosInstance';
// import { Receipt, Loader2, AlertTriangle, FileText, Search } from 'lucide-react';

// export default function BillingLandingPage() {
//   const [patients, setPatients] = useState([]);
//   const [filteredPatients, setFilteredPatients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     try {
//       const res = await axiosInstance.get('/patients/');
//       setPatients(res.data);
//       setFilteredPatients(res.data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to load patients');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchTerm(value);
//     setFilteredPatients(
//       patients.filter((p) => p.name.toLowerCase().includes(value))
//     );
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto text-gray-300">
//       <div className="flex items-center gap-3 text-gray-300 mb-6">
//         <Receipt className="w-7 h-7" />
//         <h1 className="text-3xl font-bold">Billing Dashboard</h1>
//       </div>

//       <div className="relative mb-4 bg-white text-gray-600 border border-gray-300 rounded-lg shadow-sm">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search by patient name..."
//           className="w-full p-3 pl-10 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
//       </div>

//       {error && (
//         <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
//           <AlertTriangle className="w-5 h-5" />
//           <span className="font-medium">{error}</span>
//         </div>
//       )}

//       {loading ? (
//         <div className="flex items-center gap-2 text-gray-600">
//           <Loader2 className="animate-spin w-5 h-5" />
//           <span>Loading patients...</span>
//         </div>
//       ) : (
//         <div className="overflow-x-auto rounded-xl shadow border border-gray-200 bg-white">
//           <table className="min-w-full text-sm text-left">
//             <thead className="bg-indigo-50 text-indigo-800 font-semibold">
//               <tr>
//                 <th className="px-6 py-3 border-b">Name</th>
//                 <th className="px-6 py-3 border-b">Billing</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredPatients.map((patient) => (
//                 <tr
//                   key={patient.id}
//                   className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50 transition"
//                 >
//                   <td className="px-6 py-4 font-medium text-gray-900 border-b">
//                     {patient.name}
//                   </td>
//                   <td className="px-6 py-4 border-b">
//                     <Link
//                       href={`/billing/${patient.id}`}
//                       className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium"
//                     >
//                       <FileText className="w-4 h-4" />
//                       View Billing
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axiosInstance from '@/utils/axiosInstance';
import {
  Receipt,
  Loader2,
  AlertTriangle,
  FileText,
  Search,
} from 'lucide-react';

export default function BillingLandingPage() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axiosInstance.get('/patients/');
      setPatients(res.data);
      setFilteredPatients(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load patients');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredPatients(
      patients.filter((p) => p.name.toLowerCase().includes(value))
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-900 min-h-screen text-gray-100 rounded-lg">
      <div className="flex items-center gap-3 text-indigo-300 mb-6">
        <Receipt className="w-8 h-8" />
        <h1 className="text-3xl font-bold">Billing Dashboard</h1>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by patient name..."
          className="w-full bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 text-red-400 bg-red-900 bg-opacity-20 border border-red-500 p-4 rounded-lg mb-4">
          <AlertTriangle className="w-5 h-5" />
          <span className="font-medium">{error}</span>
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="flex items-center gap-2 text-gray-400">
          <Loader2 className="animate-spin w-5 h-5" />
          <span>Loading patients...</span>
        </div>
      ) : (
        <>
          {filteredPatients.length === 0 ? (
            <p className="text-center text-gray-400">No patients found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="bg-gray-800 border border-gray-700 p-5 rounded-xl shadow hover:bg-gray-700 transition"
                >
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">
                    {patient.name}
                  </h3>
                  <Link
                    href={`/billing/${patient.id}`}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-200 font-medium mt-2"
                  >
                    <FileText className="w-4 h-4" />
                    View Billing
                  </Link>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
