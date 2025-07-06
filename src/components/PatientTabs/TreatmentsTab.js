"use client";

import { useState, useEffect } from "react";
import { useTreatments } from "@/context/TreatmentContext";
import DentalChart from "@/app/emr/dentalchart/DentalChart";

export default function TreatmentsTab({
  newTreatment,
  setNewTreatment,
  treatments,
  handleAddTreatment,
  getXrayLink,
}) {
  const { selectedTooth } = useTreatments();
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState("");
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    setNewTreatment((prev) => ({ ...prev, tooth: selectedTooth }));
  }, [selectedTooth]);

  const showToast = (msg, duration = 3000) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), duration);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setNewTreatment({ ...newTreatment, xray: file });
      showToast("📸 X-ray file added via drag & drop");
    }
  };
  
  const handleAdd = async () => {
    if (!newTreatment.tooth) {
      showToast("🦷 Please select a tooth from the dental chart");
      return;
    }
    if (!newTreatment.name.trim()) {
      showToast("📝 Please enter a treatment name");
      return;
    }
    if (!newTreatment.estimated_cost || parseFloat(newTreatment.estimated_cost) <= 0) {
      showToast("💰 Please enter a valid cost");
      return;
    }

    setAdding(true);
    try {
      await handleAddTreatment();
      showToast("✅ Treatment added successfully");
      setNewTreatment({
        name: "",
        estimated_cost: "",
        date: "",
        status: "in_progress",
        tooth: "",
        xray: null,
      });
    } catch (err) {
      showToast("❌ Failed to add treatment");
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-indigo-800">🦷 Treatment Plan</h3>

      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
        <DentalChart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        <input
          type="text"
          placeholder="Treatment Name"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={newTreatment.name}
          onChange={(e) =>
            setNewTreatment({ ...newTreatment, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Estimated Cost (₹)"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={newTreatment.estimated_cost}
          onChange={(e) =>
            setNewTreatment({ ...newTreatment, estimated_cost: e.target.value })
          }
        />
        <input
          type="date"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={newTreatment.date || ""}
          onChange={(e) =>
            setNewTreatment({ ...newTreatment, date: e.target.value })
          }
        />
        <select
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={newTreatment.status || "in_progress"}
          onChange={(e) =>
            setNewTreatment({ ...newTreatment, status: e.target.value })
          }
        >
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className={`border border-dashed rounded-lg p-3 text-center transition ${
            dragOver ? "border-indigo-600 bg-indigo-50" : "border-gray-300"
          }`}
        >
          <input
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            id="xray-upload"
            onChange={(e) =>
              setNewTreatment({ ...newTreatment, xray: e.target.files[0] })
            }
          />
          <label htmlFor="xray-upload" className="cursor-pointer text-gray-600">
            {newTreatment.xray ? (
              <span>📎 {newTreatment.xray.name}</span>
            ) : (
              <span>📁 Drag & drop X-ray</span>
            )}
          </label>
        </div>
      </div>

      <div>
        <button
          className={`mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ${
            adding ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleAdd}
          disabled={adding}
        >
          {adding ? "Adding..." : "➕ Add Treatment"}
        </button>

        {message && (
          <div className="mt-2 inline-flex items-center gap-2 bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-2 rounded shadow-sm relative transition duration-300">
            <span>{message}</span>
            <button
              onClick={() => setMessage("")}
              className="ml-2 text-yellow-700 font-bold hover:text-yellow-900 focus:outline-none"
            >
              ×
            </button>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-gray-800 shadow-sm bg-white rounded-lg overflow-hidden">
          <thead className="bg-indigo-50 text-indigo-800 font-semibold">
            <tr>
              <th className="p-3 border">Tooth</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Cost (₹)</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">X-ray</th>
            </tr>
          </thead>
          <tbody>
            {treatments.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 p-4">
                  No treatments yet
                </td>
              </tr>
            ) : (
              treatments.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50 transition">
                  <td className="p-3 border">{t.tooth || "-"}</td>
                  <td className="p-3 border">{t.name}</td>
                  <td className="p-3 border">₹{t.estimated_cost}</td>
                  <td className="p-3 border">{t.date || "-"}</td>
                  <td className="p-3 border">{t.status || "In Progress"}</td>
                  <td className="p-3 border text-center">
                    {t.xray ? (
                      <a
                        href={getXrayLink(t.xray)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
