import express from "express";
let Router = express.Router()
Router.get("/home",(req,res)=>{
    res.send("Welcome to Home Page")
}) 
Router.get("/product",(req,res)=>{
    res.send("Welcome to Product Page")
})
export default Router