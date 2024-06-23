// src/components/Dashboard.js

import React from "react";
import projects from "../data/projects";
import ProjectDetails from "./ProjectDetails";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-600 p-5">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-5xl">
        <h1 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
          Project Dashboard
        </h1>
        {projects.map((project) => (
          <ProjectDetails key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
