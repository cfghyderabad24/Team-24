// src/components/FrontlineWorkerPage.js

import React, { useState } from "react";
import FileUpload from "./FileUpload";

const FrontlineWorkerPage = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = (fileInfo) => {
    setUploadedFile(fileInfo); // Store uploaded file info if needed
    // Implement logic to send fileInfo to manager for approval
  };

  return (
    <div className="container">
      <h1>Frontline Worker Page</h1>
      <FileUpload userId={2} fileType="proof" onUpload={handleUpload} />
      {/* Add more FileUpload components as needed */}
    </div>
  );
};

export default FrontlineWorkerPage;
