const movieModel = require("../model/movieModel");
const reviewModel = require("../model/reviewModel");

const updateMovieAverageRating = async (movieId) => {
    const reviews = await reviewModel.find({ movieId });
  
    if (reviews.length === 0) {
      await movieModel.findByIdAndUpdate(movieId, { averageRating: 0 });
      return;
    }
  
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
     // ⭐ Round to one decimal point
    // const roundedRating = Math.round(averageRating * 10) / 10;

    await movieModel.findByIdAndUpdate(movieId, { averageRating });
  };
  
module.exports={updateMovieAverageRating}