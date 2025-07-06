import { useState } from "react";

export default function NewPatientForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    occupation: "",
    mobile: "",
    email: "",
    address: "",
    medicalHistory: {},
    medication: "",
    consent: false,
  });

  const medicalConditions = [
    "Blood Pressure", "Diabetes", "Thyroid", "Bypass/Stent", "Asthma",
    "Hepatitis", "Kidney disease", "T B", "Epilepsy/Seizures", "Acidity/Ulcers",
    "Jaundice", "HIV/AIDS", "Antidepressants", "Pacemaker", "Smoking/Alcohol",
    "Arthritis", "Liver disease", "Anemia", "Tumor", "Digestive disorder",
    "Hormone deficiency", "Pregnancy/Lactation", "Birth control pills", "Allergy",
    "Bleeding disorder",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (condition) => {
    setFormData((prev) => ({
      ...prev,
      medicalHistory: {
        ...prev.medicalHistory,
        [condition]: !prev.medicalHistory[condition],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">New Patient Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" className="w-full p-2 border rounded" onChange={handleChange} />
        
        <select name="sex" className="w-full p-2 border rounded" onChange={handleChange}>
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        
        <input type="text" name="occupation" placeholder="Occupation" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="mobile" placeholder="Mobile" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} />
        <textarea name="address" placeholder="Address" className="w-full p-2 border rounded" onChange={handleChange} />

        <h3 className="text-lg font-semibold">Medical History</h3>
        <div className="grid grid-cols-2 gap-2">
          {medicalConditions.map((condition, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input type="checkbox" onChange={() => handleCheckboxChange(condition)} />
              <span>{condition}</span>
            </label>
          ))}
        </div>

        <textarea name="medication" placeholder="List of medicines taken" className="w-full p-2 border rounded" onChange={handleChange} />

        <label className="flex items-center space-x-2">
          <input type="checkbox" onChange={() => setFormData((prev) => ({ ...prev, consent: !prev.consent }))} />
          <span>I agree and consent to treatment</span>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
      </form>
    </div>
  );
}
