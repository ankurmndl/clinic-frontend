// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import axiosInstance from '@/utils/axiosInstance';

// export default function BillingPage() {
//   const { id } = useParams();
//   const [summary, setSummary] = useState(null);
//   const [treatments, setTreatments] = useState([]);
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (id) fetchBillingData();
//   }, [id]);

//   const fetchBillingData = async () => {
//     setLoading(true);
//     try {
//       const res = await axiosInstance.get(`/patients/${id}/billing/`);
//       setSummary(res.data.summary);
//       setTreatments(res.data.treatments);
//       setPayments(res.data.payments);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to load billing data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-8 text-gray-300">Patient #{id} Billing</h1>

//       {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}

//       {loading ? (
//         <p className="text-gray-700">Loading...</p>
//       ) : (
//         <>
//           {/* Summary Section */}
//           {summary && (
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//               <div className="bg-blue-50 p-4 rounded-lg shadow border border-blue-100">
//                 <h3 className="text-sm font-semibold text-blue-800">Total Treatment Cost</h3>
//                 <p className="text-xl font-bold text-blue-900">₹{summary.total_treatment_cost}</p>
//               </div>
//               <div className="bg-green-50 p-4 rounded-lg shadow border border-green-100">
//                 <h3 className="text-sm font-semibold text-green-800">Payments Made</h3>
//                 <p className="text-xl font-bold text-green-900">₹{summary.total_payments_made}</p>
//               </div>
//               <div className="bg-red-50 p-4 rounded-lg shadow border border-red-100">
//                 <h3 className="text-sm font-semibold text-red-800">Pending Dues</h3>
//                 <p className="text-xl font-bold text-red-900">₹{summary.pending_dues}</p>
//               </div>
//             </div>
//           )}

//           {/* Treatments Table */}
//           <div className="mb-10">
//             <h2 className="text-xl font-semibold mb-4 text-gray-300 border-b pb-2">Treatments</h2>
//             <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
//               <table className="min-w-full bg-white text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Date</th>
//                     <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Treatment</th>
//                     <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Tooth</th>
//                     <th className="px-4 py-3 text-right font-semibold text-gray-700 border-b">Estimated Cost (₹)</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-100">
//                   {treatments.map((treat, index) => (
//                     <tr key={index} className="hover:bg-gray-50">
//                       <td className="px-4 py-2 text-gray-800">{treat.date}</td>
//                       <td className="px-4 py-2 text-gray-800">{treat.name}</td>
//                       <td className="px-4 py-2 text-gray-800">{treat.tooth || '-'}</td>
//                       <td className="px-4 py-2 text-right text-gray-800">{treat.estimated_cost}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Payments Table */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4 text-gray-300 border-b pb-2">Payments</h2>
//             <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
//               <table className="min-w-full bg-white text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Date</th>
//                     <th className="px-4 py-3 text-right font-semibold text-gray-700 border-b">Amount Paid (₹)</th>
//                     <th className="px-4 py-3 text-right font-semibold text-gray-700 border-b">Estimate (₹)</th>
//                     <th className="px-4 py-3 text-right font-semibold text-gray-700 border-b">Balance (₹)</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-100">
//                   {payments.map((pay, index) => (
//                     <tr key={index} className="hover:bg-gray-50">
//                       <td className="px-4 py-2 text-gray-800">{pay.date}</td>
//                       <td className="px-4 py-2 text-right text-gray-800">{pay.amount_paid}</td>
//                       <td className="px-4 py-2 text-right text-gray-800">{pay.estimate}</td>
//                       <td className="px-4 py-2 text-right text-gray-800">{pay.balance}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance';

export default function BillingPage() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [summary, setSummary] = useState(null);
  const [treatments, setTreatments] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchPatientInfo();
      fetchBillingData();
    }
  }, [id]);

  const fetchPatientInfo = async () => {
    try {
      const res = await axiosInstance.get(`/patients/${id}/`);
      setPatient(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchBillingData = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/patients/${id}/billing/`);
      setSummary(res.data.summary);
      setTreatments(res.data.treatments);
      setPayments(res.data.payments);
    } catch (err) {
      console.error(err);
      setError('Failed to load billing data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-2 text-gray-300">
        Billing Details {patient?.name ? `for ${patient.name}` : ''}
      </h1>
      {patient?.phone && (
        <p className="text-gray-600 mb-6">Phone: {patient.phone}</p>
      )}

      {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}

      {loading ? (
        <p className="text-gray-700">Loading...</p>
      ) : (
        <>
          {/* Summary Section */}
          {summary && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg shadow border border-blue-100">
                <h3 className="text-sm font-semibold text-blue-800">Total Treatment Cost</h3>
                <p className="text-xl font-bold text-blue-900">₹{summary.total_treatment_cost}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg shadow border border-green-100">
                <h3 className="text-sm font-semibold text-green-800">Payments Made</h3>
                <p className="text-xl font-bold text-green-900">₹{summary.total_payments_made}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg shadow border border-red-100">
                <h3 className="text-sm font-semibold text-red-800">Pending Dues</h3>
                <p className="text-xl font-bold text-red-900">₹{summary.pending_dues}</p>
              </div>
            </div>
          )}

          {/* Treatments Table */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-300 border-b pb-2">Treatments</h2>
            <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Date</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Treatment</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Tooth</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700 border-b">Estimated Cost (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {treatments.map((treat, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-gray-800">{treat.date}</td>
                      <td className="px-4 py-2 text-gray-800">{treat.name}</td>
                      <td className="px-4 py-2 text-gray-800">{treat.tooth || '-'}</td>
                      <td className="px-4 py-2 text-right text-gray-800">{treat.estimated_cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payments Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-300 border-b pb-2">Payments</h2>
            <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Date</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700 border-b">Amount Paid (₹)</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700 border-b">Estimate (₹)</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700 border-b">Balance (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {payments.map((pay, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-gray-800">{pay.date}</td>
                      <td className="px-4 py-2 text-right text-gray-800">{pay.amount_paid}</td>
                      <td className="px-4 py-2 text-right text-gray-800">{pay.estimate}</td>
                      <td className="px-4 py-2 text-right text-gray-800">{pay.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}