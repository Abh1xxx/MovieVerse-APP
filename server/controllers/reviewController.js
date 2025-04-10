const reviewModel = require('../model/reviewModel');
const movieModel = require('../model/movieModel');

// ➕ Add review + rating
// @route   POST /api/v1/review/:movieId
// @access  Private
const addReview = async (req, res, next) => {
    try {
        console.log("🎯 addReview controller triggered");

        const { comment, rating } = req.body;
        const movieId = req.params.movieId;
        const userId = req.user;

        console.log("🆔 Movie ID:", movieId);
        console.log("👤 User ID:", userId);
        console.log("💬 Comment:", comment);
        console.log("⭐ Rating:", rating);

        // Check if movie exists
        const movie = await movieModel.findById(movieId);
        if (!movie) {
            console.log("❌ Movie not found");
            return res.status(404).json({ success: false, message: "Movie not found" });
        }

        // Create review
        const newReview = await reviewModel.create({ userId, movieId, comment, rating });
        console.log("✅ Review created:", newReview._id);

        res.status(201).json({ success: true, data: newReview });

    } catch (error) {
        console.error("❌ Error in addReview:", error.message);
        next(error);
    }
};

// 🧾 Get all reviews for a movie
// @route   GET /api/v1/review/:movieId
// @access  Public
const getReviewsByMovie = async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        console.log("🔍 Fetching reviews for movie:", movieId);

        // Get reviews & populate user name and profile pic
        const reviews = await reviewModel.find({ movieId }).populate('userId', 'name profilePic');
        console.log(`✅ Found ${reviews.length} reviews`);

        res.status(200).json({ success: true, count: reviews.length, data: reviews });
    } catch (error) {
        console.error("❌ Error in getReviewsByMovie:", error.message);
        next(error);
    }
};

// ✏️ Update own review
// @route   PUT /api/v1/review/:reviewId
// @access  Private
const updateReview = async (req, res, next) => {
    try {
        const { comment, rating } = req.body;
        const reviewId = req.params.reviewId;
        const userId = req.user;

        console.log("✏️ Updating review:", reviewId);

        const review = await reviewModel.findById(reviewId);
        if (!review) {
            console.log("❌ Review not found");
            return res.status(404).json({ success: false, message: "Review not found" });
        }

        // Check ownership
        if (review.userId.toString() !== userId) {
            console.log("⛔ Unauthorized update attempt");
            return res.status(403).json({ success: false, message: "Not authorized to update this review" });
        }

        // Update fields if provided
        review.comment = comment || review.comment;
        review.rating = rating || review.rating;

        await review.save();
        console.log("✅ Review updated");

        res.status(200).json({ success: true, message: "Review updated", data: review });

    } catch (error) {
        console.error("❌ Error in updateReview:", error.message);
        next(error);
    }
};

// ❌ Delete own review
// @route   DELETE /api/v1/review/:reviewId
// @access  Private
const deleteReview = async (req, res, next) => {
    try {
        const reviewId = req.params.reviewId;
        const userId = req.user;

        console.log("🗑️ Deleting review:", reviewId);

        const review = await reviewModel.findById(reviewId);
        if (!review) {
            console.log("❌ Review not found");
            return res.status(404).json({ success: false, message: "Review not found" });
        }

        // Check ownership
        if (review.userId.toString() !== userId) {
            console.log("⛔ Unauthorized delete attempt");
            return res.status(403).json({ success: false, message: "Not authorized to delete this review" });
        }

        await reviewModel.findByIdAndDelete(reviewId);
        console.log("✅ Review deleted");

        res.status(200).json({ success: true, message: "Review deleted" });

    } catch (error) {
        console.error("❌ Error in deleteReview:", error.message);
        next(error);
    }
};

module.exports = {
    addReview,
    getReviewsByMovie,
    updateReview,
    deleteReview
};
