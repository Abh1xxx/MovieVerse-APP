import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("👋 Logged out successfully!");
    navigate("/login");
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-widest text-cyan-400 cursor-pointer" onClick={() => navigate("/")}>
        MovieVerse
      </h1>

      <nav className="space-x-6 text-lg">
        <Link to="/" className="hover:text-cyan-300 transition duration-300">Home</Link>
        <Link to="/User-Home" className="hover:text-cyan-300 transition duration-300">Movies</Link>

        {token ? (
          <>
            <Link to="/watchlist" className="hover:text-cyan-300 transition duration-300">Watchlist</Link>
            <Link to="/profile" className="hover:text-cyan-300 transition duration-300">Profile</Link>
            <button
              onClick={handleLogout}
              className="ml-4 bg-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-cyan-300 transition duration-300">Login</Link>
            <Link to="/register" className="hover:text-cyan-300 transition duration-300">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
