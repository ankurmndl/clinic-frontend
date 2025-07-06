    "use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function BillingPage() {
  const [patientData, setPatientData] = useState({
    paymentRecords: []
  });

  useEffect(() => {
    // Replace with real data fetch logic
    const dummyRecords = [
      { date: "2024-06-01", treatment: "Filling", estimate: 1500, amountPaid: 1500, balance: 0 },
      { date: "2024-06-10", treatment: "Root Canal", estimate: 6000, amountPaid: 4000, balance: 2000 },
      { date: "2024-06-20", treatment: "Crown", estimate: 5000, amountPaid: 1000, balance: 4000 }
    ];
    setPatientData({ paymentRecords: dummyRecords });
  }, []);

  const totalEstimate = patientData.paymentRecords.reduce((sum, r) => sum + Number(r.estimate), 0);
  const totalPaid = patientData.paymentRecords.reduce((sum, r) => sum + Number(r.amountPaid), 0);
  const balance = totalEstimate - totalPaid;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Billing Summary</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
          <div className="bg-blue-100 text-blue-900 p-4 rounded shadow">
            <h4 className="font-semibold">Total Estimate</h4>
            <p className="text-xl">₹{totalEstimate}</p>
          </div>
          <div className="bg-green-100 text-green-900 p-4 rounded shadow">
            <h4 className="font-semibold">Total Paid</h4>
            <p className="text-xl">₹{totalPaid}</p>
          </div>
          <div className="bg-red-100 text-red-900 p-4 rounded shadow">
            <h4 className="font-semibold">Balance Due</h4>
            <p className="text-xl">₹{balance}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Payment Records</h3>
        <table className="w-full border-collapse border border-gray-300 text-black">
          <thead className="bg-gray-200 font-semibold">
            <tr>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Treatment</th>
              <th className="border border-gray-300 p-2">Estimate</th>
              <th className="border border-gray-300 p-2">Amount Paid</th>
              <th className="border border-gray-300 p-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {patientData.paymentRecords.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-600 p-4">No payment records available.</td>
              </tr>
            ) : (
              patientData.paymentRecords.map((rec, idx) => (
                <tr key={idx} className="text-center">
                  <td className="border border-gray-300 p-2">{rec.date}</td>
                  <td className="border border-gray-300 p-2">{rec.treatment}</td>
                  <td className="border border-gray-300 p-2">₹{rec.estimate}</td>
                  <td className="border border-gray-300 p-2">₹{rec.amountPaid}</td>
                  <td className="border border-gray-300 p-2">₹{rec.balance}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
