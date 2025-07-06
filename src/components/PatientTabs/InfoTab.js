// // components/emr/PatientTabs/InfoTab.js
// import TreatmentPDFDownloader from "@/components/TreatmentPdf";

// export default function InfoTab({ patient, treatments }) {
//   return (
//     <div className="space-y-2">
//       <p><strong>Name:</strong> {patient.name}</p>
//       <p><strong>Age:</strong> {patient.age}</p>
//       <p><strong>Gender:</strong> {patient.sex}</p>
//       <p><strong>Mobile:</strong> {patient.mobile}</p>
//       <p><strong>Email:</strong> {patient.email}</p>
//       <p><strong>Medical History:</strong> {patient.medical_history?.join(", ")}</p>
//       <p><strong>Past Dental History:</strong> {patient.past_dental_history}</p> 

//       <table className="w-full border text-sm">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border p-2 text-left">Treatment Name</th>
//             <th className="border p-2 text-left">Tooth Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {treatments.length === 0 ? (
//             <tr>
//               <td colSpan="2" className="text-center text-gray-500 p-4">
//                 No treatments recorded for this patient.
//               </td>
//             </tr>
//           ) : (
//             treatments.map((t) => (
//               <tr key={t.id}>
//                 <td className="border p-2">{t.name}</td>
//                 <td className="border p-2">{t.tooth || "-"}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       <TreatmentPDFDownloader patient={patient} treatments={treatments} />
//     </div>
//   );
// }

'use client';

import TreatmentPDFDownloader from "@/components/TreatmentPdf";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Heart,
  Landmark,
  FileText
} from "lucide-react";

export default function InfoTab({ patient, treatments }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-6 space-y-6">
      {/* 👤 Patient Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="flex-shrink-0 bg-blue-100 rounded-full p-4">
          <User size={32} className="text-blue-700" />
        </div>
        <div className="text-gray-800 space-y-1">
          <h2 className="text-2xl font-bold text-blue-900">{patient.name}</h2>
          <p className="text-sm text-gray-600">Patient ID: #{patient.id}</p>
        </div>
      </div>

      {/* 📋 Personal Info Grid */}
      <div className="grid sm:grid-cols-2 gap-4 text-gray-800 text-sm">
        <p className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-600" />
          <strong>Age:</strong> {patient.age}
        </p>
        <p className="flex items-center gap-2">
          <User className="w-4 h-4 text-blue-600" />
          <strong>Gender:</strong> {patient.sex}
        </p>
        <p className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-600" />
          <strong>Mobile:</strong> {patient.mobile}
        </p>
        <p className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-600" />
          <strong>Email:</strong> {patient.email || "—"}
        </p>
      </div>

      {/* 🩺 Medical Info */}
      <div className="bg-gray-50 p-4 rounded-xl border text-gray-800 space-y-2">
        <p className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-red-600" />
          <strong>Medical History:</strong>{" "}
          {patient.medical_history?.length
            ? patient.medical_history.join(", ")
            : "None reported"}
        </p>
        <p className="flex items-center gap-2">
          <Landmark className="w-4 h-4 text-yellow-600" />
          <strong>Past Dental History:</strong>{" "}
          {patient.past_dental_history || "None reported"}
        </p>
      </div>

      {/* 🦷 Treatment Summary */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5" /> Treatment History
        </h3>
        <div className="overflow-x-auto rounded-xl border">
          <table className="min-w-full text-sm text-gray-800">
            <thead className="bg-blue-50 text-blue-900 font-semibold">
              <tr>
                <th className="px-4 py-3 text-left border-b">Treatment</th>
                <th className="px-4 py-3 text-left border-b">Tooth</th>
              </tr>
            </thead>
            <tbody>
              {treatments.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center text-gray-500 px-4 py-6">
                    No treatments recorded for this patient.
                  </td>
                </tr>
              ) : (
                treatments.map((t) => (
                  <tr key={t.id} className="even:bg-gray-50 hover:bg-blue-50 transition">
                    <td className="px-4 py-3 border-b">{t.name}</td>
                    <td className="px-4 py-3 border-b">{t.tooth || "—"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ⬇️ Download PDF Button */}
      <div className="pt-4 flex justify-end">
        <TreatmentPDFDownloader patient={patient} treatments={treatments} />
      </div>
    </div>
  );
}

