import React from "react";
import { Link } from "react-router-dom";
import marvelGif from "../assets/marvel gifffffff.gif";

function LandingPage() {
  const isAuthenticated = localStorage.getItem("token");  // Check if user is authenticated

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-8">
      {/* Background GIF */}
      <img 
        src={marvelGif} 
        alt="Movie Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wider text-cyan-400">
          Welcome to MovieVerse
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Discover, rate, and track your favorite movies — join the futuristic movie world you deserve.
        </p>

        <div className="flex space-x-6 justify-center">
          {isAuthenticated ? (
            <Link 
              to="/movies" 
              className="px-6 py-3 bg-cyan-500 text-gray-900 rounded-lg text-lg font-semibold hover:bg-cyan-400 transition duration-300"
            >
              Explore Movies
            </Link>
          ) : (
            <Link 
              to="/register" 
              className="px-6 py-3 bg-cyan-500 text-gray-900 rounded-lg text-lg font-semibold hover:bg-cyan-400 transition duration-300"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
