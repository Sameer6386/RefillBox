// components/EmployeeTable.js
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function EmployeeTable({ employees, onView, onEdit, onDelete }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b-2 p-4 border-gray-700">ID</th>
            <th className="border-b-2 p-4 border-gray-700">Name</th>
            <th className="border-b-2 p-4 border-gray-700">Position</th>
            <th className="border-b-2 p-4 border-gray-700">Department</th>
            <th className="border-b-2 p-4 border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-700">
              <td className="border-b p-4 border-gray-700">{employee.id}</td>
              <td className="border-b p-4 border-gray-700">{employee.name}</td>
              <td className="border-b p-4 border-gray-700">
                {employee.position}
              </td>
              <td className="border-b p-4 border-gray-700">
                {employee.department}
              </td>
              <td className="border-b p-4 border-gray-700 flex space-x-4">
                <FaEye
                  className="cursor-pointer hover:text-blue-400"
                  size={20}
                  onClick={() => onView(employee)}
                />
                <FaEdit
                  className="cursor-pointer hover:text-green-400"
                  size={20}
                  onClick={() => onEdit(employee)}
                />
                <FaTrash
                  className="cursor-pointer hover:text-red-400"
                  size={20}
                  onClick={() => onDelete(employee)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
