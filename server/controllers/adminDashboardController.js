const userModel = require('../model/userModel');
const movieModel = require('../model/movieModel');
const reviewModel = require('../model/reviewModel');

const getDashboardStats = async (req, res, next) => {
  try {
    console.log("📊 Fetching dashboard data...");

    const totalUsers = await userModel.countDocuments();
    console.log("👥 Total Users:", totalUsers);

    const totalMovies = await movieModel.countDocuments();
    console.log("🎬 Total Movies:", totalMovies);

    const totalReviews = await reviewModel.countDocuments();
    console.log("📝 Total Reviews:", totalReviews);

    res.status(200).json({
      success: true,
      message: "✅ Dashboard data fetched successfully",
      data: {
        totalUsers,
        totalMovies,
        totalReviews,
      },
    });
  } catch (error) {
    console.error("❌ Error fetching dashboard data:", error.message);
    next(error);
  }
};

module.exports = { getDashboardStats };
