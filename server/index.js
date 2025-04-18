const express= require("express");
const { dbConnection } = require("./config/dbConnection");
require('dotenv').config()   //for .env file
// const userRouter = require("./Routes/userRoutes");
const apiRouter = require("./Routes");
const app= express()
const cors=require('cors')



// Middleware
app.use(express.json()); // To parse JSON body
app.use(cors({
    orgin:process.env.FRONTEND_URL
}))


// Connect to database
dbConnection()


// Health Check Route
app.get("/", (req, res) => {
    console.log("💡 Health check hit");
    res.send("✅ Server is working correctly!");
});

// API Routes
app.use('/api', apiRouter);
console.log("📦 Routes loaded under /api");


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
});