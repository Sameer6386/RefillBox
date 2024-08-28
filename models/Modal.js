// components/modals/Modal.js
export default function Modal({ employee, onClose }) {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg relative  max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-300"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Employee Details</h2>
        <p>
          <strong>ID:</strong> {employee.id}
        </p>
        <p>
          <strong>Name:</strong> {employee.name}
        </p>
        <p>
          <strong>Position:</strong> {employee.position}
        </p>
        <p>
          <strong>Department:</strong> {employee.department}
        </p>
      </div>
    </div>
  );
}
