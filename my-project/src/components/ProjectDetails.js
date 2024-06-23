// src/components/ProjectDetails.js

import React, { useState } from "react";

const ProjectDetails = ({ project }) => {
  const [status, setStatus] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setModalContent(newStatus === "approved" ? "Disburse Funds" : "✗");
    // Here you can add logic to update the status in the backend or handle other actions
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-5xl flex flex-col md:flex-row justify-between mb-6">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-yellow-600 mb-4 text-center">
          {project.name} Details
        </h1>
        <p>
          <strong>CRY Frontliner:</strong> {project.frontliner}
        </p>
        <p>
          <strong>Mobile Number:</strong> {project.mobileNumber}
        </p>
        <div className="mt-4">
          <p>
            <strong>Documents Uploaded:</strong>
          </p>
          <ul className="list-disc ml-5">
            {project.documents.map((document, index) => (
              <li key={index}>{document}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <h1 className="text-2xl font-bold text-yellow-600 mb-4 text-center">
          Application Status
        </h1>
        <div className="mt-4">
          <label
            htmlFor={`application-status-${project.id}`}
            className="block mb-2"
          >
            Application Status:
          </label>
          <select
            id={`application-status-${project.id}`}
            name={`application-status-${project.id}`}
            className="w-full p-2 border rounded"
            onChange={handleStatusChange}
          >
            <option value="">Select status...</option>
            <option value="approved">Approved</option>
            <option value="not-approved">Not Approved</option>
          </select>
        </div>
        {status && (
          <div
            className={`modal-content ${
              status === "not-approved" ? "text-red-600" : "text-green-600"
            } mt-4 text-2xl text-center`}
          >
            {modalContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
