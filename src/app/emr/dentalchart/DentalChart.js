



// // "use client";

// // import { useTreatments } from "@/context/TreatmentContext";
// // import { useState } from "react";

// // const TOOTH_DATA = [
// //   { id: '11', number: 11, name: 'Central Incisor', x: '43.3%', y: '24%', width: '5.8%', height: '24%' },
// //   { id: '12', number: 12, name: 'Lateral Incisor', x: '38.67%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '13', number: 13, name: 'Canine', x: '34.1%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '14', number: 14, name: 'First Premolar', x: '29.3%', y: '24%', width: '5.4%', height: '23%' },
// //   { id: '15', number: 15, name: 'Second Premolar', x: '24.3%', y: '24%', width: '5.5%', height: '23%' },
// //   { id: '16', number: 16, name: 'First Molar', x: '18.1%', y: '24%', width: '6.2%', height: '22%' },
// //   { id: '17', number: 17, name: 'Second Molar', x: '11.5%', y: '24%', width: '6.2%', height: '22%' },
// //   { id: '18', number: 18, name: 'Third Molar', x: '6.0%', y: '24%', width: '5.7%', height: '21%' },
// //   { id: '21', number: 21, name: 'Central Incisor', x: '49.5%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '22', number: 22, name: 'Lateral Incisor', x: '54.8%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '23', number: 23, name: 'Canine', x: '59.3%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '24', number: 24, name: 'First Premolar', x: '64.2%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '25', number: 25, name: 'Second Premolar', x: '69.5%', y: '24%', width: '5.3%', height: '24%' },
// //   { id: '26', number: 26, name: 'First Molar', x: '74.9%', y: '24%', width: '6.3%', height: '22%' },
// //   { id: '27', number: 27, name: 'Second Molar', x: '81.6%', y: '24%', width: '6.3%', height: '21%' },
// //   { id: '28', number: 28, name: 'Third Molar', x: '88.0%', y: '24%', width: '6.0%', height: '20%' },
// //   { id: '31', number: 31, name: 'Central Incisor', x: '49.6%', y: '51%', width: '5.4%', height: '21%' },
// //   { id: '32', number: 32, name: 'Lateral Incisor', x: '54.5%', y: '51%', width: '5.4%', height: '20%' },
// //   { id: '33', number: 33, name: 'Canine', x: '59.2%', y: '51%', width: '5.4%', height: '20%' },
// //   { id: '34', number: 34, name: 'First Premolar', x: '64.1%', y: '51%', width: '5.4%', height: '21%' },
// //   { id: '35', number: 35, name: 'Second Premolar', x: '69.5%', y: '51%', width: '5.4%', height: '20%' },
// //   { id: '36', number: 36, name: 'First Molar', x: '74.9%', y: '49%', width: '6.9%', height: '21%' },
// //   { id: '37', number: 37, name: 'Second Molar', x: '82.2%', y: '49%', width: '7.5%', height: '18%' },
// //   { id: '38', number: 38, name: 'Third Molar', x: '89.1%', y: '49%', width: '7.5%', height: '18%' },
// //   { id: '41', number: 41, name: 'Central Incisor', x: '44.1%', y: '51.0%', width: '5.5%', height: '21%' },
// //   { id: '42', number: 42, name: 'Lateral Incisor', x: '39.2%', y: '51.0%', width: '5.5%', height: '21%' },
// //   { id: '43', number: 43, name: 'Canine', x: '34.4%', y: '51.2%', width: '5.6%', height: '20%' },
// //   { id: '44', number: 44, name: 'First Premolar', x: '29.4%', y: '50.5%', width: '5.8%', height: '20%' },
// //   { id: '45', number: 45, name: 'Second Premolar', x: '24.4%', y: '49.5%', width: '5.8%', height: '20%' },
// //   { id: '46', number: 46, name: 'First Molar', x: '17.3%', y: '49%', width: '6.8%', height: '18%' },
// //   { id: '47', number: 47, name: 'Second Molar', x: '9.7%', y: '49%', width: '7.1%', height: '18%' },
// //   { id: '48', number: 48, name: 'Third Molar', x: '4.1%', y: '49%', width: '5.8%', height: '16%' }
// // ];

