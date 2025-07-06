

// // 'use client';
// // import { useState } from 'react';

// // // const TOOTH_DATA = [
// // //   // ... (unchanged tooth data)
// // // ];
// // const TOOTH_DATA = [
// //   // Upper Right Quadrant (11-18)
// //   { id: '11', number: 11, name: 'Central Incisor', x: '43.3%', y: '24%', width: '5.8%', height: '24%' },
// //   { id: '12', number: 12, name: 'Lateral Incisor', x: '38.67%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '13', number: 13, name: 'Canine', x: '34.1%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '14', number: 14, name: 'First Premolar', x: '29.3%', y: '24%', width: '5.4%', height: '23%' },
// //   { id: '15', number: 15, name: 'Second Premolar', x: '24.3%', y: '24%', width: '5.5%', height: '23%' },
// //   { id: '16', number: 16, name: 'First Molar', x: '18.1%', y: '24%', width: '6.2%', height: '22%' },
// //   { id: '17', number: 17, name: 'Second Molar', x: '11.5%', y: '24%', width: '6.2%', height: '22%' },
// //   { id: '18', number: 18, name: 'Third Molar', x: '6.0%', y: '24%', width: '5.7%', height: '21%' },

// //   // Upper Left Quadrant (21-28)
// //   { id: '21', number: 21, name: 'Central Incisor', x: '49.5%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '22', number: 22, name: 'Lateral Incisor', x: '54.8%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '23', number: 23, name: 'Canine', x: '59.3%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '24', number: 24, name: 'First Premolar', x: '64.2%', y: '24%', width: '5.4%', height: '24%' },
// //   { id: '25', number: 25, name: 'Second Premolar', x: '69.5%', y: '24%', width: '5.3%', height: '24%' },
// //   { id: '26', number: 26, name: 'First Molar', x: '74.9%', y: '24%', width: '6.3%', height: '22%' },
// //   { id: '27', number: 27, name: 'Second Molar', x: '81.6%', y: '24%', width: '6.3%', height: '21%' },
// //   { id: '28', number: 28, name: 'Third Molar', x: '88.0%', y: '24%', width: '6.0%', height: '20%' },

// //   // Lower Left Quadrant (31-38)
// //   { id: '31', number: 31, name: 'Central Incisor', x: '49.6%', y: '51%', width: '5.4%', height: '21%' },
// //   { id: '32', number: 32, name: 'Lateral Incisor', x: '54.5%', y: '51%', width: '5.4%', height: '20%' },
// //   { id: '33', number: 33, name: 'Canine', x: '59.2%', y: '51%', width: '5.4%', height: '20%' },
// //   { id: '34', number: 34, name: 'First Premolar', x: '64.1%', y: '51%', width: '5.4%', height: '21%' },
// //   { id: '35', number: 35, name: 'Second Premolar', x: '69.5%', y: '51%', width: '5.4%', height: '20%' },
// //   { id: '36', number: 36, name: 'First Molar', x: '74.9%', y: '49%', width: '6.9%', height: '21%' },
// //   { id: '37', number: 37, name: 'Second Molar', x: '82.2%', y: '49%', width: '7.5%', height: '18%' },
// //   { id: '38', number: 38, name: 'Third Molar', x: '89.1%', y: '49%', width: '7.5%', height: '18%' },

// //   // Lower Right Quadrant (41-48)
// //   { id: '41', number: 41, name: 'Central Incisor', x: '44.1%', y: '51.0%', width: '5.5%', height: '21%' },
// //   { id: '42', number: 42, name: 'Lateral Incisor', x: '39.2%', y: '51.0%', width: '5.5%', height: '21%' },
// //   { id: '43', number: 43, name: 'Canine', x: '34.4%', y: '51.2%', width: '5.6%', height: '20%' },
// //   { id: '44', number: 44, name: 'First Premolar', x: '29.4%', y: '50.5%', width: '5.8%', height: '20%' },
// //   { id: '45', number: 45, name: 'Second Premolar', x: '24.4%', y: '49.5%', width: '5.8%', height: '20%' },
// //   { id: '46', number: 46, name: 'First Molar', x: '17.3%', y: '49%', width: '6.8%', height: '18%' },
// //   { id: '47', number: 47, name: 'Second Molar', x: '9.7%', y: '49%', width: '7.1%', height: '18%' },
// //   { id: '48', number: 48, name: 'Third Molar', x: '4.1%', y: '49%', width: '5.8%', height: '16%' }
// // ];
// // const DEFAULT_TREATMENT = {
// //   date: new Date().toISOString().split('T')[0],
// //   procedure: '',
// //   notes: '',
// //   condition: 'healthy'
// // };

