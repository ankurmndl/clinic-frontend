"use client";

import Calendar from "@/components/Calendar";
import AddAppointmentForm from "@/components/AddAppointmentForm";

export default function CalendarPage() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        {/* <h1 className="text-2xl font-bold mb-4 text-blue-900">Clinic Appointment Calendar</h1> */}
        <Calendar />
      </div>
      <AddAppointmentForm />
    </div>
  );
}
