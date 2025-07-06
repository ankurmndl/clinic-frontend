
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import DentalChart from "../dentalchart/DentalChart";

// export default function NewPatientForm() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     sex: "",
//     occupation: "",
//     mobile: "",
//     email: "",
//     address: "",
//     medicalHistory: [],
//     pastDentalHistory: "",
//     consent: false,
//   });

//   const [errors, setErrors] = useState({});

//   const medicalConditions = [
//     "Blood Pressure", "Diabetes", "Thyroid", "Bypass/Stent", "Asthma",
//     "Hepatitis", "Kidney disease", "T B", "Epilepsy/Seizures", "Acidity/Ulcers",
//     "Jaundice", "HIV/AIDS", "Antidepressants", "Pacemaker", "Smoking/Alcohol",
//     "Arthritis", "Liver disease", "Anemia", "Tumor", "Digestive disorder",
//     "Hormone deficiency", "Pregnancy/Lactation", "Birth control pills", "Allergy", "Bleeding disorder",
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleCheckboxChange = (condition) => {
//     setFormData((prev) => ({
//       ...prev,
//       medicalHistory: prev.medicalHistory.includes(condition)
//         ? prev.medicalHistory.filter((item) => item !== condition)
//         : [...prev.medicalHistory, condition],
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.age || isNaN(formData.age)) newErrors.age = "Valid age is required";
//     if (!formData.sex) newErrors.sex = "Gender is required";
//     if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     const patientData = {
//       name: formData.name,
//       age: formData.age,
//       sex: formData.sex,
//       occupation: formData.occupation,
//       mobile: formData.mobile,
//       email: formData.email,
//       address: formData.address,
//       medical_history: formData.medicalHistory,
//       past_dental_history: formData.pastDentalHistory,
//       consent: formData.consent,
//     };

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/patients/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(patientData),
//       });

//       if (!res.ok) throw new Error("Patient creation failed");
//       const createdPatient = await res.json();

//       alert("Patient created successfully!");
//       router.push(`/emr/patient-list/${createdPatient.id}`);

//     } catch (error) {
//       console.error("Submission failed:", error);
//       alert("Submission error. See console.");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-gray-800">
//       <h2 className="text-3xl font-bold mb-6 text-center">New Patient</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <input type="text" name="name" placeholder="Full Name" className="border p-2 rounded-md w-full" onChange={handleChange} />
//           {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
//         </div>

//         <div>
//           <input type="number" name="age" placeholder="Age" className="border p-2 rounded-md w-full" onChange={handleChange} />
//           {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
//         </div>

//         <div>
//           <select name="sex" className="border p-2 rounded-md w-full" onChange={handleChange}>
//             <option value="">Select Gender</option>
//             <option>Male</option><option>Female</option><option>Other</option>
//           </select>
//           {errors.sex && <p className="text-red-600 text-sm mt-1">{errors.sex}</p>}
//         </div>

//         <input type="text" name="occupation" placeholder="Occupation" className="border p-2 rounded-md w-full" onChange={handleChange} />
//         <div>
//           <input type="text" name="mobile" placeholder="Mobile Number" className="border p-2 rounded-md w-full" onChange={handleChange} />
//           {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
//         </div>
//         <input type="email" name="email" placeholder="Email" className="border p-2 rounded-md w-full" onChange={handleChange} />
//       </div>

//       <textarea name="address" placeholder="Address" className="border p-2 rounded-md w-full mt-4" onChange={handleChange} />

//       <h3 className="text-xl font-semibold mt-6">Medical History</h3>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
//         {medicalConditions.map((cond, idx) => (
//           <label key={idx} className="flex items-center space-x-2">
//             <input type="checkbox" checked={formData.medicalHistory.includes(cond)} onChange={() => handleCheckboxChange(cond)} />
//             <span>{cond}</span>
//           </label>
//         ))}
//       </div>

//       <h3 className="text-xl font-semibold mt-6">Past Dental History</h3>
//       <textarea
//         name="pastDentalHistory"
//         placeholder="Describe past dental treatments"
//         className="border p-2 rounded-md w-full mt-2"
//         onChange={handleChange}
//       />

//       {/* <DentalChart /> */}

