

// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import PatientSearchBar from "..//components/PatienSearchBar";

// // // // export default function Navbar() {
// // // //   return (
// // // //     <nav className="bg-blue-900 text-white p-2 flex justify-between items-center">
// // // //       <div className="flex items-center space-x-4">
// // // //         <Image
// // // //           src="/logo.png"
// // // //           alt="Esthetix Dental Logo"
// // // //           width={40}
// // // //           height={40}
// // // //           className="rounded-lg"
// // // //         />
// // // //         <Link href="/" className="text-xl font-bold hover:underline">
// // // //           Esthetix Dental
// // // //         </Link>
// // // //       </div>

// // // //       <ul className="flex items-center gap-4">
// // // //         <li><Link href="/calendar">Calendar</Link></li>

// // // //         {/* ✅ Embedded, styled search bar beside "Calendar" */}
// // // //         <li className="text-black">
// // // //           <PatientSearchBar />
// // // //         </li>

// // // //         <li><Link href="/contacts">Contacts</Link></li>
// // // //         <li><Link href="/emr">EMR</Link></li>
// // // //         <li><Link href="/billing">Billing</Link></li>
// // // //         <li><Link href="/reports">Reports</Link></li>
// // // //         <li><Link href="/login">Login</Link></li>
// // // //       </ul>
// // // //     </nav>
// // // //   );
// // // // }


// // // 'use client';

// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { useState } from "react";
// // // import { useAuth } from "@/context/AuthProvider";
// // // import PatientSearchBar from "../components/PatienSearchBar";

// // // export default function Navbar() {
// // //   const { user, logout } = useAuth();
// // //   const [dropdownOpen, setDropdownOpen] = useState(false);

// // //   const toggleDropdown = () => {
// // //     setDropdownOpen((prev) => !prev);
// // //   };

// // //   return (
// // //     <nav className="bg-blue-900 text-white p-2 flex justify-between items-center">
// // //       {/* Logo + Title */}
// // //       <div className="flex items-center space-x-4">
// // //         <Image
// // //           src="/logo.png"
// // //           alt="Esthetix Dental Logo"
// // //           width={40}
// // //           height={40}
// // //           className="rounded-lg"
// // //         />
// // //         <Link href="/" className="text-xl font-bold hover:underline">
// // //           Esthetix Dental
// // //         </Link>
// // //       </div>

// // //       {/* Navigation Links */}
// // //       <ul className="flex items-center gap-4">
// // //         <li><Link href="/calendar">Calendar</Link></li>
// // //         <li className="text-black"><PatientSearchBar /></li>
// // //         {/* <li><Link href="/contacts">Contacts</Link></li> */}
// // //         <li><Link href="/emr">EMR</Link></li>
// // //         <li><Link href="/billing">Billing</Link></li>
// // //         <li><Link href="/reports">Reports</Link></li>

// // //         {/* 👤 Auth Section */}
// // //         {user ? (
// // //           <li className="relative">
// // //             <button
// // //               onClick={toggleDropdown}
// // //               className="bg-blue-800 hover:bg-blue-700 px-3 py-1 rounded flex items-center gap-1"
// // //             >
// // //               👩‍⚕️ {user.username}
// // //               <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
// // //                 <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.336l3.71-4.106a.75.75 0 111.12 1L10.53 13.28a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
// // //               </svg>
// // //             </button>

// // //             {dropdownOpen && (
// // //               <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md z-50">
// // //                 <button
// // //                   onClick={logout}
// // //                   className="block w-full text-left px-4 py-2 hover:bg-gray-100"
// // //                 >
// // //                   🚪 Logout
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </li>
// // //         ) : (
// // //           <li>
// // //             <Link
// // //               href="/login"
// // //               className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200"
// // //             >
// // //               Login
// // //             </Link>
// // //           </li>
// // //         )}
// // //       </ul>
// // //     </nav>
// // //   );
// // // }

// // 'use client';

// // import Image from "next/image";
// // import Link from "next/link";
// // import { useState } from "react";
// // import { useAuth } from "@/context/AuthProvider";
// // import PatientSearchBar from "../components/PatienSearchBar";

// // export default function Navbar() {
// //   const { user, logout } = useAuth();
// //   const [dropdownOpen, setDropdownOpen] = useState(false);

// //   const toggleDropdown = () => {
// //     setDropdownOpen((prev) => !prev);
// //   };

// //   return (
// //     <nav className="bg-blue-900 text-white p-2 flex justify-between items-center">
// //       {/* Logo + Title */}
// //       <div className="flex items-center space-x-4">
// //         <Image
// //           src="/logo.png"
// //           alt="Esthetix Dental Logo"
// //           width={40}
// //           height={40}
// //           className="rounded-lg"
// //         />
// //         <Link href="/" className="text-xl font-bold hover:underline">
// //           Esthetix Dental
// //         </Link>
// //       </div>

