// src/components/Home.js

import React from "react";
import { Link } from "react-router-dom";
import download from "./hello.jpg"; // Ensure the correct path to your image

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-400">
      <div className="relative flex items-center justify-center max-w-7xl mb-8">
        {/* Sections on the left */}
        <div className="flex flex-col items-center space-y-4 mr-4">
          <div
            className="block p-6 bg-white rounded-lg shadow-lg text-center hover:bg-yellow-100 transition-colors"
            style={{ width: "400px" }}
          >
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
              Education
            </h2>
            <p className="text-gray-700">
              Ensuring access to quality education for every child.
            </p>
          </div>

          <div
            className="block p-6 bg-white rounded-lg shadow-lg text-center hover:bg-yellow-100 transition-colors"
            style={{ width: "400px" }}
          >
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
              Safety and Protection
            </h2>
            <p className="text-gray-700">
              Providing a safe environment for children to grow and thrive.
            </p>
          </div>
        </div>

        {/* Central content */}
        <div className="w-10/12 lg:w-7/12 text-center p-10 rounded-lg shadow-lg bg-yellow-50 mx-4">
          <div className="relative mb-8">
            <img
              src={download}
              alt="CRY Welcome"
              className="w-100 h-72 object-cover rounded-full shadow-lg"
            />
            <div className="absolute bg-opacity-60 backdrop-blur-sm rounded-full"></div>
          </div>
          <h1 className="text-3xl font-bold text-yellow-600 mb-4">
            Welcome to CRY - Child Rights and You
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Join us in our mission to ensure that every child has the right to a
            happy, healthy, and creative childhood.
          </p>
          <Link to="/login">
            <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105">
              LOGIN
            </button>
          </Link>
        </div>

        {/* Sections on the right */}
        <div className="flex flex-col items-center space-y-4 ml-4">
          <div
            className="block p-6 bg-white rounded-lg shadow-lg text-center hover:bg-yellow-100 transition-colors"
            style={{ width: "400px" }}
          >
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
              Health and Nutrition
            </h2>
            <p className="text-gray-700">
              Promoting health and nutrition for a better future.
            </p>
          </div>

          <div
            className="block p-6 bg-white rounded-lg shadow-lg text-center hover:bg-yellow-100 transition-colors"
            style={{ width: "400px" }}
          >
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
              Child Participation
            </h2>
            <p className="text-gray-700">
              Empowering children to participate in decisions that affect them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
