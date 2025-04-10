const adminDashboardRouter = require('./adminDashboardRoutes')
const adminRouter = require('./adminRoutes')
const movieRouter = require('./movieRoutes')
const reviewRouter = require('./reviewRoutes')
const userRouter = require('./userRoutes')
const watchlistRouter = require('./watchlistRoutes')

const v1Router=require('express').Router()



v1Router.use("/user",userRouter )
v1Router.use("/admin",adminRouter)
v1Router.use("/movies",movieRouter)
v1Router.use("/reviews",reviewRouter)
v1Router.use("/watchList",watchlistRouter)
v1Router.use("/adminDashboard", adminDashboardRouter); 
module.exports=v1Router