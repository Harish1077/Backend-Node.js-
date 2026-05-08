import express from "express";
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/shoppy");
const app=express();
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});
const Product = mongoose.model('products',productSchema);

app.get("/products",async (requestAnimationFrame,res)=> {
    const page = parseInt(requestAnimationFrame.query.page) || 1;
    const limit = 2;
    const data = await Product.find().skip((page - 1)* limit).limit(limit);
    res.send(data);
});
app.listen(3000);