// //       {/* Navigation Links */}
// //       <ul className="flex items-center gap-4">
// //         <li><Link href="/calendar">Calendar</Link></li>
// //         <li className="text-black"><PatientSearchBar /></li>
// //         <li><Link href="/emr">EMR</Link></li>
// //         <li><Link href="/billing">Billing</Link></li>
// //         <li><Link href="/reports">Reports</Link></li>

// //         {/* 👤 Auth Section */}
// //         {user ? (
// //           <li className="relative">
// //             <button
// //               onClick={toggleDropdown}
// //               className="bg-blue-800 hover:bg-blue-700 px-3 py-1 rounded flex items-center gap-1"
// //             >
// //               👩‍⚕️ {user.username}
// //               <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
// //                 <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.336l3.71-4.106a.75.75 0 111.12 1L10.53 13.28a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
// //               </svg>
// //             </button>

// //             {dropdownOpen && (
// //               <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-md z-50 p-2 text-sm">
// //                 <div className="px-4 py-2 border-b">
// //                   <div><strong>Role:</strong> {user.role}</div>
// //                 </div>

// //                 <button
// //                   onClick={logout}
// //                   className="block w-full text-left px-4 py-2 hover:bg-gray-100"
// //                 >
// //                   🚪 Logout
// //                 </button>
// //               </div>
// //             )}
// //           </li>
// //         ) : (
// //           <li>
// //             <Link
// //               href="/login"
// //               className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200"
// //             >
// //               Login
// //             </Link>
// //           </li>
// //         )}
// //       </ul>
// //     </nav>
// //   );
// // }


// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { useAuth } from "@/context/AuthProvider";
// import PatientSearchBar from "../components/PatienSearchBar";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   return (
//     <nav className="bg-blue-900 text-white p-2 flex justify-between items-center">
//       {/* Logo + Title */}
//       <div className="flex items-center space-x-4">
//         <Image
//           src="/logo.png"
//           alt="Esthetix Dental Logo"
//           width={40}
//           height={40}
//           className="rounded-lg"
//         />
//         <Link href="/" className="text-xl font-bold hover:underline">
//           Esthetix Dental
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <ul className="flex items-center gap-4">
//         <li><Link href="/calendar">Calendar</Link></li>
//         <li className="text-black"><PatientSearchBar /></li>
//         <li><Link href="/emr">EMR</Link></li>
//         <li><Link href="/billing">Billing</Link></li>
//         <li><Link href="/reports">Reports</Link></li>

//         {/* 👤 Auth Section */}
//         {user ? (
//           <li className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="bg-blue-800 hover:bg-blue-700 px-3 py-1 rounded flex items-center gap-1"
//             >
//               👩‍⚕️ {user.username}
//               <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.336l3.71-4.106a.75.75 0 111.12 1L10.53 13.28a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
//               </svg>
//             </button>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-md z-50 p-2 text-sm">
//                 <div className="px-4 py-2 border-b">
//                   <div><strong>User:</strong> {user.username}</div>
//                   <div><strong>Role:</strong> {user.role}</div>
//                 </div>

//                 <button
//                   onClick={logout}
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                 >
//                   🚪 Logout
//                 </button>
//               </div>
//             )}
//           </li>
//         ) : (
//           <li>
//             <Link
//               href="/login"
//               className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200"
//             >
//               Login
//             </Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }

'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import PatientSearchBar from "../components/PatienSearchBar";

export default function Navbar() {
  const { user, logout, loading } = useAuth(); // ✅ include loading
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // ✅ Show nothing or spinner until auth state is resolved
  if (loading) return null;

  return (
    <nav className="bg-blue-900 text-white p-2 flex justify-between items-center">
      {/* Logo + Title */}
      <div className="flex items-center space-x-4">
        <Image
          src="/logo.png"
          alt="Esthetix Dental Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <Link href="/" className="text-xl font-bold hover:underline">
          Esthetix Dental
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-4">
        <li><Link href="/calendar">Calendar</Link></li>
        <li className="text-black"><PatientSearchBar /></li>
        <li><Link href="/emr">EMR</Link></li>
        <li><Link href="/billing">Billing</Link></li>
        <li><Link href="/clinic-stats">Reports</Link></li>

        {/* 👤 Auth Section */}
        {user ? (
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-blue-800 hover:bg-blue-700 px-3 py-1 rounded flex items-center gap-1"
            >
              👩‍⚕️ {user.username}
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.336l3.71-4.106a.75.75 0 111.12 1L10.53 13.28a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-md z-50 p-2 text-sm">
                <div className="px-4 py-2 border-b">
                  <div><strong>Role:</strong> {user.role}</div>
                </div>

                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </li>
        ) : (
          <li>
            <Link
              href="/login"
              className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
