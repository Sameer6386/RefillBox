// models/Delete.js
export default function Delete({ employee, onConfirm, onCancel }) {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg relative max-w-sm">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-300"
          onClick={onCancel}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
        <p>
          Are you sure you want to delete employee{" "}
          <strong>{employee.name}</strong>?
        </p>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => onConfirm(employee.id)}
          >
            Confirm
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
