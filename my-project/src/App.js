// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/Home";
import LoginPage from "./components/login";
import ManagerDashboard from "./components/ManagerDashboard";
import ProjectADetails from "./components/ProjectADetails";
import ProjectBDetails from "./components/ProjectBDetails";

// Dummy authentication function
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? <ManagerDashboard /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/project-a"
          element={
            isAuthenticated() ? <ProjectADetails /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/project-b"
          element={
            isAuthenticated() ? <ProjectBDetails /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
