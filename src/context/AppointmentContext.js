

// "use client";

// import { createContext, useContext, useState, useEffect } from "react";

// const AppointmentContext = createContext();

// export function AppointmentProvider({ children }) {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);

//   const BASE_URL = "http://127.0.0.1:8000";

//   const fetchAppointments = async () => {
//     const token = localStorage.getItem("token");
//     console.log("🔐 Token from localStorage:", token); // ✅ Check token

//     if (!token) {
//       console.warn("🚫 No token found. User may not be authenticated.");
//       return;
//     }

//     try {
//       console.log("📡 Sending request to fetch appointments...");
//       const res = await fetch(`${BASE_URL}/api/appointments/`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("📨 Response status:", res.status);

//       if (!res.ok) {
//         const errBody = await res.text();
//         console.error("❌ Failed response body:", errBody);
//         throw new Error("Failed to fetch appointments");
//       }

//       const data = await res.json();
//       console.log("✅ Fetched appointments:", data);

//       setAppointments(
//         data.map((a) => ({
//           id: a.id,
//           patient: a.patient_name || "Unknown",
//           timeStart: a.start_time,
//           timeEnd: a.end_time,
//           title: a.title,
//         }))
//       );
//     } catch (err) {
//       console.error("❌ Error fetching appointments:", err.message);
//       setAppointments([]);
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   return (
//     <AppointmentContext.Provider
//       value={{
//         appointments,
//         setAppointments,
//         selectedAppointment,
//         setSelectedAppointment,
//         refreshAppointments: fetchAppointments,
//       }}
//     >
//       {children}
//     </AppointmentContext.Provider>
//   );
// }

// export const useAppointments = () => useContext(AppointmentContext);

"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance"; // ✅ Use shared axios instance

const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const fetchAppointments = async () => {
    try {
      // console.log("📡 Fetching appointments with axiosInstance...");
      const res = await axiosInstance.get("appointments/");

      // console.log("✅ Appointments fetched:", res.data);

      setAppointments(
        res.data.map((a) => ({
          id: a.id,
          patient: a.patient_name || "Unknown",
          timeStart: a.start_time,
          timeEnd: a.end_time,
          title: a.title,
        }))
      );
    } catch (err) {
      // console.error("❌ Failed to fetch appointments:", err.response?.data || err.message);
      setAppointments([]);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        setAppointments,
        selectedAppointment,
        setSelectedAppointment,
        refreshAppointments: fetchAppointments,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export const useAppointments = () => useContext(AppointmentContext);
