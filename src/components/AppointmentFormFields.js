"use client";
export default function AppointmentFormFields({ form, patients, handleChange }) {
  return (
    <>
      {/* Patient Selection */}
      <div>
        <label htmlFor="patient" className="block text-sm font-medium text-gray-700 mb-1">
          Patient Name
        </label>
        <select
          id="patient"
          name="patient"
          value={form.patient}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Patient</option>
          {patients.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      {/* Appointment Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Appointment Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="e.g. Consultation"
        />
      </div>

      Appointment Date
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Appointment Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Start and End Time */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
            Start Time
          </label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={form.startTime}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Start Time"
          />
        </div>
        <div>
          <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
            End Time
          </label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={form.endTime}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="End Time"
          />
        </div>
      </div>
    </>
  );
}
