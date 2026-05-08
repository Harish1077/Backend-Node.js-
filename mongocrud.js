import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/shoppy');

let productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

let Product = mongoose.model('Product', productSchema);
let saveDB = async () => {
    let result = await Product.insertOne({name: "Laptop", price: 100000}); 
    console.log(result);
}
let updateDB = async () => {
    let result = await Product.updateOne({_id:'69ef1825bba73ec5cb4f9cfc'},
    {$set: {price: 90000}});
    console.log(result.matchedCount);
    console.log(result.modifiedCount);

}
let findDB = async () => {
    let result = await Product.find({price: {$gt: 50000}});
    console.log(result);
}
let deleteDB = async () => {
    let result = await Product.deleteOne({_id:'69ef1825bba73ec5cb4f9cfc'});
    console.log(result.deletedCount);
}   
// saveDB();
// updateDB();
// findDB();
// deleteDB();