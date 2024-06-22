// src/components/ManagerDashboard.js
import React from "react";
import { Link } from "react-router-dom";

const ManagerDashboard = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-600 p-5">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-5xl">
        <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
          Manager Dashboard
        </h1>
        <div className="flex flex-wrap justify-around">
          <Link
            to="/project-a"
            className="bg-gray-200 rounded-lg p-5 m-2 w-1/3 text-center transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-lg font-medium text-gray-800">Project A</h3>
          </Link>
          <Link
            to="/project-b"
            className="bg-gray-200 rounded-lg p-5 m-2 w-1/3 text-center transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-lg font-medium text-gray-800">Project B</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
