
// // "use client";
// // import FullCalendar from '@fullcalendar/react';
// // import dayGridPlugin from '@fullcalendar/daygrid';
// // import timeGridPlugin from '@fullcalendar/timegrid';
// // import interactionPlugin from '@fullcalendar/interaction';
// // import { useRef } from 'react';
// // import { useAppointments } from '@/context/AppointmentContext';

// // export default function Calendar() {
// //   const { appointments, setSelectedAppointment } = useAppointments();
// //   const calendarRef = useRef(null);

// //   // ✅ Correctly format events from updated appointment structure
// //   const events = appointments.map((appt, index) => ({
// //     id: index,
// //     title: appt.patient,
// //     start: appt.timeStart,
// //     end: appt.timeEnd,
// //     backgroundColor: appt.color || "#3b82f6", // default color if not provided
// //     allDay: false,
// //   }));

// //   const handleEventClick = (clickInfo) => {
// //     const selectedAppointment = appointments[clickInfo.event.id];
// //     if (selectedAppointment) {
// //       setSelectedAppointment(selectedAppointment);
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-100 p-4 rounded-lg shadow text-gray-900">
// //       <h2 className="text-xl font-bold mb-4">Appointment Calendar</h2>
// //       <FullCalendar
// //         ref={calendarRef}
// //         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
// //         initialView="dayGridMonth"
// //         events={events}
// //         height="auto"
// //         contentHeight={600}
// //         className="bg-white rounded-lg shadow-md p-2"
// //         headerToolbar={{
// //           left: 'prev,next today',
// //           center: 'title',
// //           right: 'dayGridMonth,timeGridWeek,timeGridDay'
// //         }}
// //         slotMinTime="09:00:00"
// //         slotMaxTime="20:00:00"
// //         eventClick={handleEventClick}
// //       />
// //     </div>
// //   );
// // }

// "use client";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { useEffect, useRef, useState } from "react";
// import { useAppointments } from "@/context/AppointmentContext";

// export default function Calendar() {
//   const { appointments, setSelectedAppointment } = useAppointments();
//   const calendarRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen size for responsive behavior
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const events = appointments.map((appt, index) => ({
//     id: index.toString(),
//     title: appt.patient,
//     start: appt.timeStart,
//     end: appt.timeEnd,
//     backgroundColor: appt.color || "#3b82f6",
//     allDay: false,
//   }));

//   const handleEventClick = (clickInfo) => {
//     const selectedAppointment = appointments[clickInfo.event.id];
//     if (selectedAppointment) {
//       setSelectedAppointment(selectedAppointment);
//     }
//   };

//   return (
//     <div className="bg-gray-100 p-4 rounded-lg shadow text-gray-900 w-full overflow-x-auto">
//       <h2 className="text-xl font-bold mb-4 text-center">📅 Appointment Calendar</h2>
//       <FullCalendar
//         ref={calendarRef}
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView={isMobile ? "timeGridDay" : "dayGridMonth"}
//         events={events}
//         height="auto"
//         contentHeight={600}
//         eventClick={handleEventClick}
//         className="bg-white rounded-lg shadow-md p-2"
//         headerToolbar={{
//           left: "prev,next today",
//           center: "title",
//           right: isMobile ? "" : "dayGridMonth,timeGridWeek,timeGridDay",
//         }}
//         slotMinTime="09:00:00"
//         slotMaxTime="20:00:00"
//       />
//     </div>
//   );
// }

"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRef, useState } from "react";
import { useAppointments } from "@/context/AppointmentContext";

export default function Calendar() {
  const { appointments, setSelectedAppointment } = useAppointments();
  const calendarRef = useRef(null);
  const [currentView, setCurrentView] = useState("dayGridMonth");

  const events = appointments.map((appt, index) => ({
    id: index.toString(),
    title: appt.patient,
    start: appt.timeStart,
    end: appt.timeEnd,
    backgroundColor: appt.color || "#3b82f6",
    allDay: false,
  }));

  const handleEventClick = (clickInfo) => {
    const selectedAppointment = appointments[clickInfo.event.id];
    if (selectedAppointment) {
      setSelectedAppointment(selectedAppointment);
    }
  };

  const handleViewChange = (e) => {
    const newView = e.target.value;
    setCurrentView(newView);
    calendarRef.current?.getApi().changeView(newView);
  };

  return (
    <div className="w-full overflow-x-auto bg-gray-100 p-4 rounded-lg shadow text-gray-900">
      <h2 className="text-xl font-bold mb-4 text-center">📅 Appointment Calendar</h2>

      {/* 🔽 View Toggle for Small Screens */}
      <div className="mb-4 flex justify-end md:hidden">
        <select
          value={currentView}
          onChange={handleViewChange}
          className="px-3 py-2 border rounded-md shadow-sm text-sm bg-white text-gray-800"
        >
          <option value="dayGridMonth">📆 Month</option>
          <option value="timeGridWeek">🗓️ Week</option>
          <option value="timeGridDay">📍 Day</option>
        </select>
      </div>

      <div className="min-w-[600px]">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={currentView}
          events={events}
          height="auto"
          contentHeight={600}
          eventClick={handleEventClick}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          className="bg-white rounded-lg shadow-md p-2"
          slotMinTime="09:00:00"
          slotMaxTime="20:00:00"
        />
      </div>
    </div>
  );
}
