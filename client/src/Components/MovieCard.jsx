// Row wise card

// import React from "react";

// const MovieCard = ({ movie, onViewDetails, onAddToWatchlist }) => {
//   return (
//     <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
//       <img
//         src={movie.posterUrl}
//         alt={movie.title}
//         className="w-full h-72 object-contain md:h-80 lg:h-96"
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-cyan-300 mb-2">{movie.title}</h3>
        
//         <p className="text-gray-400 mb-1">🎭 Genre: {movie.genre.join(", ")}</p>
//         <p className="text-gray-400 mb-1">📅 Year: {new Date(movie.releaseDate).getFullYear()}</p>
//         <p className="text-gray-400 mb-1">⭐ Rating: {movie.rating || "N/A"}</p>
//         <p className="text-gray-400 text-sm mb-3">
//           {movie.description.length > 100 
//             ? movie.description.slice(0, 100) + "..."
//             : movie.description}
//         </p>

//         <div className="space-y-2">
//           <button 
//             onClick={() => onViewDetails(movie._id)}
//             className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded transition duration-300"
//           >
//             View Details
//           </button>
//           <button 
//             onClick={() => onAddToWatchlist(movie._id)}
//             className="w-full bg-cyan-700 hover:bg-cyan-800 text-white py-2 rounded transition duration-300"
//           >
//             + Add to Watchlist
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;



import React from "react";

const MovieCard = ({ movie, onViewDetails, onAddToWatchlist }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] transition duration-300">
      {/* Image */}
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full sm:w-48 h-64 sm:h-auto object-scale-down"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-2xl font-semibold text-cyan-300 mb-2">{movie.title}</h3>
          <p className="text-gray-400 mb-1">🎭 Genre: {movie.genre.join(", ")}</p>
          <p className="text-gray-400 mb-1">📅 Year: {new Date(movie.releaseDate).getFullYear()}</p>
          <p className="text-gray-400 mb-1">⭐ Rating: {movie.averageRating || "N/A"}</p>
          <p className="text-gray-400 text-sm mt-2">
            {movie.description.length > 150
              ? movie.description.slice(0, 150) + "..."
              : movie.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-4">
          <button
            onClick={() => onViewDetails(movie._id)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-base font-semibold transition duration-300"
          >
            View Details
          </button>
          <button
            onClick={() => onAddToWatchlist(movie._id)}
            className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-2 rounded-full text-base font-semibold transition duration-300"
          >
            Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
