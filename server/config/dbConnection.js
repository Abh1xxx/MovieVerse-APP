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

// const mongoose = require('mongoose');

// let isConnected = false;

// const dbConnection = async () => {
//   if (isConnected) {
//     console.log("✅ Reusing existing DB connection");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       connectTimeoutMS: 10000, // Timeout after 10 seconds
//     });
//     isConnected = true;
//     console.log("✅ Database Connection successful");
//   } catch (error) {
//     console.error("❌ Database connection failed:", error.message);
//     throw new Error("MongoDB connection failed");
//   }
// };

// module.exports = { dbConnection };