// // export default function DentalChart() {
// //   const { selectedTooth, setSelectedTooth } = useTreatments();

// //   const handleToothClick = (toothId) => {
// //     setSelectedTooth(toothId === selectedTooth ? null : toothId);
// //   };

// //   const selectedToothObj = TOOTH_DATA.find(t => t.id === selectedTooth);

// //   return (
// //     <div className="w-full min-h-screen p-4 text-gray-800">
// //       <h1 className="text-2xl font-bold text-center mb-2">SELECT TOOTH</h1>

// //       <div className="relative w-full h-[70vh] min-h-[400px] mb-4">
// //         <div className="absolute inset-0 flex justify-center">
// //           <img
// //             src="/topogram.png"
// //             alt="Dental Chart"
// //             className="h-full w-auto max-w-full object-contain"
// //           />
// //         </div>

// //         {TOOTH_DATA.map(tooth => (
// //           <button
// //             key={tooth.id}
// //             className="absolute hover:bg-white/20 transition-all"
// //             style={{
// //               left: tooth.x,
// //               top: tooth.y,
// //               width: tooth.width,
// //               height: tooth.height,
// //             }}
// //             onClick={() => handleToothClick(tooth.id)}
// //             aria-label={`Tooth ${tooth.number}`}
// //           />
// //         ))}

// //         {selectedToothObj && (
// //           <div
// //             className="absolute bg-white/30 transition-all duration-300 pointer-events-none"
// //             style={{
// //               left: selectedToothObj.x,
// //               top: selectedToothObj.y,
// //               width: selectedToothObj.width,
// //               height: selectedToothObj.height,
// //               transform: 'scale(1.05)',
// //               transformOrigin: 'center center',
// //               borderRadius: '20%',
// //               border: '2px solid #d1d5db',
// //               boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'
// //             }}
// //           />
// //         )}
// //       </div>

// //       {selectedToothObj && (
// //         <div className="text-center mt-2 text-gray-700">
// //           <p className="text-lg font-semibold">
// //             Selected Tooth: {selectedToothObj.number} - {selectedToothObj.name}
// //           </p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

"use client";

import { useTreatments } from "@/context/TreatmentContext";
import { useState } from "react";

