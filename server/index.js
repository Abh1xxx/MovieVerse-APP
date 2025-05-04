// const express= require("express");
// const { dbConnection } = require("./config/dbConnection");
// require('dotenv').config()   //for .env file
// // const userRouter = require("./Routes/userRoutes");
// const apiRouter = require("./Routes");
// const app= express()
// const cors=require('cors')
// const path = require("path");
// const serverless = require("serverless-http"); // ✅ Add this

// // Middleware
// app.use(express.json()); // To parse JSON body
// app.use(cors({
//     // origin:process.env.FRONTEND_URL
//     origin: "*"
// }))


// // Connect to database
// dbConnection()


// // Health Check Route
// app.get("/", (req, res) => {
//     console.log("💡 Health check hit");
//     res.send("✅ Server is working correctly!");
// });

// // API Routes
// app.use('/api', apiRouter);
// console.log("📦 Routes loaded under /api");


// // Global Error Handler Middleware
// app.use((error, req, res, next) => {
//     const statusCode = error.statusCode || 500;
//     const errormessage = error.message || "Internal Server Error";
//     console.error("🔥 Global Error Handler:", errormessage);
//     res.status(statusCode).json({ error: errormessage });
// });


// // // Start the Server
// // 🔥 REMOVE app.listen() — it will crash your Vercel Serverless Function.
// // app.listen(process.env.PORT, (error) => {
// //     if (error) {
// //         console.error("❌ Server error: ", error);
// //     } else {
// //         console.log("--------------------------------------------------");
// //         console.log(`🚀 Server is running --> http://localhost:${process.env.PORT}`);
// //         console.log("--------------------------------------------------");
// //     }
// // });

// module.exports = app;
// module.exports.handler = serverless(app);



// const express = require("express");
// const app = express();
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db"); // your DB connection
// const movieRoutes = require("./routes/v1/movieRoutes"); // example route
// // Add your other imports (userRoutes, reviewRoutes, etc.)

// dotenv.config();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Connect to MongoDB
// connectDB();

// // Your routes
// app.use("/api/v1/movies", movieRoutes);
// // Add other routes here (user, review, etc.)

// // Optional: root route
// app.get("/", (req, res) => {
//   res.send("🎬 Movie API running successfully");
// });

// // ❗️ Required: Export the app wrapped in a handler for Vercel
// module.exports = app;





// const express = require("express");
// const cors = require("cors");
// const serverless = require("serverless-http"); // ✅ Required for Vercel deployment
// const { dbConnection } = require("../config/dbConnection");
// const apiRouter = require("../Routes");
// require('dotenv').config(); // For .env file

// const app = express();

// // Middleware
// app.use(express.json()); // To parse JSON body
// app.use(cors({
//     // origin: process.env.FRONTEND_URL  // Optionally configure your frontend URL here
//     origin: "*", // Allow all origins
// }));

// // Connect to database
// dbConnection();
// // app.use(async (req, res, next) => {
// //     try {
// //       await dbConnection();
// //       next();
// //     } catch (error) {
// //       next(error);
// //     }
// //   });
  

// // Health Check Route
// app.get("/", (req, res) => {
//     console.log("💡 Health check hit");
//     res.send("✅ Server is working correctly!");
// });

// // API Routes
// app.use('/api', apiRouter);
// console.log("📦 Routes loaded under /api");

// // Global Error Handler Middleware
// app.use((error, req, res, next) => {
//     const statusCode = error.statusCode || 500;
//     const errormessage = error.message || "Internal Server Error";
//     console.error("🔥 Global Error Handler:", errormessage);
//     res.status(statusCode).json({ error: errormessage });
// });

// // Wrap the app for serverless functions
// module.exports = serverless(app); 





const express= require("express");
const { dbConnection } = require("./config/dbConnection");
require('dotenv').config()   //for .env file
// const userRouter = require("./Routes/userRoutes");
const apiRouter = require("./Routes");
const app= express()
const cors=require('cors')


const path = require("path");

// Middleware
app.use(express.json()); // To parse JSON body
app.use(cors({
    origin:process.env.FRONTEND_URL 
    // origin:"*"
}))


// Connect to database
dbConnection()

// Health Check Route
app.get("/", (req, res) => {
 
  console.log("💡 Health check hit");

  res.json("✅ Server is working correctly!");

});



// API Routes

app.use('/api', apiRouter);

// Global Error Handler Middleware

app.use((error, req, res, next) => {

  const statusCode = error.statusCode || 500;

  const errormessage = error.message || "Internal Server Error";

  console.error("🔥 Global Error Handler:", errormessage);

  res.status(statusCode).json({ error: errormessage });

});





// Start the Server

app.listen(process.env.PORT, (error) => {

  if (error) {

      console.error("❌ Server error: ", error);

  } else {

      console.log("--------------------------------------------------");

      console.log(`🚀 Server is running --> http://localhost:${process.env.PORT}`);

      console.log("--------------------------------------------------");

  }
})