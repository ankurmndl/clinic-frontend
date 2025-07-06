// 'use client';

// export default function AppointmentsTab({ appointments }) {
//   return (
//     <div className="space-y-4">
//       <h3 className="text-xl font-semibold">Appointment History</h3>

//       {appointments.length === 0 ? (
//         <p className="text-gray-500">No appointments found.</p>
//       ) : (
//         <table className="w-full border text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-2">Date</th>
//               <th className="border p-2">Start</th>
//               <th className="border p-2">End</th>
//               <th className="border p-2">Notes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appt) => (
//               <tr key={appt.id}>
//                 <td className="border p-2">
//                   {new Date(appt.start_time).toLocaleDateString()}
//                 </td>
//                 <td className="border p-2">
//                   {new Date(appt.start_time).toLocaleTimeString()}
//                 </td>
//                 <td className="border p-2">
//                   {new Date(appt.end_time).toLocaleTimeString()}
//                 </td>
//                 <td className="border p-2">{appt.title}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

'use client';

import { CalendarDays } from "lucide-react";

export default function AppointmentsTab({ appointments }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-indigo-800">
        <CalendarDays className="w-6 h-6" />
        <h3 className="text-2xl font-bold">Appointment History</h3>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        {appointments.length === 0 ? (
          <p className="text-gray-500 text-center py-6 text-lg font-medium">
            No appointments found.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full text-sm text-gray-800 border border-gray-200">
              <thead className="bg-indigo-50 text-indigo-800 font-semibold text-left">
                <tr>
                  <th className="p-4 border">Date</th>
                  <th className="p-4 border">Start Time</th>
                  <th className="p-4 border">End Time</th>
                  <th className="p-4 border">Notes</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr
                    key={appt.id}
                    className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50 transition"
                  >
                    <td className="p-4 border font-medium">
                      {new Date(appt.start_time).toLocaleDateString()}
                    </td>
                    <td className="p-4 border">
                      {new Date(appt.start_time).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td className="p-4 border">
                      {new Date(appt.end_time).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td className="p-4 border text-gray-700">
                      {appt.title || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
