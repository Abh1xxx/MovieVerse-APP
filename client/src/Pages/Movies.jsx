import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import axiosInstance from "../axios/axiosInstance";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/movies/getAllMovie");
      setMovies(response.data.movies);
      console.log("✅ Fetched Movies:", response.data.movies);
    } catch (error) {
      console.error("❌ Error fetching movies:", error.message);
    }
  };

  const handleViewDetails = (movieId) => {
    navigate(`/movie-details/${movieId}`);
  };

  const handleAddToWatchlist = async (movieId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("⚠️ Please login to add movies to your watchlist.");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "/api/v1/watchList/addToWatchlist",
        { movieId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("✅ " + response.data.message);
    } catch (error) {
      console.error("❌ Error adding to watchlist:", error.response?.data?.message || error.message);
      alert("❌ " + (error.response?.data?.message || "Failed to add to watchlist"));
    }
  };

  // 🔍 Filtered Movies
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">🎬 Browse Movies</h2>

      {/* 🔍 Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search movies by title..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredMovies.length === 0 ? (
        <p className="text-gray-400">No movies found.</p>
      ) : (
        <div className="flex flex-col gap-8">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onViewDetails={handleViewDetails}
              onAddToWatchlist={handleAddToWatchlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
