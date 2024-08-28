"use client";
import { useState } from "react";
import EmployeeTable from "../../../models/EmployeeTable";
import Modal from "../../../models/Modal";
import EditModal from "../../../models/EditModel";
import Delete from "../../../models/Delete";
import AddEmployeeModal from "../../../models/AddEmployee";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function Dashboard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [addEmployeeModalVisible, setAddEmployeeModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      department: "Engineering",
    },
    { id: 2, name: "Jane Smith", position: "Designer", department: "Product" },
    { id: 3, name: "Michael Brown", position: "Manager", department: "Sales" },
  ]);

  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setModalVisible(false);
  };

  const openEditModal = (employee) => {
    setSelectedEmployee(employee);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setSelectedEmployee(null);
    setEditModalVisible(false);
  };

  const openDeleteModal = (employee) => {
    setSelectedEmployee(employee);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setSelectedEmployee(null);
    setDeleteModalVisible(false);
  };

  const openAddEmployeeModal = () => {
    setAddEmployeeModalVisible(true);
  };

  const closeAddEmployeeModal = () => {
    setAddEmployeeModalVisible(false);
  };

  const saveEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    closeEditModal();
  };

  const deleteEmployee = (employeeId) => {
    setEmployees(employees.filter((emp) => emp.id !== employeeId));
    closeDeleteModal();
  };

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
    closeAddEmployeeModal();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-gray-100 py-20 dark:bg-gray-800">
      {/* <Sidebar /> */}

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-lg font-semibold text-gray-400">
            Admin Dashboard
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full p-2 pl-10 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          {/* Add Employee Button */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={openAddEmployeeModal}
          >
            <FaPlus size={16} className="inline-block mr-2" />
            Add Employee
          </button>
        </div>

        {/* Employee Table */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <EmployeeTable
            employees={employees}
            onView={openModal}
            onEdit={openEditModal}
            onDelete={openDeleteModal}
          />
        </div>

        {/* Modals */}
        {modalVisible && (
          <Modal employee={selectedEmployee} onClose={closeModal} />
        )}
        {editModalVisible && (
          <EditModal
            employee={selectedEmployee}
            onSave={saveEmployee}
            onCancel={closeEditModal}
          />
        )}
        {deleteModalVisible && (
          <Delete
            employee={selectedEmployee}
            onConfirm={deleteEmployee}
            onCancel={closeDeleteModal}
          />
        )}
        {addEmployeeModalVisible && (
          <AddEmployeeModal
            onAdd={addEmployee}
            onCancel={closeAddEmployeeModal}
          />
        )}
      </div>
    </div>
  );
}
