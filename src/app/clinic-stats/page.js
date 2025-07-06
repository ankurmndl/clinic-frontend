

// 'use client';

// import { useState, useEffect } from 'react';
// import axiosInstance from '@/utils/axiosInstance';
// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
// } from 'recharts';
// import { User, Phone, CalendarDays, X, FileText } from 'lucide-react';

// export default function ReportsPage() {
//   const [data, setData] = useState(null);
//   const [patients, setPatients] = useState([]);
//   const [treatmentsList, setTreatmentsList] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState(() => {
//     const now = new Date();
//     return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showPatientsList, setShowPatientsList] = useState(false);
//   const [showTreatmentsList, setShowTreatmentsList] = useState(false);

//   const fetchStats = async () => {
//     try {
//       const res = await axiosInstance.get(`clinic-stats/?month=${selectedMonth}`);
//       setData(res.data);
//     } catch (err) {
//       setError('Failed to load stats.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPatients = async () => {
//     try {
//       const res = await axiosInstance.get(`patients-by-month/?month=${selectedMonth}`);
//       setPatients(res.data);
//     } catch (err) {
//       console.error('Failed to fetch patients', err);
//     }
//   };

//   const fetchTreatments = async () => {
//     try {
//       const res = await axiosInstance.get(`treatments-by-month/?month=${selectedMonth}`);
//       setTreatmentsList(res.data);
//     } catch (err) {
//       console.error('Failed to fetch treatments', err);
//     }
//   };

//   useEffect(() => {
//     setLoading(true);
//     fetchStats();
//     fetchPatients();
//     fetchTreatments();
//   }, [selectedMonth]);

//   const getMonthName = (monthStr) => {
//     const date = new Date(`${monthStr}-01`);
//     return date.toLocaleString('default', { month: 'long' });
//   };

//   if (loading) return <p className="text-center mt-10 text-gray-200">Loading analytics...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

//   const treatmentsData = (data?.most_common_treatments || []).map(([name, count]) => ({
//     name,
//     count,
//   }));

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-900 min-h-screen text-gray-100 rounded-lg">
//       <h1 className="text-3xl font-bold mb-6 text-center">Clinic Analytics</h1>

//       {/* Month Picker */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="month"
//           value={selectedMonth}
//           onChange={(e) => setSelectedMonth(e.target.value)}
//           className="bg-gray-800 text-gray-100 px-4 py-2 rounded border border-gray-700"
//         />
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
//         <div
//           onClick={() => data.patients_this_month > 0 && setShowPatientsList(true)}
//           className={`bg-gray-800 rounded-lg shadow p-6 text-center transition cursor-pointer ${
//             data.patients_this_month > 0 ? 'hover:bg-gray-700' : 'opacity-50 cursor-not-allowed'
//           }`}
//         >
//           <h2 className="text-xl font-semibold mb-2 flex justify-center items-center gap-2">
//             <User className="w-5 h-5" />
//             Patients in {getMonthName(selectedMonth)}
//           </h2>
//           <p className="text-4xl font-bold text-indigo-400">{data.patients_this_month}</p>
//         </div>

//         <div className="bg-gray-800 rounded-lg shadow p-6 text-center">
//           <h2 className="text-xl font-semibold mb-2">Revenue This Month</h2>
//           <p className="text-4xl font-bold text-green-400">₹{data.revenue_this_month.toFixed(2)}</p>
//         </div>

//         <div
//           onClick={() => treatmentsList.length > 0 && setShowTreatmentsList(true)}
//           className={`bg-gray-800 rounded-lg shadow p-6 text-center transition cursor-pointer ${
//             treatmentsList.length > 0 ? 'hover:bg-gray-700' : 'opacity-50 cursor-not-allowed'
//           }`}
//         >
//           <h2 className="text-xl font-semibold mb-2 flex justify-center items-center gap-2">
//             <FileText className="w-5 h-5" />
//             Treatments in {getMonthName(selectedMonth)}
//           </h2>
//           <p className="text-4xl font-bold text-yellow-400">{treatmentsList.length}</p>
//         </div>
//       </div>

//       {/* Treatments Chart */}
//       <div className="bg-gray-800 rounded-lg shadow p-6">
//         <h2 className="text-xl font-semibold mb-4 text-center">Top 3 Treatments</h2>
//         {treatmentsData.length === 0 ? (
//           <p className="text-center text-gray-400">No treatment data available</p>
//         ) : (
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart
//               data={treatmentsData}
//               margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//               <XAxis dataKey="name" stroke="#ddd" />
//               <YAxis allowDecimals={false} stroke="#ddd" />
//               <Tooltip
//                 contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "#fff" }}
//                 labelStyle={{ color: "#aaa" }}
//               />
//               <Bar dataKey="count" fill="#facc15" />
//             </BarChart>
//           </ResponsiveContainer>
//         )}
//       </div>

