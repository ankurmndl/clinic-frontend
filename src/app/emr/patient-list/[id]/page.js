
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { TreatmentProvider, useTreatments } from "@/context/TreatmentContext";
import { PaymentProvider, usePayments } from "@/context/PaymentContext";
import axiosInstance from "@/utils/axiosInstance";
import InfoTab from "@/components/PatientTabs/InfoTab";
import TreatmentsTab from "@/components/PatientTabs/TreatmentsTab";
import PaymentsTab from "@/components/PatientTabs/PaymentsTab";
import AppointmentsTab from "@/components/PatientTabs/AppointmentsTab";

export default function PatientDetailWrapper() {
  const { id } = useParams();
  const patientId = parseInt(id); // ✅ ensure it's an integer
  console.log("🔍 patientId in wrapper:", id); // ✅ log this
  
  return (
    <TreatmentProvider patientId={id}>
      <PaymentProvider patientId={id}>
        <PatientDetailPage />
      </PaymentProvider>
    </TreatmentProvider>
  );
}

function PatientDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [newPayment, setNewPayment] = useState({ date: "", treatment: "", estimate: "", amount_paid: "", balance: "" });
  const [newTreatment, setNewTreatment] = useState({ name: "", estimated_cost: "", tooth: "", date: "" });
  const [activeTab, setActiveTab] = useState("info");
  const { treatments, addTreatment, deleteTreatment, selectedTooth, setSelectedTooth } = useTreatments();
  const { payments, addPayment, deletePayment } = usePayments();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      if (!id) return;
      try {
        const res = await axiosInstance.get(`/patients/${id}/`);
        setPatient(res.data);
        setAppointments(res.data.appointments || []);
      } catch (err) {
        console.error("❌ Error fetching patient:", err);
        if (err.response?.status === 401) {
          router.push("/login");
        } else {
          setError("Failed to fetch patient data");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPatient();
  }, [id, router]);

  const handleAddTreatment = () => {
    addTreatment({ ...newTreatment, tooth: selectedTooth });
    setNewTreatment({ name: "", estimated_cost: "", tooth: "", date: "" });
  };

  const handleAddPayment = async () => {
    const payload = {
      treatment: newPayment.treatment ? parseInt(newPayment.treatment) : null,
      date: newPayment.date,
      estimate: parseFloat(newPayment.estimate || 0),
      amount_paid: parseFloat(newPayment.amount_paid || 0),
      balance: parseFloat(newPayment.balance || 0),
    };

    const success = await addPayment(payload);
    if (success) {
      alert("✅ Payment added successfully!");
      setNewPayment({ date: "", treatment: "", estimate: "", amount_paid: "", balance: "" });
    }
  };

  const handleDeletePayment = async (paymentId) => {
    if (!confirm("Are you sure you want to delete this payment?")) return;
    try {
      await deletePayment(paymentId);
      alert("❌ Payment deleted.");
    } catch (err) {
      console.error("Error deleting payment:", err.message);
      alert("Failed to delete payment.");
    }
  };

  const getXrayLink = (xray) => {
    if (!xray) return null;
    // return xray.startsWith("http") ? xray : http://127.0.0.1:8000${xray};
    return xray.startsWith("http") ? xray : `http://127.0.0.1:8000${xray}`;

  };

  const tabClasses = (tab) =>
    `px-4 py-2 font-medium rounded-lg transition ${
      activeTab === tab
        ? "bg-blue-600 text-white shadow"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  if (loading) {
    return <div className="p-6 text-gray-700 text-center text-lg">Loading patient data...</div>;
  }

  if (error || !patient) {
    return <div className="p-6 text-red-500 text-center">Error: {error || "Patient not found"}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-4 text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-3xl font-extrabold text-blue-800">
          🧑‍⚕️ Patient: {patient.name}
        </h2>
        <button
          onClick={() => router.push("/calendar")}
          className="mt-4 md:mt-0 bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-800 transition"
        >
          ➕ Set Appointment
        </button>
      </div>

      {/* 🔁 Tab Navigation */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <button onClick={() => setActiveTab("info")} className={tabClasses("info")}>👤 Info</button>
        <button onClick={() => setActiveTab("treatments")} className={tabClasses("treatments")}>🦷 Treatments</button>
        <button onClick={() => setActiveTab("payments")} className={tabClasses("payments")}>💳 ₹ Payments</button>
        <button onClick={() => setActiveTab("appointments")} className={tabClasses("appointments")}>📅 Appointments</button>
      </div>

      {/* 🔍 Tab Content */}
      {activeTab === "info" && <InfoTab patient={patient} treatments={treatments} />}
      {activeTab === "treatments" && (
        <TreatmentsTab
          newTreatment={newTreatment}
          setNewTreatment={setNewTreatment}
          treatments={treatments}
          handleAddTreatment={handleAddTreatment}
          deleteTreatment={deleteTreatment}
          // getXrayLink={(xrayPath) => `${process.env.NEXT_PUBLIC_MEDIA_URL}/${xrayPath}`}
          getXrayLink={getXrayLink}
        />
      )}
      {activeTab === "payments" && (
        <PaymentsTab
          payments={payments}
          newPayment={newPayment}
          setNewPayment={setNewPayment}
          treatments={treatments}
          handleAddPayment={handleAddPayment}
          handleDeletePayment={handleDeletePayment}
        />
      )}
      {activeTab === "appointments" && (
        <AppointmentsTab appointments={appointments} />
      )}
    </div>
  );
}