const TOOTH_DATA = [
  { id: '11', number: 11, name: 'Central Incisor', x: '43.3%', y: '17%', width: '5.8%', height: '24%' },
  { id: '12', number: 12, name: 'Lateral Incisor', x: '38.67%', y: '18%', width: '5.4%', height: '24%' },
  { id: '13', number: 13, name: 'Canine', x: '34.1%', y: '18%', width: '5.4%', height: '24%' },
  { id: '14', number: 14, name: 'First Premolar', x: '29.3%', y: '18%', width: '5.4%', height: '23%' },
  { id: '15', number: 15, name: 'Second Premolar', x: '24.3%', y: '18%', width: '5.5%', height: '23%' },
  { id: '16', number: 16, name: 'First Molar', x: '18.1%', y: '18%', width: '6.2%', height: '22%' },
  { id: '17', number: 17, name: 'Second Molar', x: '11.5%', y: '18%', width: '6.2%', height: '22%' },
  { id: '18', number: 18, name: 'Third Molar', x: '6.0%', y: '18%', width: '5.7%', height: '21%' },
  { id: '21', number: 21, name: 'Central Incisor', x: '49.5%', y: '18%', width: '5.4%', height: '24%' },
  { id: '22', number: 22, name: 'Lateral Incisor', x: '54.8%', y: '18%', width: '5.4%', height: '24%' },
  { id: '23', number: 23, name: 'Canine', x: '59.3%', y: '18%', width: '5.4%', height: '24%' },
  { id: '24', number: 24, name: 'First Premolar', x: '64.2%', y: '18%', width: '5.4%', height: '24%' },
  { id: '25', number: 25, name: 'Second Premolar', x: '69.5%', y: '18%', width: '5.3%', height: '24%' },
  { id: '26', number: 26, name: 'First Molar', x: '74.9%', y: '18%', width: '6.3%', height: '22%' },
  { id: '27', number: 27, name: 'Second Molar', x: '81.6%', y: '18%', width: '6.3%', height: '21%' },
  { id: '28', number: 28, name: 'Third Molar', x: '88.0%', y: '18%', width: '6.0%', height: '20%' },
  { id: '31', number: 31, name: 'Central Incisor', x: '49.6%', y: '55%', width: '5.4%', height: '21%' },
  { id: '32', number: 32, name: 'Lateral Incisor', x: '54.5%', y: '55%', width: '5.4%', height: '20%' },
  { id: '33', number: 33, name: 'Canine', x: '59.2%', y: '55%', width: '5.4%', height: '20%' },
  { id: '34', number: 34, name: 'First Premolar', x: '64.1%', y: '55%', width: '5.4%', height: '21%' },
  { id: '35', number: 35, name: 'Second Premolar', x: '69.5%', y: '55%', width: '5.4%', height: '20%' },
  { id: '36', number: 36, name: 'First Molar', x: '74.9%', y: '53%', width: '6.9%', height: '21%' },
  { id: '37', number: 37, name: 'Second Molar', x: '82.2%', y: '53%', width: '7.5%', height: '18%' },
  { id: '38', number: 38, name: 'Third Molar', x: '89.1%', y: '51%', width: '7.5%', height: '18%' },
  { id: '41', number: 41, name: 'Central Incisor', x: '44.1%', y: '55.0%', width: '5.5%', height: '21%' },
  { id: '42', number: 42, name: 'Lateral Incisor', x: '39.2%', y: '55.0%', width: '5.5%', height: '21%' },
  { id: '43', number: 43, name: 'Canine', x: '34.4%', y: '55%', width: '5.6%', height: '20%' },
  { id: '44', number: 44, name: 'First Premolar', x: '29.4%', y: '54.5%', width: '5.8%', height: '20%' },
  { id: '45', number: 45, name: 'Second Premolar', x: '24.4%', y: '53.5%', width: '5.8%', height: '20%' },
  { id: '46', number: 46, name: 'First Molar', x: '17.3%', y: '53%', width: '6.8%', height: '18%' },
  { id: '47', number: 47, name: 'Second Molar', x: '9.7%', y: '53%', width: '7.1%', height: '18%' },
  { id: '48', number: 48, name: 'Third Molar', x: '4.1%', y: '51%', width: '5.8%', height: '16%' }
];

