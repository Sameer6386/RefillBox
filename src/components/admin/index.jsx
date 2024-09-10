"use client";
import React, { useState } from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

export default function Widget() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editableEmployee, setEditableEmployee] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    contact: "",
    position: "",
    status: "",
    profileType: "",
  });

  const [employees, setEmployees] = useState([
    {
      name: "Ayushi",
      email: "aayushi@gmail.com",
      contact: "1234567890",
      position: "Sales",
      status: "Active",
      profileType: "Self",
    },
    {
      name: "Ayushi",
      email: "aayushi@gmail.com",
      contact: "1234567890",
      position: "Sales",
      status: "Active",
      profileType: "Self",
    },
    {
      name: "Pankaj",
      email: "pankaj@gmail.com",
      contact: "3436787654",
      position: "Sales",
      status: "Active",
      profileType: "Added",
    },
    {
      name: "Bhavya",
      email: "bhavya@gmail.com",
      contact: "5247387432",
      position: "Sales",
      status: "Inactive",
      profileType: "Added",
    },
    {
      name: "Himanshu",
      email: "himanshu@gmail.com",
      contact: "34232453",
      position: "Sales",
      status: "Inactive",
      profileType: "Self",
    },
    {
      name: "Ansh",
      email: "ansh@gmail.com",
      contact: "4324534543",
      position: "Sales",
      status: "Active",
      profileType: "Self",
    },
  ]);

  const openDetailModal = (employee) => {
    setSelectedEmployee(employee);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedEmployee(null);
  };

  const openEditModal = (employee) => {
    setEditableEmployee({ ...employee });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditableEmployee(null);
  };

  const openDeleteConfirm = (employee) => {
    setEmployeeToDelete(employee);
    setIsDeleteConfirmOpen(true);
  };

  const closeDeleteConfirm = () => {
    setIsDeleteConfirmOpen(false);
    setEmployeeToDelete(null);
  };

  const openAddModal = () => {
    setNewEmployee({
      name: "",
      email: "",
      contact: "",
      position: "",
      status: "",
      profileType: "",
    });
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditableEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.email === editableEmployee.email ? editableEmployee : emp
      )
    );
    closeEditModal();
  };

  const handleDeleteConfirm = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.email !== employeeToDelete.email)
    );
    closeDeleteConfirm();
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();

    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    closeAddModal();
  };

  return (
    <div className="flex h-screen bg-zinc-900 text-zinc-200">
      <aside className="w-64 bg-zinc-800 text-white">
        <div className="p-4">
          <h2 className="text-lg font-bold">Dashboard</h2>
          <ul className="mt-4">
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Employees</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Leads</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Inquiries</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Projects</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Feedback</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-6 bg-zinc-900">
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2"
            />
            <button className="bg-blue-600 text-white p-2 rounded-lg ml-2 hover:bg-blue-500">
              Search
            </button>
          </div>
          <div>
            <button
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500"
              onClick={openAddModal}
            >
              Add Employee
            </button>
          </div>
        </header>

        <table className="min-w-full bg-zinc-800 border border-zinc-700 text-zinc-200">
          <thead>
            <tr className="bg-zinc-700">
              <th className="py-2 px-4 border border-zinc-600">Name</th>
              <th className="py-2 px-4 border border-zinc-600">Email</th>
              <th className="py-2 px-4 border border-zinc-600">Contact No</th>
              <th className="py-2 px-4 border border-zinc-600">Position</th>
              <th className="py-2 px-4 border border-zinc-600">Status</th>
              <th className="py-2 px-4 border border-zinc-600">Profile Type</th>
              <th className="py-2 px-4 border border-zinc-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="hover:bg-zinc-700">
                <td className="py-2 px-4 border border-zinc-600">
                  {employee.name}
                </td>
                <td className="py-2 px-4 border border-zinc-600">
                  {employee.email}
                </td>
                <td className="py-2 px-4 border border-zinc-600">
                  {employee.contact}
                </td>
                <td className="py-2 px-4 border border-zinc-600">
                  {employee.position}
                </td>
                <td className="py-2 px-4 border border-zinc-600">
                  {employee.status}
                </td>
                <td className="py-2 px-4 border border-zinc-600">
                  {employee.profileType}
                </td>
                <td className="py-2 px-4 border border-zinc-600">
                  <button
                    className="text-blue-400 mx-1 hover:text-blue-300"
                    onClick={() => openDetailModal(employee)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="text-blue-400 mx-1 hover:text-blue-300"
                    onClick={() => openEditModal(employee)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-400 mx-1 hover:text-red-300"
                    onClick={() => openDeleteConfirm(employee)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isDetailModalOpen && selectedEmployee && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-lg font-bold mb-4">Employee Details</h2>
              <p>
                <strong>Name:</strong> {selectedEmployee.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedEmployee.email}
              </p>
              <p>
                <strong>Contact No:</strong> {selectedEmployee.contact}
              </p>
              <p>
                <strong>Position:</strong> {selectedEmployee.position}
              </p>
              <p>
                <strong>Status:</strong> {selectedEmployee.status}
              </p>
              <p>
                <strong>Profile Type:</strong> {selectedEmployee.profileType}
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-400"
                  onClick={closeDetailModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {isEditModalOpen && editableEmployee && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-lg font-bold mb-4">Edit Employee</h2>
              <form onSubmit={handleEditSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={editableEmployee.name}
                    onChange={handleEditChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={editableEmployee.email}
                    onChange={handleEditChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="contact"
                  >
                    Contact No
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    value={editableEmployee.contact}
                    onChange={handleEditChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="position"
                  >
                    Position
                  </label>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    value={editableEmployee.position}
                    onChange={handleEditChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <input
                    id="status"
                    name="status"
                    type="text"
                    value={editableEmployee.status}
                    onChange={handleEditChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="profileType"
                  >
                    Profile Type
                  </label>
                  <input
                    id="profileType"
                    name="profileType"
                    type="text"
                    value={editableEmployee.profileType}
                    onChange={handleEditChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2 rounded-lg ml-2 hover:bg-red-400"
                    onClick={closeEditModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isDeleteConfirmOpen && employeeToDelete && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
              <p>
                Are you sure you want to delete the employee{" "}
                <strong>{employeeToDelete.name}</strong>?
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500"
                  onClick={handleDeleteConfirm}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-600 text-white p-2 rounded-lg ml-2 hover:bg-gray-500"
                  onClick={closeDeleteConfirm}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {isAddModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-lg font-bold mb-4">Add Employee</h2>
              <form onSubmit={handleAddSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={newEmployee.name}
                    onChange={handleAddChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={newEmployee.email}
                    onChange={handleAddChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="contact"
                  >
                    Contact No
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    value={newEmployee.contact}
                    onChange={handleAddChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="position"
                  >
                    Position
                  </label>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    value={newEmployee.position}
                    onChange={handleAddChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <input
                    id="status"
                    name="status"
                    type="text"
                    value={newEmployee.status}
                    onChange={handleAddChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="profileType"
                  >
                    Profile Type
                  </label>
                  <input
                    id="profileType"
                    name="profileType"
                    type="text"
                    value={newEmployee.profileType}
                    onChange={handleAddChange}
                    className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2 rounded-lg ml-2 hover:bg-red-400"
                    onClick={closeAddModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
