// components/modals/AddEmployeeModal.js
import { useState } from "react";

export default function AddEmployeeModal({ onAdd, onCancel }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");

  const handleAdd = () => {
    const newEmployee = {
      id: Date.now(),
      name,
      position,
      department,
    };
    onAdd(newEmployee);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg relative  max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-300"
          onClick={onCancel}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Add New Employee</h2>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
