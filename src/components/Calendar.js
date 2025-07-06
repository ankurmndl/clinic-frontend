
"use client";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useRef } from 'react';
import { useAppointments } from '@/context/AppointmentContext';

export default function Calendar() {
  const { appointments, setSelectedAppointment } = useAppointments();
  const calendarRef = useRef(null);

  // ✅ Correctly format events from updated appointment structure
  const events = appointments.map((appt, index) => ({
    id: index,
    title: appt.patient,
    start: appt.timeStart,
    end: appt.timeEnd,
    backgroundColor: appt.color || "#3b82f6", // default color if not provided
    allDay: false,
  }));

  const handleEventClick = (clickInfo) => {
    const selectedAppointment = appointments[clickInfo.event.id];
    if (selectedAppointment) {
      setSelectedAppointment(selectedAppointment);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow text-gray-900">
      <h2 className="text-xl font-bold mb-4">Appointment Calendar</h2>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        contentHeight={600}
        className="bg-white rounded-lg shadow-md p-2"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        slotMinTime="09:00:00"
        slotMaxTime="20:00:00"
        eventClick={handleEventClick}
      />
    </div>
  );
}
