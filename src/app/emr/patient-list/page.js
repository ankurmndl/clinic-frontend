
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import axiosInstance from "@/utils/axiosInstance";
// import { Eye } from "lucide-react";

// const ITEMS_PER_PAGE = 10;

// export default function PatientListPage() {
//   const [patients, setPatients] = useState([]);
//   const [filteredPatients, setFilteredPatients] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const res = await axiosInstance.get("/patients/");
//         if (!Array.isArray(res.data)) {
//           throw new Error("Invalid data format");
//         }
//         setPatients(res.data);
//         setFilteredPatients(res.data);
//       } catch (err) {
//         console.error("Error fetching patients:", err.message);
//         setPatients([]);
//         setFilteredPatients([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatients();
//   }, []);

//   useEffect(() => {
//     const lower = searchQuery.toLowerCase();
//     const filtered = patients.filter((p) =>
//       `${p.name} ${p.mobile}`.toLowerCase().includes(lower)
//     );
//     setFilteredPatients(filtered);
//     setCurrentPage(1);
//   }, [searchQuery, patients]);

//   const totalPages = Math.ceil(filteredPatients.length / ITEMS_PER_PAGE);
//   const paginatedPatients = filteredPatients.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <div className="max-w-6xl mx-auto p-6 mt-6 bg-white rounded-2xl shadow-lg border border-gray-200">
//       <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-6">Patient Records</h1>

//       {/* 🔍 Search */}
//       <div className="mb-6 flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Search by name or mobile..."
//           className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-gray-300 shadow-sm 
//              focus:outline-none focus:ring-2 focus:ring-blue-400 
//              text-sm text-gray-900 placeholder:text-gray-500 bg-white"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* 📋 Table */}
//       {loading ? (
//         <p className="text-center text-gray-600">Loading patients...</p>
//       ) : filteredPatients.length === 0 ? (
//         <p className="text-center text-gray-500">No patients found.</p>
//       ) : (
//         <>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white divide-y divide-gray-200 text-sm">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-gray-700 font-semibold">Name</th>
//                   <th className="px-4 py-3 text-left text-gray-700 font-semibold">Age</th>
//                   <th className="px-4 py-3 text-left text-gray-700 font-semibold">Gender</th>
//                   <th className="px-4 py-3 text-left text-gray-700 font-semibold">Mobile</th>
//                   <th className="px-4 py-3 text-center text-gray-700 font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {paginatedPatients.map((patient) => (
//                   <tr key={patient.id} className="hover:bg-gray-50 transition">
//                     <td className="px-4 py-2 text-gray-900 font-medium">{patient.name}</td>
//                     <td className="px-4 py-2 text-gray-700">{patient.age}</td>
//                     <td className="px-4 py-2 text-gray-700 capitalize">{patient.sex}</td>
//                     <td className="px-4 py-2 text-gray-700">{patient.mobile}</td>
//                     <td className="px-4 py-2 text-center">
//                       <Link
//                         href={`/emr/patient-list/${patient.id}`}
//                         className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline"
//                       >
//                         <Eye size={18} />
//                         View
//                       </Link>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* 🔁 Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center mt-6 gap-4">
//               <button
//                 onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//                 disabled={currentPage === 1}
//                 className={`px-4 py-2 rounded-md border ${
//                   currentPage === 1
//                     ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//                     : "bg-white text-blue-700 hover:bg-blue-50"
//                 }`}
//               >
//                 Previous
//               </button>
//               <span className="text-gray-700 text-sm mt-2">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className={`px-4 py-2 rounded-md border ${
//                   currentPage === totalPages
//                     ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//                     : "bg-white text-blue-700 hover:bg-blue-50"
//                 }`}
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import { Eye } from "lucide-react";

const ITEMS_PER_PAGE = 10;

export default function PatientListPage() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axiosInstance.get("/patients/");
        if (!Array.isArray(res.data)) throw new Error("Invalid data format");
        setPatients(res.data);
        setFilteredPatients(res.data);
      } catch (err) {
        console.error("Error fetching patients:", err.message);
        setPatients([]);
        setFilteredPatients([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  useEffect(() => {
    const lower = searchQuery.toLowerCase();
    const filtered = patients.filter((p) =>
      `${p.name} ${p.mobile}`.toLowerCase().includes(lower)
    );
    setFilteredPatients(filtered);
    setCurrentPage(1);
  }, [searchQuery, patients]);

  const totalPages = Math.ceil(filteredPatients.length / ITEMS_PER_PAGE);
  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 mt-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-blue-800 mb-6">
        Patient Records
      </h1>

      {/* 🔍 Search */}
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:justify-between gap-4">
        <input
          type="text"
          placeholder="Search by name or mobile..."
          className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm text-gray-900 placeholder:text-gray-500 bg-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 📋 Table or List */}
      {loading ? (
        <p className="text-center text-gray-600">Loading patients...</p>
      ) : filteredPatients.length === 0 ? (
        <p className="text-center text-gray-500">No patients found.</p>
      ) : (
        <>
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full bg-white divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Name</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Age</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Gender</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Mobile</th>
                  <th className="px-4 py-3 text-center text-gray-700 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-2 text-gray-900 font-medium">{patient.name}</td>
                    <td className="px-4 py-2 text-gray-700">{patient.age}</td>
                    <td className="px-4 py-2 text-gray-700 capitalize">{patient.sex}</td>
                    <td className="px-4 py-2 text-gray-700">{patient.mobile}</td>
                    <td className="px-4 py-2 text-center">
                      <Link
                        href={`/emr/patient-list/${patient.id}`}
                        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline"
                      >
                        <Eye size={18} />
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 📱 Mobile Friendly List */}
          <div className="sm:hidden space-y-4">
            {paginatedPatients.map((patient) => (
              <div key={patient.id} className="border rounded-lg p-4 shadow-sm">
                <div className="font-bold text-lg text-blue-700">{patient.name}</div>
                <div className="text-sm text-gray-600">
                  <span className="block">Age: {patient.age}</span>
                  <span className="block">Gender: {patient.sex}</span>
                  <span className="block">Mobile: {patient.mobile}</span>
                </div>
                <Link
                  href={`/emr/patient-list/${patient.id}`}
                  className="inline-flex items-center mt-3 text-sm text-indigo-600 font-semibold hover:text-indigo-800 hover:underline"
                >
                  <Eye size={16} className="mr-1" />
                  View Details
                </Link>
              </div>
            ))}
          </div>

          {/* 🔁 Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-4 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-blue-700 hover:bg-blue-50"
                }`}
              >
                Previous
              </button>
              <span className="text-gray-700 text-sm mt-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-blue-700 hover:bg-blue-50"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
