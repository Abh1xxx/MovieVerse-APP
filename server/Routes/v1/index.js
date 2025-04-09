const adminRouter = require('./adminRoutes')
const movieRouter = require('./movieRoutes')
const reviewRouter = require('./reviewRoutes')
const userRouter = require('./userRoutes')

const v1Router=require('express').Router()



v1Router.use("/user",userRouter )
v1Router.use("/admin",adminRouter)
v1Router.use("/movies",movieRouter)
v1Router.use("/reviews",reviewRouter)


module.exports=v1Router