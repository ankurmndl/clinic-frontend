"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";

const PaymentContext = createContext();

export const PaymentProvider = ({ patientId, children }) => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔁 Fetch payments for a patient
  const fetchPayments = async () => {
    if (!patientId) return;
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/patients/${patientId}/`);
      setPayments(res.data.payments || []);
    } catch (err) {
      console.error("❌ Failed to fetch payments:", err.message);
      setPayments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, [patientId]);

  // ➕ Add new payment
  const addPayment = async (payment) => {
    try {
      console.log("📤 Submitting payment with:", { ...payment, patient: patientId });
      const res = await axiosInstance.post("/payments/", {
        ...payment,
        patient: patientId,
      });
      setPayments((prev) => [...prev, res.data]);
      return true; // ✅ Add this so success can be handled
    } catch (err) {
      console.error("❌ Error adding payment:", err.message);
      alert("Failed to add payment.");
    }
  };

  // ❌ Delete payment
  const deletePayment = async (id) => {
    try {
      await axiosInstance.delete(`/payments/${id}/`);
      setPayments((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("❌ Failed to delete payment:", err.message);
      alert("Error deleting payment");
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        payments,
        loading,
        fetchPayments,
        addPayment,
        deletePayment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayments = () => useContext(PaymentContext);
