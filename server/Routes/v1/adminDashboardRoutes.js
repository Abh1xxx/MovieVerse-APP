const express = require("express");
const adminDashboardRouter = express.Router();
const checkAdminAuth = require("../../Middleware/adminAuthMW");
const { getDashboardStats } = require("../../controllers/adminDashboardController");

adminDashboardRouter.get("/stats", checkAdminAuth, getDashboardStats);

module.exports = adminDashboardRouter;
