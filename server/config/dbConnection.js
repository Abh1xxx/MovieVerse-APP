const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Database Connection successful");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    throw new Error("MongoDB connection failed"); // ⛔ force Vercel to fail cleanly
  }
};

module.exports = { dbConnection };
