import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  // Fetch movies from backend API
  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:4999/api/v1/movies/getAllMovie");
      setMovies(response.data.movies);
      console.log("✅ Fetched Movies:", response.data.movies);
    } catch (error) {
      console.error("❌ Error fetching movies:", error.message);
    }
  };

  return (
    <div className="text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">🎬 Browse Movies</h2>

      {movies.length === 0 ? (
        <p className="text-gray-400">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {movie.title}
                </h3>
                <p className="text-gray-400">Genre: {movie.genre.join(", ")}</p>
                <p className="text-gray-400">
                  Year: {new Date(movie.releaseDate).getFullYear()}
                </p>
                <button className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
