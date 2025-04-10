const jwt = require('jsonwebtoken'); // Importing JWT for token verification
const userModel = require('../model/userModel'); // Importing user model to check user existence

const authMiddleware = async (req, res, next) => {
    try {
        console.log("🔹 Auth Middleware Invoked"); // Log middleware initiation

        // Extracting the Authorization header from the request
        
        const authHeader = req.headers.authorization;
        // console.log("📌 Authorization Header:", authHeader);
        // console.log("authHeader",authHeader);

        // Checking if the authorization header exists and extracting the token
        const authToken = authHeader && authHeader.split(" ")[1];
        // console.log("🔑 Extracted Token:", authToken);

        // If no token is provided, return an error response
        if (!authToken) {
            console.log("❌ No Auth Token Found");
            return res.json({ status: false, message: "No auth token" });
        }

        // Decoding and verifying the token using the secret key
        const decoded = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
        // console.log("✅ Decoded Token Data:", decoded);

        // Checking if the user exists in the database using the decoded token ID
        const user = await userModel.findOne({ _id: decoded.id });
        if (!user) {
            console.log("❌ User Not Found in Database");
            return res.json({ status: false, message: "User not Found" });
        }

        // Attaching the decoded user ID to the request object for further use
        req.user = decoded.id; // 'decoded' contains the token data, including user ID and role
        req.userRole = user.role;
        console.log("✅ User Authenticated:", user.name, "| ID:", user._id);

        next(); // Proceed to the next middleware or controller
    } catch (error) {
        console.error("❌ Authentication Error:", error.message);
        return res.json({ loginfail: true, status: false, message: "Please Login" });
    }
};

module.exports={authMiddleware}