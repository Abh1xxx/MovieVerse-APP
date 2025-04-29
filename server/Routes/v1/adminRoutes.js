const { createAdminManually, loginAdmin, getUserById, updateUserByAdmin, getAllUsers, deleteUserByAdmin, createUserByAdmin, deleteReviewByAdmin, getAllReviews } = require('../../controllers/adminController');
const checkAdminAuth = require('../../Middleware/adminAuthMW');
const { fieldsValidation } = require('../../Middleware/fieldsValidation');

const adminRouter=require('express').Router()

adminRouter.post("/register",fieldsValidation(["name", "email", "password"]),createAdminManually)
adminRouter.post("/createNewUser",checkAdminAuth,createUserByAdmin)
adminRouter.post("/login",fieldsValidation(["email", "password"]),loginAdmin)
adminRouter.get("/getUserById/:id",checkAdminAuth, getUserById);
adminRouter.put("/updateUserByAdmin/:id",checkAdminAuth, updateUserByAdmin);
adminRouter.get("/getAllUsers", checkAdminAuth,getAllUsers);
adminRouter.delete("/delete/:id",checkAdminAuth, deleteUserByAdmin);
//review
adminRouter.delete("/deleteReview/:id",checkAdminAuth, deleteReviewByAdmin);
adminRouter.get("/getAllReviews", checkAdminAuth,getAllReviews);


module.exports=adminRouter

// {
//     "name":"ABHIRAM K RAJAN",
//     "email":"ADMIN@gmail.com",
//     "password":"12345"
// }