// // export default function DentalChart({ onSelectTooth, selectedTooth }) {
// //   const [internalSelectedTooth, setInternalSelectedTooth] = useState(null);
// //   const [treatments, setTreatments] = useState({});
// //   const [newTreatment, setNewTreatment] = useState(DEFAULT_TREATMENT);
// //   const [activeTab, setActiveTab] = useState('history');

// //   const isControlled = typeof onSelectTooth === 'function' && selectedTooth !== undefined;
// //   const effectiveSelected = isControlled
// //     ? TOOTH_DATA.find(t => t.id === selectedTooth)
// //     : internalSelectedTooth;

// //   const handleToothClick = (tooth) => {
// //     if (isControlled) {
// //       onSelectTooth(tooth.id);
// //     } else {
// //       setInternalSelectedTooth(internalSelectedTooth?.id === tooth.id ? null : tooth);
// //     }
// //     setActiveTab('history');
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewTreatment(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleAddTreatment = (e) => {
// //     e.preventDefault();
// //     if (!effectiveSelected) return;

// //     const treatment = {
// //       ...newTreatment,
// //       id: Date.now().toString()
// //     };

// //     setTreatments(prev => ({
// //       ...prev,
// //       [effectiveSelected.id]: [...(prev[effectiveSelected.id] || []), treatment]
// //     }));

// //     setNewTreatment(DEFAULT_TREATMENT);
// //   };

// //   return (
// //     <div className="w-full min-h-screen p-4 text-gray-800">
// //       <h1 className="text-2xl font-bold text-center mb-4">SELECT TOOTH</h1>

// //       <div className="relative w-full h-[70vh] min-h-[400px] mb-8">
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
// //             onClick={() => handleToothClick(tooth)}
// //             aria-label={`Tooth ${tooth.number}`}
// //           />
// //         ))}

// //         {effectiveSelected && (
// //           <div
// //             className="absolute bg-white/30 transition-all duration-300 pointer-events-none"
// //             style={{
// //               left: effectiveSelected.x,
// //               top: effectiveSelected.y,
// //               width: effectiveSelected.width,
// //               height: effectiveSelected.height,
// //               transform: 'scale(1.05)',
// //               transformOrigin: 'center center',
// //               borderRadius: '20%',
// //               border: '2px solid #d1d5db',
// //               boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'
// //             }}
// //           />
// //         )}
// //       </div>

// //       {!isControlled && effectiveSelected && (
// //         <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
// //           <div className="flex border-b mb-4">
// //             <button
// //               className={`px-4 py-2 font-medium ${activeTab === 'history' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800'}`}
// //               onClick={() => setActiveTab('history')}
// //             >
// //               Treatment History
// //             </button>
// //             <button
// //               className={`px-4 py-2 font-medium ${activeTab === 'new' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800'}`}
// //               onClick={() => setActiveTab('new')}
// //             >
// //               Add Treatment
// //             </button>
// //           </div>

// //           {activeTab === 'history' ? (
// //             <div className="max-h-[300px] overflow-y-auto">
// //               <h2 className="text-xl font-bold mb-2">
// //                 Tooth {effectiveSelected.number}: {effectiveSelected.name}
// //               </h2>
// //               {treatments[effectiveSelected.id]?.length > 0 ? (
// //                 <ul className="space-y-3">
// //                   {treatments[effectiveSelected.id].map(treatment => (
// //                     <li key={treatment.id} className="p-3 bg-gray-50 rounded">
// //                       <div className="flex justify-between">
// //                         <span className="font-medium">{treatment.date}</span>
// //                         <span className={`px-2 py-1 text-xs rounded-full ${
// //                           treatment.condition === 'healthy' ? 'bg-green-100 text-green-800' :
// //                           treatment.condition === 'cavity' ? 'bg-red-100 text-red-800' :
// //                           treatment.condition === 'filled' ? 'bg-yellow-100 text-yellow-800' :
// //                           'bg-gray-100 text-gray-800'
// //                         }`}>
// //                           {treatment.condition}
// //                         </span>
// //                       </div>
// //                       <p className="mt-1 font-medium">{treatment.procedure}</p>
// //                       {treatment.notes && (
// //                         <p className="mt-1 text-sm">Notes: {treatment.notes}</p>
// //                       )}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               ) : (
// //                 <p>No treatments recorded</p>
// //               )}
// //             </div>
// //           ) : (
// //             <form onSubmit={handleAddTreatment} className="space-y-4">
// //               <div>
// //                 <label className="block mb-1 font-medium">Date</label>
// //                 <input
// //                   type="date"
// //                   name="date"
// //                   value={newTreatment.date}
// //                   onChange={handleInputChange}
// //                   className="w-full p-2 border border-gray-300 rounded"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block mb-1 font-medium">Procedure</label>
// //                 <input
// //                   type="text"
// //                   name="procedure"
// //                   value={newTreatment.procedure}
// //                   onChange={handleInputChange}
// //                   className="w-full p-2 border border-gray-300 rounded"
// //                   placeholder="E.g., Filling, Extraction"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block mb-1 font-medium">Condition</label>
// //                 <select
// //                   name="condition"
// //                   value={newTreatment.condition}
// //                   onChange={handleInputChange}
// //                   className="w-full p-2 border border-gray-300 rounded"
// //                   required
// //                 >
// //                   <option value="healthy">Healthy</option>
// //                   <option value="cavity">Cavity</option>
// //                   <option value="filled">Filled</option>
// //                   <option value="extracted">Extracted</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label className="block mb-1 font-medium">Notes</label>
// //                 <textarea
// //                   name="notes"
// //                   value={newTreatment.notes}
// //                   onChange={handleInputChange}
// //                   className="w-full p-2 border border-gray-300 rounded"
// //                   rows={3}
// //                 />
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
// //               >
// //                 Save Treatment
// //               </button>
// //             </form>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// "use client";

// import { useTreatments } from "@/context/TreatmentContext";
// import { useState } from "react";

// const TOOTH_DATA = [
//   { id: '11', number: 11, name: 'Central Incisor', x: '43.3%', y: '24%', width: '5.8%', height: '24%' },
//   { id: '12', number: 12, name: 'Lateral Incisor', x: '38.67%', y: '24%', width: '5.4%', height: '24%' },
//   { id: '13', number: 13, name: 'Canine', x: '34.1%', y: '24%', width: '5.4%', height: '24%' },
//   { id: '14', number: 14, name: 'First Premolar', x: '29.3%', y: '24%', width: '5.4%', height: '23%' },
//   { id: '15', number: 15, name: 'Second Premolar', x: '24.3%', y: '24%', width: '5.5%', height: '23%' },
//   { id: '16', number: 16, name: 'First Molar', x: '18.1%', y: '24%', width: '6.2%', height: '22%' },
//   { id: '17', number: 17, name: 'Second Molar', x: '11.5%', y: '24%', width: '6.2%', height: '22%' },
//   { id: '18', number: 18, name: 'Third Molar', x: '6.0%', y: '24%', width: '5.7%', height: '21%' },
//   { id: '21', number: 21, name: 'Central Incisor', x: '49.5%', y: '24%', width: '5.4%', height: '24%' },
//   { id: '22', number: 22, name: 'Lateral Incisor', x: '54.8%', y: '24%', width: '5.4%', height: '24%' },
//   { id: '23', number: 23, name: 'Canine', x: '59.3%', y: '24%', width: '5.4%', height: '24%' },
//   { id: '24', number: 24, name: 'First Premolar', x: '64.2%', y: '24%', width: '5.4%', height: '24%' },
//   { id: '25', number: 25, name: 'Second Premolar', x: '69.5%', y: '24%', width: '5.3%', height: '24%' },
//   { id: '26', number: 26, name: 'First Molar', x: '74.9%', y: '24%', width: '6.3%', height: '22%' },
//   { id: '27', number: 27, name: 'Second Molar', x: '81.6%', y: '24%', width: '6.3%', height: '21%' },
//   { id: '28', number: 28, name: 'Third Molar', x: '88.0%', y: '24%', width: '6.0%', height: '20%' },
//   { id: '31', number: 31, name: 'Central Incisor', x: '49.6%', y: '51%', width: '5.4%', height: '21%' },
//   { id: '32', number: 32, name: 'Lateral Incisor', x: '54.5%', y: '51%', width: '5.4%', height: '20%' },
//   { id: '33', number: 33, name: 'Canine', x: '59.2%', y: '51%', width: '5.4%', height: '20%' },
//   { id: '34', number: 34, name: 'First Premolar', x: '64.1%', y: '51%', width: '5.4%', height: '21%' },
//   { id: '35', number: 35, name: 'Second Premolar', x: '69.5%', y: '51%', width: '5.4%', height: '20%' },
//   { id: '36', number: 36, name: 'First Molar', x: '74.9%', y: '49%', width: '6.9%', height: '21%' },
//   { id: '37', number: 37, name: 'Second Molar', x: '82.2%', y: '49%', width: '7.5%', height: '18%' },
//   { id: '38', number: 38, name: 'Third Molar', x: '89.1%', y: '49%', width: '7.5%', height: '18%' },
//   { id: '41', number: 41, name: 'Central Incisor', x: '44.1%', y: '51.0%', width: '5.5%', height: '21%' },
//   { id: '42', number: 42, name: 'Lateral Incisor', x: '39.2%', y: '51.0%', width: '5.5%', height: '21%' },
//   { id: '43', number: 43, name: 'Canine', x: '34.4%', y: '51.2%', width: '5.6%', height: '20%' },
//   { id: '44', number: 44, name: 'First Premolar', x: '29.4%', y: '50.5%', width: '5.8%', height: '20%' },
//   { id: '45', number: 45, name: 'Second Premolar', x: '24.4%', y: '49.5%', width: '5.8%', height: '20%' },
//   { id: '46', number: 46, name: 'First Molar', x: '17.3%', y: '49%', width: '6.8%', height: '18%' },
//   { id: '47', number: 47, name: 'Second Molar', x: '9.7%', y: '49%', width: '7.1%', height: '18%' },
//   { id: '48', number: 48, name: 'Third Molar', x: '4.1%', y: '49%', width: '5.8%', height: '16%' }
// ];

// export default function DentalChart() {
//   const { selectedTooth, setSelectedTooth } = useTreatments();

//   const handleToothClick = (toothId) => {
//     setSelectedTooth(toothId === selectedTooth ? null : toothId);
//   };

//   const selectedToothObj = TOOTH_DATA.find(t => t.id === selectedTooth);

//   return (
//     <div className="w-full min-h-screen p-4 text-gray-800">
//       <h1 className="text-2xl font-bold text-center mb-2">SELECT TOOTH</h1>

//       <div className="relative w-full h-[70vh] min-h-[400px] mb-4">
//         <div className="absolute inset-0 flex justify-center">
//           <img
//             src="/topogram.png"
//             alt="Dental Chart"
//             className="h-full w-auto max-w-full object-contain"
//           />
//         </div>

//         {TOOTH_DATA.map(tooth => (
//           <button
//             key={tooth.id}
//             className="absolute hover:bg-white/20 transition-all"
//             style={{
//               left: tooth.x,
//               top: tooth.y,
//               width: tooth.width,
//               height: tooth.height,
//             }}
//             onClick={() => handleToothClick(tooth.id)}
//             aria-label={`Tooth ${tooth.number}`}
//           />
//         ))}

//         {selectedToothObj && (
//           <div
//             className="absolute bg-white/30 transition-all duration-300 pointer-events-none"
//             style={{
//               left: selectedToothObj.x,
//               top: selectedToothObj.y,
//               width: selectedToothObj.width,
//               height: selectedToothObj.height,
//               transform: 'scale(1.05)',
//               transformOrigin: 'center center',
//               borderRadius: '20%',
//               border: '2px solid #d1d5db',
//               boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'
//             }}
//           />
//         )}
//       </div>

//       {selectedToothObj && (
//         <div className="text-center mt-2 text-gray-700">
//           <p className="text-lg font-semibold">
//             Selected Tooth: {selectedToothObj.number} - {selectedToothObj.name}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

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
            src="/topogram.png"
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
