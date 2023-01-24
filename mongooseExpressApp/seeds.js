const mongoose = require('mongoose');
const Product = require("./models/product");
mongoose.connect('mongodb://127.0.0.1:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected")
})
.catch((err) => {
    console.log("Error", err)
})

const pork = new Product({
    productName: "Pork",
    price: 1,
    category: "meat"
})

pork.save()
.then(pork => console.log(pork))
.catch(err => console.log(err));

// const products = [
//     {
//         productName: "Pork",
//         price: 1,
//         category: "meat"
//     },

//     {
//         productName: "Brocolli",
//         price: 1,
//         category: "veg"
//     },

//     {
//         productName: "Chicken",
//         price: 1,
//         category: "meat"
//     }
// ]

// Product.insertMany(products)
// .then(() => console.log("Saved to DB"))
// .catch(err => console.log("error while saving to DB"))