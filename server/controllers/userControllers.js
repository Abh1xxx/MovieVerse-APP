const bcrypt=require('bcrypt')

const createToken = require('../Utilities/loginToken');
const userModel = require("../model/userModel");
const {hashPassword,comparePassword} = require('../Utilities/passwordUtilities');
// Register a new user
const registerUser = async (req, res,next) => {
    try {
        console.log("🟢 Register User API hit");

        const { name, email, password } = req.body;
        console.log(`📩 Received Data -> Name: ${name}, Email: ${email}`);

        // Check if user already exists
        console.log("🔍 Checking if user already exists...");
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            console.log("❌ User already exists.");
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword=await hashPassword(password)

        // Create new user
        console.log("🆕 Creating new user...");
        const newUser = new userModel ({
            name,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        console.log("✅ User registered successfully:", savedUser);

        res.status(201).json({ success: true, message: "User registered successfully", savedUser });
    } catch (error) {
        console.error("❌ Error in registerUser:", error);
        next(error);
          }
};


// Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("🔐 Login attempt for email:", email);

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            console.log("❌ User not found with email:", email);
            return res.status(404).json({ message: "User not found" });
        }

        // Compare password
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            console.log("❌ Incorrect password for email:", email);
            return res.status(400).json({ message: "Invalid credentials" });
        }

        
        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //     console.log("❌ Incorrect password for email:", email);
        //     return res.status(400).json({ message: "Invalid credentials" });
        // }

        // Convert Mongoose document to plain object & remove password
        const userObject = user.toObject();
        delete userObject.password;

        // JWT token
        const token = createToken(user._id);

        console.log("✅ Login successful for user:", user.name, "| ID:", user._id);

        res.status(200).json({ 
            success: true,
            message: "Login successful", 
            token, 
            user: userObject 
        });
    }catch (error) {
        console.error("🚨 Login error:", error);
        next(error);
    }
};



// Get user profile

// Controller function to get user profile details
const getUserProfile = async (req, res) => {
    try {
        console.log("🔹 getUserProfile Controller Invoked"); // Log controller initiation
        console.log("📌 Request User ID:", req.user); // Log the user ID from the request

        // Fetch the user from the database using the ID stored in req.user (extracted from token)
        const user = await userModel.findById(req.user).select("-password"); // Exclude the password field

        // If no user is found, return a 404 response
        if (!user) {
            console.log("❌ User Not Found");
            return res.status(404).json({ message: "User not found" });
        }

        console.log("✅ User Profile Retrieved:", user.name, "| ID:", user._id); // Log user details
        res.status(200).json(user); // Send user data as JSON response

    } catch (error) {
        console.error("❌ Error in getUserProfile:", error.message);
        next(error);
    }
};


// Update user profile
const updateUserProfile = async (req, res) => {
    try {
        console.log("🔹 updateUser Controller Invoked"); // Log when the function is called
        console.log("📌 Request User ID:", req.user); // Log the user ID from the request
        console.log("✏️ Update Data:", req.body); // Log the update data received

        // Find the user by ID and update the provided fields
        const updatedUser = await userModel.findByIdAndUpdate(
            req.user, // User ID extracted from token
            { $set: req.body }, // Update only the provided fields
            { new: true, runValidators: true, select: "-password" } // Return updated user, apply validators, exclude password
        );

        // If no user is found, return a 404 response
        if (!updatedUser) {
            console.log("❌ User Not Found");
            return res.status(404).json({ message: "User not found" });
        }

        console.log("✅ User Profile Updated:", updatedUser.name, "| ID:", updatedUser._id); // Log updated user details
        res.status(200).json({ message: "User updated successfully", user: updatedUser }); // Send success response

    } catch (error) {
        console.error("❌ Error in updateUserProfile:", error.message);
        next(error);
    }
};

// Delete user
const deleteUser = async (req, res) => {
    try {
        console.log(`🔹 Delete request received for user ID: ${req.user}`);

        // Find the user by ID and delete
        const deletedUser = await userModel.findByIdAndDelete(req.user);

        // If user not found, return error
        if (!deletedUser) {
            console.log(`❌ User with ID ${req.user} not found.`);
            return res.status(404).json({ status: false, message: "User not found" });
        }

        console.log(`✅ User with ID ${req.user} deleted successfully.`);
        res.status(200).json({
            status: true,
            message: "User account deleted successfully",
        });
    } catch (error) {
        console.error("🚨 Error in deleteUser:", error);
        next(error);
    }
};


module.exports={registerUser,loginUser,getUserProfile,updateUserProfile,deleteUser}