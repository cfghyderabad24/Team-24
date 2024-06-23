// src/components/CryFrontlineWorker.js

import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "./bg-image.jpg"; // Import the background image

const CryFrontlineWorker = () => {
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log("Files to be uploaded:", files);
    // Add logic to handle file upload
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
          CRY Frontline Worker Document Upload
        </h1>
        <input
          type="file"
          onChange={handleFileUpload}
          multiple
          className="mb-4"
        />
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default CryFrontlineWorker;
