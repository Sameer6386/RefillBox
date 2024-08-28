"use client";
import { useState } from "react";
import { FaHome, FaUsers, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-30 w-64 bg-gray-800 text-white flex flex-col  p-6 transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <AiFillDashboard size={36} className="text-green-400" />
            <span className="text-2xl font-bold hidden lg:block">
              Dashboard
            </span>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white lg:hidden"
            aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center text-lg p-2 rounded-md transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Home"
              >
                <FaHome size={24} className="mr-4" />
                <span className="hidden lg:block">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-lg p-2 rounded-md transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Employees"
              >
                <FaUsers size={24} className="mr-4" />
                <span className="hidden lg:block">Employees</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-lg p-2 rounded-md transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Settings"
              >
                <FaCog size={24} className="mr-4" />
                <span className="hidden lg:block">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 text-white lg:hidden"
        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
}
