// src/components/FileUpload.js

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const FileUpload = ({ userId, fileType, onUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Create formData object
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]); // assuming single file upload

      // Make POST request to upload endpoint
      axios
        .post(`/api/upload/${userId}/${fileType}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          onUpload(response.data); // Pass uploaded file info back to parent component
        })
        .catch((error) => {
          console.error("File upload error:", error);
          // Handle error
        });
    },
    [userId, fileType, onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop {fileType} file here, or click to select file</p>
      )}
    </div>
  );
};

export default FileUpload;
