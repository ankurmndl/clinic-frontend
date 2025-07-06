// "use client";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";

// export default function EMRPage() {
//   return (
//     <div className="h-screen flex flex-col bg-gray-100">
//       {/* <Navbar /> */}
//       <div className="flex justify-center items-center h-full p-6">
//         <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
//           <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Electronic Medical Records</h1>
//           <div className="space-y-6">
//             <Link href="/emr/new-patient" className="block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold p-4 rounded-lg text-center shadow-md hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
//               ➕ Add New Patient
//             </Link>
//             <Link href="/emr/patient-list" className="block bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold p-4 rounded-lg text-center shadow-md hover:shadow-xl hover:from-green-600 hover:to-green-800 transition-all duration-300">
//               📄 View Patient Records
//             </Link>
//             {/* <Link href="/emr/reports" className="block bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold p-4 rounded-lg text-center shadow-md hover:shadow-xl hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
//               📊 EMR Reports
//             </Link> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import Link from "next/link";
import { FilePlus, Users } from "lucide-react"; // Optional: Add more icons
import Navbar from "@/components/Navbar";

export default function EMRPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* <Navbar /> */}

      <div className="flex flex-1 justify-center items-center p-6">
        <div className="bg-white w-full max-w-2xl p-10 rounded-2xl shadow-xl border border-gray-200">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
            Electronic Medical Records
          </h1>

          <div className="space-y-6">
            {/* Add New Patient Button */}
            <Link
              href="/emr/new-patient"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transition-all duration-300"
            >
              <FilePlus size={22} />
              Add New Patient
            </Link>

            {/* View Patients Button */}
            <Link
              href="/emr/patient-list"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-md hover:from-green-600 hover:to-green-800 hover:shadow-lg transition-all duration-300"
            >
              <Users size={22} />
              View Patient Records
            </Link>

            {/* Optional: Add Reports */}
            {/* <Link
              href="/emr/reports"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-md hover:from-purple-600 hover:to-purple-800 hover:shadow-lg transition-all duration-300"
            >
              <BarChart2 size={22} />
              EMR Reports
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
