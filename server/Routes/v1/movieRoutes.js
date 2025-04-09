const { createMovie, getAllMovies, getMovieById, deleteMovie, updateMovie } = require('../../controllers/movieController');
const upload = require('../../Middleware/multer');
const { fieldsValidation } = require('../../Middleware/fieldsValidation');
const checkAdminAuth = require('../../Middleware/adminAuthMW');


const movieRouter = require('express').Router();

// 👇 Middleware Stack: Admin Auth ➝ Upload Image ➝ Validate Fields ➝ Controller
movieRouter.post(   //ONLY FOR ADMIN
  "/create",
  checkAdminAuth,
  upload.single("image"),
  fieldsValidation(["title", "description", "genre", "releaseDate"]),
  createMovie
);

// 📃 Get all movies (Public)
movieRouter.get("/getAllMovie", getAllMovies);

// 🎬 Get a single movie by ID (Public)
movieRouter.get("/getMovieById/:id", getMovieById);

// ✏️ Update a movie (Protected - Admin Only)
movieRouter.put(
    "/update/:id",
    checkAdminAuth,
    upload.single("image"),
    updateMovie
  );

  // 🗑️ Delete a movie (Protected - Admin Only)
movieRouter.delete(
    "/delete/:id",
    checkAdminAuth,
    deleteMovie
  );

module.exports = movieRouter;
