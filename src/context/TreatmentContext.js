
// "use client";

// import { createContext, useContext, useState, useEffect } from "react";

// const TreatmentContext = createContext();

// export const TreatmentProvider = ({ patientId, children }) => {
//   const [treatments, setTreatments] = useState([]);
//   const [selectedTooth, setSelectedTooth] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (patientId) {
//       fetch(`http://127.0.0.1:8000/api/patients/${patientId}/`)
//         .then(res => res.json())
//         .then(data => setTreatments(data.treatments || []))
//         .catch(err => console.error("Failed to fetch treatments", err));
//     }
//   }, [patientId]);
  
//     const addTreatment = async (treatment) => {
//       const formatDate = (input) => {
//         if (!input) return null;
//         const date = new Date(input);
//         return date.toISOString().split("T")[0]; // "YYYY-MM-DD"
//       };
    
//       const formData = new FormData();
//       formData.append("patient", parseInt(patientId));
//       formData.append("name", treatment.name);
//       formData.append("estimated_cost", parseFloat(treatment.estimated_cost || 0));
//       formData.append("tooth", treatment.tooth || "");
//       formData.append("date", formatDate(treatment.date));
    
//       // ✅ Append file only if it exists
//       if (treatment.xray) {
//         formData.append("xray", treatment.xray);
//       }
    
//       try {
//         const res = await fetch("http://127.0.0.1:8000/api/treatments/", {
//           method: "POST",
//           body: formData, // 👈 send as multipart/form-data
//         });
    
//         if (!res.ok) {
//           const errorText = await res.text();
//           console.error("Backend error response:", errorText);
//           throw new Error("Failed to save treatment");
//         }
    
//         const newTreatment = await res.json();
//         setTreatments(prev => [...prev, newTreatment]);
//       } catch (error) {
//         console.error("Error saving treatment:", error.message);
//         alert("Could not add treatment.");
//       }
//     };
    
//   const deleteTreatment = async (id) => {
//     try {
//       await fetch(`http://127.0.0.1:8000/api/treatments/${id}/`, {
//         method: "DELETE",
//       });
//       setTreatments(prev => prev.filter(t => t.id !== id));
//     } catch (error) {
//       console.error("Failed to delete treatment", error);
//     }
//   };

//   return (
//     <TreatmentContext.Provider value={{
//       treatments,
//       selectedTooth,
//       setSelectedTooth,
//       addTreatment,
//       deleteTreatment,
//       loading
//     }}>
//       {children}
//     </TreatmentContext.Provider>
//   );
// };

// export const useTreatments = () => useContext(TreatmentContext);

"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance"; // ✅ import shared axios instance

const TreatmentContext = createContext();

export const TreatmentProvider = ({ patientId, children }) => {
  const [treatments, setTreatments] = useState([]);
  const [selectedTooth, setSelectedTooth] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTreatments = async () => {
      if (!patientId) return;

      try {
        const response = await axiosInstance.get(`patients/${patientId}/`);
        setTreatments(response.data.treatments || []);
      } catch (err) {
        console.error("❌ Failed to fetch treatments:", err.response?.data || err.message);
      }
    };

    fetchTreatments();
  }, [patientId]);

    const addTreatment = async (treatment) => {
      const formatDate = (input) => {
        if (!input) return null;
        const date = new Date(input);
        return date.toISOString().split("T")[0]; // "YYYY-MM-DD"
      };
    
      const formData = new FormData();
      formData.append("patient", parseInt(patientId));
      formData.append("name", treatment.name);
      formData.append("estimated_cost", parseFloat(treatment.estimated_cost || 0));
      formData.append("tooth", treatment.tooth || "");
      formData.append("date", formatDate(treatment.date));
      formData.append("status", treatment.status || "in_progress"); // ✅ Add this line
    
      if (treatment.xray) {
        formData.append("xray", treatment.xray);
      }
    
      try {
        const response = await axiosInstance.post("treatments/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
    
        setTreatments((prev) => [...prev, response.data]);
      } catch (err) {
        console.error("❌ Error saving treatment:", err.response?.data || err.message);
        alert("Could not add treatment.");
      }
    };
  

  const deleteTreatment = async (id) => {
    try {
      await axiosInstance.delete(`treatments/${id}/`);
      setTreatments((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("❌ Failed to delete treatment:", err.response?.data || err.message);
    }
  };

  return (
    <TreatmentContext.Provider
      value={{
        treatments,
        selectedTooth,
        setSelectedTooth,
        addTreatment,
        deleteTreatment,
        loading,
      }}
    >
      {children}
    </TreatmentContext.Provider>
  );
};

export const useTreatments = () => useContext(TreatmentContext);
