import express from 'express';
let app = express();
import path from 'path';
import { fileURLToPath } from 'url';
let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/shoppy');

let productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

let Product = mongoose.model('Product', productSchema);
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'crudfront.html'));
});
app.post('/add-product', async (req, res) => {
    let result = Product.insertOne(req.body);
    res.send('Product added successfully');
});
app.post('/save', async (req, res) => {
    try {
        let result = await Product.create(req.body);
        res.send('Product saved successfully');
    } catch (err) {
        res.status(500).send('Error saving product');
    }
});
app.listen(3000);