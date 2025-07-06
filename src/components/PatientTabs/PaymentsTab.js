// 'use client';

// export default function PaymentsTab({
//   payments,
//   newPayment,
//   setNewPayment,
//   treatments,
//   handleAddPayment,
//   handleDeletePayment,
// }) {
//   return (
//     <div className="space-y-4">
//       <h3 className="text-xl font-semibold">Payments</h3>

//       <table className="w-full border text-sm">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border p-2">Date</th>
//             <th className="border p-2">Treatment</th>
//             <th className="border p-2">Paid</th>
//             <th className="border p-2">Due</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payments.map((p) => (
//             <tr key={p.id}>
//               <td className="border p-2">{p.date}</td>
//               <td className="border p-2">{p.treatment || '-'}</td>
//               <td className="border p-2">₹{p.amount_paid}</td>
//               <td className="border p-2">₹{p.balance}</td>
//               <td className="border p-2">
//                 <button
//                   className="text-red-600"
//                   onClick={() => handleDeletePayment(p.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="grid grid-cols-5 gap-2">
//         <input
//           type="date"
//           className="border p-2"
//           value={newPayment.date}
//           onChange={(e) =>
//             setNewPayment({ ...newPayment, date: e.target.value })
//           }
//         />
//         <select
//           className="border p-2"
//           value={newPayment.treatment}
//           onChange={(e) =>
//             setNewPayment({ ...newPayment, treatment: e.target.value })
//           }
//         >
//           <option value="">Select Treatment</option>
//           {treatments.map((t) => (
//             <option key={t.id} value={t.id}>
//               {t.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="number"
//           placeholder="Estimate"
//           className="border p-2"
//           value={newPayment.estimate}
//           onChange={(e) =>
//             setNewPayment({ ...newPayment, estimate: e.target.value })
//           }
//         />
//         <input
//           type="number"
//           placeholder="Paid"
//           className="border p-2"
//           value={newPayment.amount_paid}
//           onChange={(e) =>
//             setNewPayment({ ...newPayment, amount_paid: e.target.value })
//           }
//         />
//         <input
//           type="number"
//           placeholder="Balance"
//           className="border p-2"
//           value={newPayment.balance}
//           onChange={(e) =>
//             setNewPayment({ ...newPayment, balance: e.target.value })
//           }
//         />
//       </div>

//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//         onClick={handleAddPayment}
//       >
//         Add Payment
//       </button>
//     </div>
//   );
// }

'use client';

export default function PaymentsTab({
  payments,
  newPayment,
  setNewPayment,
  treatments,
  handleAddPayment,
  handleDeletePayment,
}) {
  const handleInputChange = (field, value) => {
    const updated = { ...newPayment, [field]: value };
    if (field === "estimate" || field === "amount_paid") {
      const estimate = parseFloat(updated.estimate || 0);
      const paid = parseFloat(updated.amount_paid || 0);
      updated.balance = estimate - paid;
    }
    setNewPayment(updated);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-indigo-800">💳 Payments</h3>

      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full text-sm text-gray-800 border border-gray-200">
            <thead className="bg-indigo-50 text-indigo-800 font-semibold">
              <tr>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Treatment</th>
                <th className="p-3 border">Paid</th>
                <th className="p-3 border">Due</th>
                <th className="p-3 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 p-4">
                    No payments recorded yet
                  </td>
                </tr>
              ) : (
                payments.map((p) => (
                  <tr
                    key={p.id}
                    className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="p-3 border">{p.date}</td>
                    <td className="p-3 border">{p.treatment || '-'}</td>
                    <td className="p-3 border">₹{p.amount_paid}</td>
                    <td className="p-3 border">₹{p.balance}</td>
                    <td className="p-3 border text-center">
                      <button
                        className="text-red-600 hover:underline font-medium"
                        onClick={() => handleDeletePayment(p.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          <input
            type="date"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={newPayment.date}
            onChange={(e) => handleInputChange("date", e.target.value)}
          />
          <select
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={newPayment.treatment}
            onChange={(e) => handleInputChange("treatment", e.target.value)}
          >
            <option value="">Select Treatment</option>
            {treatments.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Estimate"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={newPayment.estimate}
            onChange={(e) => handleInputChange("estimate", e.target.value)}
          />
          <input
            type="number"
            placeholder="Paid"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={newPayment.amount_paid}
            onChange={(e) => handleInputChange("amount_paid", e.target.value)}
          />
          <input
            type="number"
            placeholder="Balance"
            className="border border-gray-200 p-3 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
            value={newPayment.balance}
            readOnly
          />
        </div>

        <div>
          <button
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            onClick={handleAddPayment}
          >
            ➕ Add Payment
          </button>
        </div>
      </div>
    </div>
  );
}

