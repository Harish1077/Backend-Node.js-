import express from 'express';
let app = express();
import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/shoppy");
let productSchema = new mongoose.Schema({
    name: String,
    price: Number
});
let Product = mongoose.model('products', productSchema);
app.post("/products", async (req, res) => {
    let result = await Product.create(req.body);
    res.send(result);
});
app.listen(3000);