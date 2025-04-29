const { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUser } = require('../../controllers/userControllers');
const { authMiddleware } = require('../../Middleware/authMiddleware');
const { fieldsValidation } = require('../../Middleware/fieldsValidation');
const upload = require('../../Middleware/multer');

const userRouter=require('express').Router()

userRouter.post("/register",fieldsValidation(["name", "email", "password"]), registerUser);
userRouter.post("/login",fieldsValidation(["email", "password"]), loginUser);
userRouter.get("/profile", authMiddleware, getUserProfile);
userRouter.patch("/update", authMiddleware, upload.single("profilePic"),updateUserProfile);
userRouter.delete("/delete", authMiddleware, deleteUser);

module.exports = userRouter
