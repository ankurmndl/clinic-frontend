
"use client";
import { useState, useEffect } from "react";
import { useAppointments } from "@/context/AppointmentContext";
import axiosInstance from "@/utils/axiosInstance";
import AppointmentFormFields from './AppointmentFormFields'; // your custom fields component

export default function AddAppointmentForm() {
  const { appointments, setAppointments } = useAppointments();

  const [patients, setPatients] = useState([]);
  const [recentAppointments, setRecentAppointments] = useState([]);

  const [form, setForm] = useState({
    patient: "",
    title: "Consultation",
    date: "",
    startTime: "",
    endTime: ""
  });

  // Fetch patients
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axiosInstance.get("patients/");
        setPatients(response.data);
      } catch (err) {
        console.error("❌ Failed to fetch patients:", err.response?.data || err.message);
      }
    };
    fetchPatients();
  }, []);

  // Fetch last 5 appointments when patient is selected
  useEffect(() => {
    const fetchRecentAppointments = async () => {
      if (form.patient) {
        try {
          // const res = await axiosInstance.get(`/appointments/patient/${form.patient}`);
          const res = await axiosInstance.get(`/appointments/by-patient/${form.patient}`);
          const lastFive = res.data
            .sort((a, b) => new Date(b.start_time) - new Date(a.start_time))
            .slice(0, 5);
          setRecentAppointments(lastFive);
        } catch (err) {
          console.error("❌ Failed to load past appointments:", err);
          setRecentAppointments([]);
        }
      } else {
        setRecentAppointments([]);
      }
    };
    fetchRecentAppointments();
  }, [form.patient]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Submit new appointment
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.date || !form.startTime || !form.endTime) {
      alert("❗ Please fill date, start time, and end time");
      return;
    }

    const startDateTime = new Date(`${form.date}T${form.startTime}`);
    const endDateTime = new Date(`${form.date}T${form.endTime}`);

    // 🔒 Check for overlapping appointments
    const isOverlapping = appointments.some((appt) => {
      const existingStart = new Date(appt.timeStart).getTime();
      const existingEnd = new Date(appt.timeEnd).getTime();

      return (
        startDateTime.getTime() < existingEnd &&
        endDateTime.getTime() > existingStart
      );
    });

    if (isOverlapping) {
      alert("❌ This appointment overlaps with an existing one. Please choose a different time.");
      return;
    }

    const payload = {
      patient: parseInt(form.patient),
      title: form.title,
      start_time: startDateTime.toISOString(),
      end_time: endDateTime.toISOString()
    };

    try {
      const response = await axiosInstance.post("appointments/", payload);
      const newAppt = response.data;

      setAppointments((prev) => [
        ...prev,
        {
          id: newAppt.id,
          patient: patients.find((p) => p.id === newAppt.patient)?.name || "Unknown",
          timeStart: newAppt.start_time,
          timeEnd: newAppt.end_time,
          title: newAppt.title,
        },
      ]);

      alert("✅ Appointment added!");
      setForm({ patient: "", title: "Consultation", date: "", startTime: "", endTime: "" });
      setRecentAppointments([]); // Clear previous display
    } catch (err) {
      console.error("❌ Failed to book appointment:", err.response?.data || err.message);
      alert("Failed to book appointment");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow text-gray-800">
      <h2 className="text-lg font-bold mb-4">📅 Add Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AppointmentFormFields
          form={form}
          patients={patients}
          handleChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800"
        >
          Add Appointment
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-md font-semibold mb-3 text-gray-700">🕘 Last Appointments</h3>
        {recentAppointments.length === 0 ? (
          <p className="text-sm text-gray-500 italic">No previous appointments found.</p>
        ) : (
          <div className="space-y-3">
            {recentAppointments.map((appt) => (
              <div key={appt.id} className="border rounded-md p-3 shadow-sm bg-gray-50">
                <div className="flex justify-between text-sm text-gray-800">
                  <span className="font-medium">{new Date(appt.start_time).toLocaleDateString()}</span>
                  <span className="italic text-gray-600">{appt.title}</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  ⏱ {new Date(appt.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} -{" "}
                  {new Date(appt.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