//       {/* Patients List Modal */}
//       {showPatientsList && (
//         <Modal onClose={() => setShowPatientsList(false)} title={`Patients in ${getMonthName(selectedMonth)}`}>
//           {patients.length === 0 ? (
//             <p className="text-center text-gray-400">No patients recorded this month.</p>
//           ) : (
//             <ul className="space-y-4">
//               {patients.map((p, idx) => (
//                 <li
//                   key={p.id || idx}
//                   className="bg-gray-800 rounded-md px-4 py-3 shadow hover:bg-gray-700 transition"
//                 >
//                   <div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center">
//                     <div className="flex items-center gap-2">
//                       <User className="text-indigo-400 w-5 h-5" />
//                       <span className="font-semibold text-lg text-indigo-200">
//                         {idx + 1}. {p.name}
//                       </span>
//                     </div>
//                     <div className="text-sm text-gray-300 flex flex-wrap gap-4 sm:justify-end">
//                       <span className="flex items-center gap-1">
//                         <CalendarDays className="w-4 h-4 text-gray-400" />
//                         Age: {p.age}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Phone className="w-4 h-4 text-gray-400" />
//                         {p.mobile}
//                       </span>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </Modal>
//       )}

//       {/* Treatments List Modal */}
//       {showTreatmentsList && (
//         <Modal onClose={() => setShowTreatmentsList(false)} title={`Treatments in ${getMonthName(selectedMonth)}`}>
//           {treatmentsList.length === 0 ? (
//             <p className="text-center text-gray-400">No treatments found this month.</p>
//           ) : (
//             <ul className="space-y-4">
//               {treatmentsList.map((t, idx) => (
//                 <li
//                   key={t.id || idx}
//                   className="bg-gray-800 rounded-md px-4 py-3 shadow hover:bg-gray-700 transition"
//                 >
//                   <div className="flex justify-between items-center">
//                     <span className="text-yellow-300 font-semibold">{idx + 1}. {t.name}</span>
//                     <span className="text-gray-300 text-sm">₹{t.estimated_cost}</span>
//                   </div>
//                   {t.patient?.name && (
//                     <p className="text-sm text-gray-400 mt-1">Patient: {t.patient.name}</p>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </Modal>
//       )}
//     </div>
//   );
// }

// // Modal reusable component
// function Modal({ children, onClose, title }) {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//       <div className="bg-gray-900 text-white rounded-xl shadow-lg w-full max-w-xl p-6 relative overflow-y-auto max-h-[80vh]">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-4 text-gray-400 hover:text-white"
//           title="Close"
//         >
//           <X className="w-6 h-6" />
//         </button>
//         <h2 className="text-2xl font-semibold mb-5 text-center flex items-center justify-center gap-2">
//           {title}
//         </h2>
//         {children}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { User, Phone, CalendarDays, X, FileText, CreditCard, CalendarCheck } from 'lucide-react';

