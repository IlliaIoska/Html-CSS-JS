const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const Product = require("./models/product");
const methodOverride = require("method-override");

mongoose.connect('mongodb://127.0.0.1:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected")
})
.catch((err) => {
    console.log("Error", err)
})

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const categories = ["meat", "veg"];

app.get("/products", async (req, res) => {
    const {category} = req.query;
    if(category) {
        const products = await Product.find({category: category});
        res.render("products/index", {products, category});
    } else {
        const products = await Product.find({});
        res.render("products/index", {products, category: "all"});
    }
});

app.post("/products", async (req, res) => {
    const newProduct =  new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/new", (req, res) => {
    res.render("products/new.ejs", {categories});
})

app.get("/products/:id", async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render("products/details.ejs", {product}); 
})

app.get("/products/:id/edit", async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("products/edit.ejs", {product, categories});
})

app.put("/products/:id", async (req, res) => {
    const {id} = req.params;
    await Product.findByIdAndUpdate(id, req.body, {runValidators: true});
    res.redirect(`/products/${id}`);
})

app.delete("/products/:id", async (req, res) => {
    // const {id} = req.params When using Product.findByIdAndDelete();
    await Product.deleteOne(req.body); 
    res.redirect("/products");
})

app.listen(3000, () => {
    console.log("App is listening");
});