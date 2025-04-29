const express = require('express');
const reviewRouter = express.Router();

const { authMiddleware } = require('../../middleware/authMiddleware');
const { fieldsValidation } = require('../../middleware/fieldsValidation');
const {
  addReview,
  getReviewsByMovie,
  updateReview,
  deleteReview,
  getReviewsByUser
} = require('../../controllers/reviewController');

// ➕ Add review + rating
reviewRouter.post(
  '/addReview/:movieId',
  authMiddleware,
  fieldsValidation(['comment', 'rating']),
  addReview
);

// 🧾 Get all reviews for a movie
reviewRouter.get('/getReviewsByMovie/:movieId', getReviewsByMovie);

// ✏️ Update own review
reviewRouter.put(
  '/updateReview/:reviewId',
  authMiddleware,
  fieldsValidation(['comment', 'rating']),
  updateReview
);

// ❌ Delete own review
reviewRouter.delete('/deleteReview/:reviewId', authMiddleware, deleteReview);


reviewRouter.get('/getAllUserRiview',authMiddleware,getReviewsByUser)

module.exports = reviewRouter;
