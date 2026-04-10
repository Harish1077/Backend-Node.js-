import express from "express";
let app = express()
import userRouter from './userrouter.js'
app.use("/lpu",userRouter)
app.listen(3000)