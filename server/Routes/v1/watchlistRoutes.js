const express = require("express");
const watchlistRouter = express.Router();

const {
  addToWatchlist,
  getWatchlist,
  removeFromWatchlist
} = require("../../controllers/watchlistController");

const { authMiddleware } = require("../../middleware/authMiddleware");

// ➕ Add movie to watchlist
watchlistRouter.post("/addToWatchlist", authMiddleware, addToWatchlist);

// 📜 Get user's watchlist
watchlistRouter.get("/getWatchlist", authMiddleware, getWatchlist);

// ❌ Remove movie from watchlist
watchlistRouter.delete("/removeFromWatchlist/:movieId", authMiddleware, removeFromWatchlist);

module.exports = watchlistRouter;
