// src/components/Ngo.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "./bg-image.jpg"; // Replace with your background image

const Ngo = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log("Files to be uploaded:", files);
    // Simulate file upload logic
    if (files.length > 0) {
      // Simulate successful upload
      setSuccessMessage("Files uploaded successfully!");
      setErrorMessage(""); // Clear any previous error message
    } else {
      setErrorMessage("Please select a file to upload.");
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  const handleUploadClick = () => {
    // Reset messages when Upload button is clicked
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center p-10 rounded-lg shadow-lg max-w-xl bg-white">
        <h1 className="text-3xl font-bold text-yellow-600 mb-4">
          NGO Document Upload
        </h1>
        <input
          type="file"
          onChange={handleFileUpload}
          multiple
          className="mb-4"
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}
        <button
          onClick={() => {
            handleUploadClick();
            navigate("/");
          }}
          className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Ngo;