export default function ReportsPage() {
  const [data, setData] = useState(null);
  const [patients, setPatients] = useState([]);
  const [treatmentsList, setTreatmentsList] = useState([]);
  const [paymentsList, setPaymentsList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPatientsList, setShowPatientsList] = useState(false);
  const [showTreatmentsList, setShowTreatmentsList] = useState(false);
  const [showPaymentsList, setShowPaymentsList] = useState(false);
  const [userRole, setUserRole] = useState(null);


  const fetchStats = async () => {
    try {
      const res = await axiosInstance.get(`clinic-stats/?month=${selectedMonth}`);
      setData(res.data);
    } catch (err) {
      setError('Failed to load stats.');
    } finally {
      setLoading(false);
    }
  };

  const fetchPatients = async () => {
    try {
      const res = await axiosInstance.get(`patients-by-month/?month=${selectedMonth}`);
      setPatients(res.data);
    } catch (err) {
      console.error('Failed to fetch patients', err);
    }
  };

  const fetchTreatments = async () => {
    try {
      const res = await axiosInstance.get(`treatments-by-month/?month=${selectedMonth}`);
      setTreatmentsList(res.data);
    } catch (err) {
      console.error('Failed to fetch treatments', err);
    }
  };

  const fetchPayments = async () => {
    try {
      const res = await axiosInstance.get(`payments-by-month/?month=${selectedMonth}`);
      setPaymentsList(res.data);
    } catch (err) {
      console.error('Failed to fetch payments', err);
    }
  };
  const fetchUserRole = async () => {
    try {
      const res = await axiosInstance.get('user-role/');
      setUserRole(res.data.role);
    } catch (err) {
      console.error('Failed to fetch user role');
      setUserRole('Unknown');
    }
  };
  

  useEffect(() => {
    setLoading(true);
    fetchStats();
    fetchPatients();
    fetchTreatments();
    fetchPayments();
    fetchUserRole();  //
  }, [selectedMonth]);

  const getMonthName = (monthStr) => {
    const date = new Date(`${monthStr}-01`);
    return date.toLocaleString('default', { month: 'long' });
  };

  if (loading) return <p className="text-center mt-10 text-gray-200">Loading analytics...</p>;
  if (userRole && userRole !== 'Doctor') {
    return <p className="text-center mt-10 text-red-500 text-xl font-semibold">Not authorized to view this page.</p>;
  }  
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  const treatmentsData = (data?.most_common_treatments || []).map(([name, count]) => ({
    name,
    count,
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-900 min-h-screen text-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Clinic Analytics</h1>

      <div className="flex justify-center mb-6">
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="bg-gray-800 text-gray-100 px-4 py-2 rounded border border-gray-700"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div
          onClick={() => data.patients_this_month > 0 && setShowPatientsList(true)}
          className={`bg-gray-800 rounded-lg shadow p-6 text-center transition cursor-pointer ${
            data.patients_this_month > 0 ? 'hover:bg-gray-700' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <h2 className="text-xl font-semibold mb-2 flex justify-center items-center gap-2">
            <User className="w-5 h-5" />
            Patients in {getMonthName(selectedMonth)}
          </h2>
          <p className="text-4xl font-bold text-indigo-400">{data.patients_this_month}</p>
        </div>

        <div
          onClick={() => paymentsList.length > 0 && setShowPaymentsList(true)}
          className={`bg-gray-800 rounded-lg shadow p-6 text-center transition cursor-pointer ${
            paymentsList.length > 0 ? 'hover:bg-gray-700' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <h2 className="text-xl font-semibold mb-2 flex justify-center items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Revenue in {getMonthName(selectedMonth)}
          </h2>
          <p className="text-4xl font-bold text-green-400">₹{data.revenue_this_month.toFixed(2)}</p>
        </div>

        <div
          onClick={() => treatmentsList.length > 0 && setShowTreatmentsList(true)}
          className={`bg-gray-800 rounded-lg shadow p-6 text-center transition cursor-pointer ${
            treatmentsList.length > 0 ? 'hover:bg-gray-700' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <h2 className="text-xl font-semibold mb-2 flex justify-center items-center gap-2">
            <FileText className="w-5 h-5" />
            Treatments in {getMonthName(selectedMonth)}
          </h2>
          <p className="text-4xl font-bold text-yellow-400">{treatmentsList.length}</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Top 3 Treatments</h2>
        {treatmentsData.length === 0 ? (
          <p className="text-center text-gray-400">No treatment data available</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={treatmentsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#ddd" />
              <YAxis allowDecimals={false} stroke="#ddd" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "#fff" }}
                labelStyle={{ color: "#aaa" }}
              />
              <Bar dataKey="count" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {showPatientsList && (
        <Modal onClose={() => setShowPatientsList(false)} title={`Patients in ${getMonthName(selectedMonth)}`}>
          {patients.length === 0 ? (
            <p className="text-center text-gray-400">No patients recorded this month.</p>
          ) : (
            <ul className="space-y-4">
              {patients.map((p, idx) => (
                <li
                  key={p.id || idx}
                  className="bg-gray-800 rounded-md px-4 py-3 shadow hover:bg-gray-700 transition"
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center">
                    <div className="flex items-center gap-2">
                      <User className="text-indigo-400 w-5 h-5" />
                      <span className="font-semibold text-lg text-indigo-200">
                        {idx + 1}. {p.name}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300 flex flex-wrap gap-4 sm:justify-end">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4 text-gray-400" />
                        Age: {p.age}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {p.mobile}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Modal>
      )}

      {showTreatmentsList && (
        <Modal onClose={() => setShowTreatmentsList(false)} title={`Treatments in ${getMonthName(selectedMonth)}`}>
          {treatmentsList.length === 0 ? (
            <p className="text-center text-gray-400">No treatments found this month.</p>
          ) : (
            <ul className="space-y-4">
              {treatmentsList.map((t, idx) => (
                <li
                  key={t.id || idx}
                  className="bg-gray-800 rounded-md px-4 py-3 shadow hover:bg-gray-700 transition"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-300 font-semibold">{idx + 1}. {t.name}</span>
                    <span className="text-gray-300 text-sm">₹{t.estimated_cost}</span>
                  </div>
                  {t.patient?.name && (
                    <p className="text-sm text-gray-400 mt-1">Patient: {t.patient.name}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Modal>
      )}

      {showPaymentsList && (
        <Modal onClose={() => setShowPaymentsList(false)} title={`Payments in ${getMonthName(selectedMonth)}`}>
          {paymentsList.length === 0 ? (
            <p className="text-center text-gray-400">No payments found this month.</p>
          ) : (
            <ul className="space-y-4">
              {paymentsList.map((p, idx) => (
                <li
                  key={p.id || idx}
                  className="bg-gray-800 rounded-md px-4 py-3 shadow hover:bg-gray-700 transition"
                >
                  <div className="flex justify-between items-center">
                    {/* <span className="text-green-300 font-semibold">₹{p.amount_paid.toFixed(2)}</span> */}
                    <span className="text-green-300 font-semibold">₹{parseFloat(p.amount_paid).toFixed(2)}</span>
                    <div className="text-sm text-gray-300 flex flex-col sm:flex-row gap-2">
                      <span className="flex items-center gap-1">
                        👤 {p.patient?.name || 'Unknown'}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarCheck className="w-4 h-4" /> {p.date}
                      </span>
                      <span>💳 {p.payment_method}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-xl shadow-lg w-full max-w-xl p-6 relative overflow-y-auto max-h-[80vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white"
          title="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold mb-5 text-center flex items-center justify-center gap-2">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
