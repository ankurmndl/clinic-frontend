// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function PatientSearchBar() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (query.length > 1) {
//         fetch(`http://127.0.0.1:8000/api/patients/search/?search=${query}`)
//           .then(res => res.json())
//           .then(data => setResults(data));
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [query]);

//   const handleSelect = (id) => {
//     setQuery('');
//     setResults([]);
//     router.push(`/emr/patient-list/${id}`);
//   };

//   return (
//     <div className="relative w-52">
//       <input
//         type="text"
//         placeholder="Search patient..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-52 px-3 py-1 rounded border border-gray-300 bg-white text-black text-sm"
//         />
//       {results.length > 0 && (
//         <ul className="absolute z-50 bg-white border mt-1 w-full rounded shadow text-sm text-black max-h-48 overflow-y-auto">
//           {results.map((patient) => (
//             <li
//               key={patient.id}
//               onClick={() => handleSelect(patient.id)}
//               className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {patient.name} ({patient.mobile})
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/navigation';

// export default function PatientSearchBar() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(-1);
//   const router = useRouter();
//   const listRef = useRef(null);

//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (query.length > 1) {
//         fetch(`http://127.0.0.1:8000/api/patients/search/?search=${query}`)
//           .then(res => res.json())
//           .then(data => {
//             setResults(data);
//             setActiveIndex(-1); // Reset selection
//           });
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [query]);

//   const handleKeyDown = (e) => {
//     if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
//     } else if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       setActiveIndex((prev) => Math.max(prev - 1, 0));
//     } else if (e.key === 'Enter' && activeIndex >= 0) {
//       const selected = results[activeIndex];
//       if (selected) {
//         handleSelect(selected.id);
//       }
//     }
//   };

//   const handleSelect = (id) => {
//     setQuery('');
//     setResults([]);
//     setActiveIndex(-1);
//     router.push(`/emr/patient-list/${id}`);
//   };

//   return (
//     <div className="relative w-52">
//       <input
//         type="text"
//         placeholder="Search patient..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={handleKeyDown}
//         className="w-full px-3 py-1 rounded border border-gray-300 bg-white text-black text-sm"
//       />
//       {results.length > 0 && (
//         <ul
//           ref={listRef}
//           className="absolute z-50 bg-white border mt-1 w-full rounded shadow text-sm text-black max-h-48 overflow-y-auto"
//         >
//           {results.map((patient, index) => (
//             <li
//               key={patient.id}
//               onClick={() => handleSelect(patient.id)}
//               className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
//                 index === activeIndex ? 'bg-blue-100' : ''
//               }`}
//             >
//               {patient.name} ({patient.mobile})
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance'; // ✅ Make sure this is present

// ✅ Custom debounce function
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export default function PatientSearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const listRef = useRef(null);

  // ✅ Debounced search function using useCallback
  const debouncedSearch = useCallback(
    debounce(async (searchTerm) => {
      try {
        const res = await axiosInstance.get(`patients/search/?search=${searchTerm}`);
        setResults(res.data);
        setActiveIndex(-1);
      } catch (err) {
        console.error('Search error:', err.message);
      }
    }, 300),
    []
  );

  // 🔍 Trigger debounce when query changes
  useEffect(() => {
    if (query.length > 1) {
      debouncedSearch(query);
    } else {
      setResults([]);
    }
  }, [query, debouncedSearch]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      const selected = results[activeIndex];
      if (selected) {
        handleSelect(selected.id);
      }
    }
  };

  const handleSelect = (id) => {
    setQuery('');
    setResults([]);
    setActiveIndex(-1);
    router.push(`/emr/patient-list/${id}`);
  };

  return (
    <div className="relative w-52">
      <input
        type="text"
        placeholder="Search patient..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-3 py-1 rounded border border-gray-300 bg-white text-black text-sm"
      />
      {results.length > 0 && (
        <ul
          ref={listRef}
          className="absolute z-50 bg-white border mt-1 w-full rounded shadow text-sm text-black max-h-48 overflow-y-auto"
        >
          {results.map((patient, index) => (
            <li
              key={patient.id}
              onClick={() => handleSelect(patient.id)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                index === activeIndex ? 'bg-blue-100' : ''
              }`}
            >
              {patient.name} ({patient.mobile})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

