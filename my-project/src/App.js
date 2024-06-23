// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/Home";
import LoginPage from "./components/login"; // Corrected import path
import ManagerDashboard from "./components/ManagerDashboard";
import ProjectADetails from "./components/ProjectADetails";
import ProjectBDetails from "./components/ProjectBDetails";
import NGODashboard from "./components/NgoPartner"; // Corrected import path
import FrontlineWorkerDashboard from "./components/CryFrontlineWorker"; // Corrected import path

// Dummy authentication function
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// Dummy role determination based on stored role
const getUserRole = () => {
  const role = localStorage.getItem("role");
  return role || "guest"; // Default to guest if role is not found
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/manager/dashboard"
          element={
            isAuthenticated() ? (
              getUserRole() === "manager" ? (
                <ManagerDashboard />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/ngo/dashboard"
          element={
            isAuthenticated() ? (
              getUserRole() === "ngo" ? (
                <NGODashboard />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/frontline/dashboard"
          element={
            isAuthenticated() ? (
              getUserRole() === "frontline" ? (
                <FrontlineWorkerDashboard />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/project-a"
          element={
            isAuthenticated() ? (
              getUserRole() === "manager" ? (
                <ProjectADetails />
              ) : getUserRole() === "ngo" || getUserRole() === "frontline" ? (
                <Navigate to={`/${getUserRole()}/dashboard`} />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/project-b"
          element={
            isAuthenticated() ? (
              getUserRole() === "manager" ? (
                <ProjectBDetails />
              ) : getUserRole() === "ngo" || getUserRole() === "frontline" ? (
                <Navigate to={`/${getUserRole()}/dashboard`} />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