//       <label className="flex items-start mt-6 space-x-2">
//         <input type="checkbox" checked={formData.consent} onChange={() => setFormData((prev) => ({ ...prev, consent: !prev.consent }))} />
//         <span className="text-sm">
//         I agree and consent to a dental examination by Dr. Arunima Mukherjee or an Associate of Esthetix Dental. I understand that additional diagnostic procedures and dental treatments may be recommended and will be discussed with me prior to being done.
//         Also, I acknowledge that there are no guarantees, expressed or implied, as to the results of any procedures or dental treatments performed.
//         </span>
//       </label>

//       <button onClick={handleSubmit} className="mt-6 w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-900 transition-all">Submit</button>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import DentalChart from "../dentalchart/DentalChart";

export default function NewPatientForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    occupation: "",
    mobile: "",
    email: "",
    address: "",
    medicalHistory: [],
    pastDentalHistory: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const medicalConditions = [
    "Blood Pressure", "Diabetes", "Thyroid", "Bypass/Stent", "Asthma",
    "Hepatitis", "Kidney disease", "T B", "Epilepsy/Seizures", "Acidity/Ulcers",
    "Jaundice", "HIV/AIDS", "Antidepressants", "Pacemaker", "Smoking/Alcohol",
    "Arthritis", "Liver disease", "Anemia", "Tumor", "Digestive disorder",
    "Hormone deficiency", "Pregnancy/Lactation", "Birth control pills", "Allergy", "Bleeding disorder",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (condition) => {
    setFormData((prev) => ({
      ...prev,
      medicalHistory: prev.medicalHistory.includes(condition)
        ? prev.medicalHistory.filter((item) => item !== condition)
        : [...prev.medicalHistory, condition],
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age || isNaN(formData.age)) newErrors.age = "Valid age is required";
    if (!formData.sex) newErrors.sex = "Gender is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const patientData = {
      name: formData.name,
      age: formData.age,
      sex: formData.sex,
      occupation: formData.occupation,
      mobile: formData.mobile,
      email: formData.email,
      address: formData.address,
      medical_history: formData.medicalHistory,
      past_dental_history: formData.pastDentalHistory,
      consent: formData.consent,
    };

    try {
      const response = await axiosInstance.post("patients/", patientData);
      const createdPatient = response.data;
      alert("Patient created successfully!");
      router.push(`/emr/patient-list/${createdPatient.id}`);
    } catch (error) {
      console.error("❌ Submission failed:", error.response?.data || error.message);
      alert("Submission error. See console for details.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">New Patient</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input type="text" name="name" placeholder="Full Name" className="border p-2 rounded-md w-full" onChange={handleChange} />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input type="number" name="age" placeholder="Age" className="border p-2 rounded-md w-full" onChange={handleChange} />
          {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
        </div>

        <div>
          <select name="sex" className="border p-2 rounded-md w-full" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option><option>Female</option><option>Other</option>
          </select>
          {errors.sex && <p className="text-red-600 text-sm mt-1">{errors.sex}</p>}
        </div>

        <input type="text" name="occupation" placeholder="Occupation" className="border p-2 rounded-md w-full" onChange={handleChange} />

        <div>
          <input type="text" name="mobile" placeholder="Mobile Number" className="border p-2 rounded-md w-full" onChange={handleChange} />
          {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
        </div>

        <input type="email" name="email" placeholder="Email" className="border p-2 rounded-md w-full" onChange={handleChange} />
      </div>

      <textarea name="address" placeholder="Address" className="border p-2 rounded-md w-full mt-4" onChange={handleChange} />

      <h3 className="text-xl font-semibold mt-6">Medical History</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        {medicalConditions.map((cond, idx) => (
          <label key={idx} className="flex items-center space-x-2">
            <input type="checkbox" checked={formData.medicalHistory.includes(cond)} onChange={() => handleCheckboxChange(cond)} />
            <span>{cond}</span>
          </label>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-6">Past Dental History</h3>
      <textarea
        name="pastDentalHistory"
        placeholder="Describe past dental treatments"
        className="border p-2 rounded-md w-full mt-2"
        onChange={handleChange}
      />

      {/* <DentalChart /> */}

      <label className="flex items-start mt-6 space-x-2">
        <input type="checkbox" checked={formData.consent} onChange={() => setFormData((prev) => ({ ...prev, consent: !prev.consent }))} />
        <span className="text-sm">
          I agree and consent to a dental examination by Dr. Arunima Mukherjee or an Associate of Esthetix Dental...
        </span>
      </label>

      <button onClick={handleSubmit} className="mt-6 w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-900 transition-all">Submit</button>
    </div>
  );
}
