const express = require('express');
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("views.ejs", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
    {"username" : "James", "comment" : "bla"},
    {"username" : "John", "comment" : "bla"},
    {"username" : "Janny", "comment" : "bla"}
]

app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", {comments})
});


app.get("/tacos", (req, res) => {
    res.send("GET tacos")
});

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`${meat}`);
});

app.listen(3000, () => {
    console.log(path)
});