export default function DentalChart() {
  const { selectedTooth, setSelectedTooth } = useTreatments();

  const handleToothClick = (toothId) => {
    setSelectedTooth(toothId === selectedTooth ? null : toothId);
  };

  const selectedToothObj = TOOTH_DATA.find(t => t.id === selectedTooth);

  return (
    <div className="w-full p-4 text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-2">SELECT TOOTH</h1>

      <div className="relative w-full h-[60vh] min-h-[360px] mb-2">
        <div className="absolute inset-0 flex justify-center">
          <img
            src="/Topogram.png"
            alt="Dental Chart"
            className="h-full w-auto max-w-full object-contain"
          />
        </div>

        {TOOTH_DATA.map(tooth => (
          <button
            key={tooth.id}
            title={`Tooth ${tooth.number} - ${tooth.name}`}
            className="absolute hover:scale-105 hover:bg-white/30 transition-all duration-200 rounded-md border border-transparent focus:outline-none"
            style={{
              left: tooth.x,
              top: tooth.y,
              width: tooth.width,
              height: tooth.height,
            }}
            onClick={() => handleToothClick(tooth.id)}
            aria-label={`Tooth ${tooth.number}`}
          />
        ))}

        {selectedToothObj && (
          <div
            className="absolute bg-white/40 transition-all duration-300 pointer-events-none z-10"
            style={{
              left: selectedToothObj.x,
              top: selectedToothObj.y,
              width: selectedToothObj.width,
              height: selectedToothObj.height,
              transform: 'scale(1.1)',
              transformOrigin: 'center center',
              borderRadius: '20%',
              border: '2px solid #4f46e5',
              boxShadow: '0 0 10px rgba(79, 70, 229, 0.6)'
            }}
          />
        )}
      </div>

      {selectedToothObj && (
        <div className="text-center mt-1 text-gray-700">
          <p className="text-lg font-semibold">
            Selected Tooth: {selectedToothObj.number} - {selectedToothObj.name}
          </p>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useTreatments } from "@/context/TreatmentContext";
// import { useState } from "react";

// const TOOTH_DATA = [
//   { id: '11', number: 11, name: 'Central Incisor', x: '43.3%', y: '17%', width: '5.8%', height: '24%' },
//   { id: '12', number: 12, name: 'Lateral Incisor', x: '38.67%', y: '18%', width: '5.4%', height: '24%' },
//   { id: '13', number: 13, name: 'Canine', x: '34.1%', y: '18%', width: '5.4%', height: '24%' },
//   { id: '14', number: 14, name: 'First Premolar', x: '29.3%', y: '18%', width: '5.4%', height: '23%' },
//   { id: '15', number: 15, name: 'Second Premolar', x: '24.3%', y: '18%', width: '5.5%', height: '23%' },
//   { id: '16', number: 16, name: 'First Molar', x: '18.1%', y: '18%', width: '6.2%', height: '22%' },
//   { id: '17', number: 17, name: 'Second Molar', x: '11.5%', y: '18%', width: '6.2%', height: '22%' },
//   { id: '18', number: 18, name: 'Third Molar', x: '6.0%', y: '18%', width: '5.7%', height: '21%' },
//   { id: '21', number: 21, name: 'Central Incisor', x: '49.5%', y: '18%', width: '5.4%', height: '24%' },
//   { id: '22', number: 22, name: 'Lateral Incisor', x: '54.8%', y: '18%', width: '5.4%', height: '24%' },
//   { id: '23', number: 23, name: 'Canine', x: '59.3%', y: '18%', width: '5.4%', height: '24%' },
//   { id: '24', number: 24, name: 'First Premolar', x: '64.2%', y: '18%', width: '5.4%', height: '24%' },
//   { id: '25', number: 25, name: 'Second Premolar', x: '69.5%', y: '18%', width: '5.3%', height: '24%' },
//   { id: '26', number: 26, name: 'First Molar', x: '74.9%', y: '18%', width: '6.3%', height: '22%' },
//   { id: '27', number: 27, name: 'Second Molar', x: '81.6%', y: '18%', width: '6.3%', height: '21%' },
//   { id: '28', number: 28, name: 'Third Molar', x: '88.0%', y: '18%', width: '6.0%', height: '20%' },
//   { id: '31', number: 31, name: 'Central Incisor', x: '49.6%', y: '55%', width: '5.4%', height: '21%' },
//   { id: '32', number: 32, name: 'Lateral Incisor', x: '54.5%', y: '55%', width: '5.4%', height: '20%' },
//   { id: '33', number: 33, name: 'Canine', x: '59.2%', y: '55%', width: '5.4%', height: '20%' },
//   { id: '34', number: 34, name: 'First Premolar', x: '64.1%', y: '55%', width: '5.4%', height: '21%' },
//   { id: '35', number: 35, name: 'Second Premolar', x: '69.5%', y: '55%', width: '5.4%', height: '20%' },
//   { id: '36', number: 36, name: 'First Molar', x: '74.9%', y: '53%', width: '6.9%', height: '21%' },
//   { id: '37', number: 37, name: 'Second Molar', x: '82.2%', y: '53%', width: '7.5%', height: '18%' },
//   { id: '38', number: 38, name: 'Third Molar', x: '89.1%', y: '51%', width: '7.5%', height: '18%' },
//   { id: '41', number: 41, name: 'Central Incisor', x: '44.1%', y: '55.0%', width: '5.5%', height: '21%' },
//   { id: '42', number: 42, name: 'Lateral Incisor', x: '39.2%', y: '55.0%', width: '5.5%', height: '21%' },
//   { id: '43', number: 43, name: 'Canine', x: '34.4%', y: '55%', width: '5.6%', height: '20%' },
//   { id: '44', number: 44, name: 'First Premolar', x: '29.4%', y: '54.5%', width: '5.8%', height: '20%' },
//   { id: '45', number: 45, name: 'Second Premolar', x: '24.4%', y: '53.5%', width: '5.8%', height: '20%' },
//   { id: '46', number: 46, name: 'First Molar', x: '17.3%', y: '53%', width: '6.8%', height: '18%' },
//   { id: '47', number: 47, name: 'Second Molar', x: '9.7%', y: '53%', width: '7.1%', height: '18%' },
//   { id: '48', number: 48, name: 'Third Molar', x: '4.1%', y: '51%', width: '5.8%', height: '16%' }
// ];

// export default function DentalChart() {
//   const { selectedTooth, setSelectedTooth } = useTreatments();

//   const handleToothClick = (toothId) => {
//     setSelectedTooth(toothId === selectedTooth ? null : toothId);
//   };

//   const selectedToothObj = TOOTH_DATA.find((t) => t.id === selectedTooth);

//   return (
//     <div className="w-full px-2 py-4 text-gray-800">
//       <h1 className="text-xl sm:text-2xl font-bold text-center mb-3">
//         🦷 Select Tooth
//       </h1>

//       <div className="relative w-full h-[60vh] min-h-[250px] sm:min-h-[320px] md:min-h-[360px] mb-3 overflow-hidden">
//         {/* Dental Chart Image */}
//         <div className="absolute inset-0 flex justify-center items-center">
//           <img
//             src="/topogram.png"
//             alt="Dental Chart"
//             className="max-h-full w-auto max-w-full object-contain"
//           />
//         </div>

//         {/* Tooth Buttons */}
//         {TOOTH_DATA.map((tooth) => (
//           <button
//             key={tooth.id}
//             title={`Tooth ${tooth.number} - ${tooth.name}`}
//             className="absolute z-10 transition-all duration-200 border border-transparent rounded-md focus:outline-none hover:scale-105 hover:bg-white/30"
//             style={{
//               left: tooth.x,
//               top: tooth.y,
//               width: tooth.width,
//               height: tooth.height,
//               minWidth: "14px",
//               minHeight: "18px",
//             }}
//             onClick={() => handleToothClick(tooth.id)}
//             aria-label={`Tooth ${tooth.number}`}
//           />
//         ))}

//         {/* Highlight Selected Tooth */}
//         {selectedToothObj && (
//           <div
//             className="absolute pointer-events-none z-20 bg-white/40 border-2 border-indigo-600 shadow-md transition-all duration-300 rounded-lg"
//             style={{
//               left: selectedToothObj.x,
//               top: selectedToothObj.y,
//               width: selectedToothObj.width,
//               height: selectedToothObj.height,
//               transform: "scale(1.1)",
//               transformOrigin: "center center",
//               borderRadius: "20%",
//             }}
//           />
//         )}
//       </div>

//       {/* Selected Tooth Label */}
//       {selectedToothObj && (
//         <div className="text-center mt-2 text-gray-700">
//           <p className="text-md sm:text-lg font-medium">
//             ✅ Selected Tooth:{" "}
//             <span className="font-semibold">
//               {selectedToothObj.number} - {selectedToothObj.name}
//             </span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
