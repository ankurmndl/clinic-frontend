"use client";
export default function AppointmentCard({ time, patient, status, color, onStatusChange }) {
    return (
      <div className={`p-4 rounded-lg text-white ${color}`}>
        <h3 className="font-semibold">{patient}</h3>
        <p>{time}</p>
        <p className="italic">{status}</p>
        <div className="mt-2 flex gap-2">
          <button className="px-2 py-1 bg-green-500 rounded" onClick={() => onStatusChange(patient, 'Checked In')}>Check-in</button>
          <button className="px-2 py-1 bg-yellow-500 rounded" onClick={() => onStatusChange(patient, 'Engaged')}>Engage</button>
          <button className="px-2 py-1 bg-red-500 rounded" onClick={() => onStatusChange(patient, 'Checked Out')}>Check-out</button>
        </div>
      </div>
    );
  }