
// "use client";
// import { useState, useEffect } from "react";
// import axiosInstance from "@/utils/axiosInstance";
// import { format, isSameDay, parseISO } from "date-fns";
// import Sidebar from "@/components/Sidebar";
// import AppointmentCard from "@/components/Appointmentcard";
// import Calendar from "@/components/Calendar";
// import { motion, AnimatePresence } from "framer-motion";


// export default function ClinicDashboard() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchTodayAppointments = async () => {
//       try {
//         const response = await axiosInstance.get("appointments/");
//         const allAppointments = response.data;

//         const today = new Date();

//         const todayAppointments = allAppointments.filter((appt) =>
//           isSameDay(parseISO(appt.start_time), today)
//         );

//         const formatted = todayAppointments.map((appt) => ({
//           id: appt.id,
//           time: `${format(parseISO(appt.start_time), "hh:mm a")} - ${format(
//             parseISO(appt.end_time),
//             "hh:mm a"
//           )}`,
//           patient: appt.patient_name || "Unknown",
//           status: appt.status || "Scheduled",
//           color: getStatusColor(appt.status),
//           start: appt.start_time,
//           end: appt.end_time,
//           title: appt.title,
//         }));

//         setAppointments(formatted);
//       } catch (err) {
//         console.error("❌ Error fetching appointments:", err);
//       }
//     };

//     fetchTodayAppointments();
//   }, []);

//   const handleStatusChange = async (patientName, newStatus) => {
//     const updatedAppointments = appointments.map((appt) =>
//       appt.patient === patientName
//         ? { ...appt, status: newStatus, color: getStatusColor(newStatus) }
//         : appt
//     );
//     setAppointments(updatedAppointments);

//     // 🔁 Find the appointment and update status in backend
//     const target = appointments.find((appt) => appt.patient === patientName);
//     if (target) {
//       try {
//         await axiosInstance.patch(`appointments/${target.id}/`, {
//           status: newStatus,
//         });
//         console.log(`✅ Status updated to '${newStatus}' for appointment ID ${target.id}`);
//       } catch (err) {
//         console.error("❌ Failed to update status:", err.response?.data || err.message);
//         alert("Failed to update status. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col">
//       <div className="flex flex-1">
//         <Sidebar className="bg-gray-800 text-white" />
//         <main className="flex-1 p-6">
//           <h1 className="text-2xl font-bold">Clinic Schedule</h1>
//           <div className="mt-6">
//             <Calendar
//               appointments={appointments.map((appt) => ({
//                 title: appt.patient,
//                 start: appt.start,
//                 end: appt.end,
//                 backgroundColor: appt.color,
//               }))}
//             />
//           </div>
//         </main>
       
//         <aside className="w-1/4 bg-white p-4 shadow-lg overflow-y-auto">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Appointments Today</h2>

//         {appointments.length === 0 ? (
//           <p className="text-gray-500">No appointments for today.</p>
//         ) : (
//           <div className="space-y-4">
//             <AnimatePresence>
//               {appointments.map((appt) => (
//                 <motion.div
//                   key={appt.id}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <AppointmentCard
//                     time={appt.time}
//                     patient={appt.patient}
//                     status={appt.status}
//                     color={appt.color}
//                     onStatusChange={handleStatusChange}
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}
//       </aside>


//       </div>
//     </div>
//   );
// }

// function getStatusColor(status) {
//   switch (status) {
//     case "Checked In":
//       return "bg-green-500";
//     case "Engaged":
//       return "bg-red-500";
//     case "Checked Out":
//       return "bg-purple-500";
//     case "Waiting":
//       return "bg-blue-500";
//     default:
//       return "bg-yellow-500";
//   }
// }

"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { format, isSameDay, parseISO } from "date-fns";
import Sidebar from "@/components/Sidebar";
import AppointmentCard from "@/components/Appointmentcard";
import Calendar from "@/components/Calendar";
import { motion, AnimatePresence } from "framer-motion";

export default function ClinicDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchTodayAppointments = async () => {
      try {
        const response = await axiosInstance.get("appointments/");
        const allAppointments = response.data;
        const today = new Date();

        const todayAppointments = allAppointments.filter((appt) =>
          isSameDay(parseISO(appt.start_time), today)
        );

        const formatted = todayAppointments.map((appt) => ({
          id: appt.id,
          time: `${format(parseISO(appt.start_time), "hh:mm a")} - ${format(
            parseISO(appt.end_time),
            "hh:mm a"
          )}`,
          patient: appt.patient_name || "Unknown",
          status: appt.status || "Scheduled",
          color: getStatusColor(appt.status),
          start: appt.start_time,
          end: appt.end_time,
          title: appt.title,
        }));

        setAppointments(formatted);
      } catch (err) {
        // console.error("❌ Error fetching appointments:", err);
      }
    };

    fetchTodayAppointments();
  }, []);

  const handleStatusChange = async (patientName, newStatus) => {
    const updatedAppointments = appointments.map((appt) =>
      appt.patient === patientName
        ? { ...appt, status: newStatus, color: getStatusColor(newStatus) }
        : appt
    );
    setAppointments(updatedAppointments);

    const target = appointments.find((appt) => appt.patient === patientName);
    if (target) {
      try {
        await axiosInstance.patch(`appointments/${target.id}/`, {
          status: newStatus,
        });
        console.log(`✅ Status updated to '${newStatus}' for appointment ID ${target.id}`);
      } catch (err) {
        console.error("❌ Failed to update status:", err.response?.data || err.message);
        alert("Failed to update status. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Topbar Sidebar for Mobile */}
      <div className="block sm:hidden">
        <Sidebar className="bg-gray-800 text-white w-full" />
      </div>

      {/* Main Grid Layout */}
      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Sidebar for Desktop */}
        <div className="hidden sm:block w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        {/* Calendar */}
        <main className="flex-1 p-4 sm:p-6">
          <h1 className="text-2xl font-bold mb-4">Clinic Schedule</h1>
          <div className="mb-6">
            <Calendar
              appointments={appointments.map((appt) => ({
                title: appt.patient,
                start: appt.start,
                end: appt.end,
                backgroundColor: appt.color,
              }))}
            />
          </div>

          {/* Appointments for Mobile (below calendar) */}
          <div className="sm:hidden mt-4">
            <AppointmentsList appointments={appointments} onStatusChange={handleStatusChange} />
          </div>
        </main>

        {/* Appointments for Desktop (Sidebar) */}
        <aside className="hidden sm:block w-1/3 xl:w-1/4 bg-white p-4 shadow-lg overflow-y-auto">
          <AppointmentsList appointments={appointments} onStatusChange={handleStatusChange} />
        </aside>
      </div>
    </div>
  );
}

function AppointmentsList({ appointments, onStatusChange }) {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Appointments Today</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments for today.</p>
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {appointments.map((appt) => (
              <motion.div
                key={appt.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <AppointmentCard
                  time={appt.time}
                  patient={appt.patient}
                  status={appt.status}
                  color={appt.color}
                  onStatusChange={onStatusChange}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

function getStatusColor(status) {
  switch (status) {
    case "Checked In":
      return "bg-green-500";
    case "Engaged":
      return "bg-red-500";
    case "Checked Out":
      return "bg-purple-500";
    case "Waiting":
      return "bg-blue-500";
    default:
      return "bg-yellow-500";
  }
}
