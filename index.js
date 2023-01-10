const express = require('express');
const app = express();
const path = require("path");
const { read } = require("fs");
const { v4: uuid} = require("uuid");
const methodOverride = require("method-override");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"))

let comments = [
    {id: uuid(), "username" : "James", "comment" : "bla"},
    {id: uuid(), "username" : "John", "comment" : "bla"},
    {id: uuid(), "username" : "Janny", "comment" : "bla"}
];

app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", {comments})
});

app.post("/comments", (req, res) => {
    const { username, comment } = req.body
    comments.push({id : uuid(), username, comment, })
    res.redirect("/comments")
})

app.get("/comments/new", (req,res) => {
    res.render("comments/new.ejs")
});

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render("comments/show.ejs", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render("comments/edit.ejs", { comment })
});



app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(comment => comment.id === id);
    const newCommentText = req.body.newText;
    foundComment.comment = newCommentText;
    res.redirect("/comments")
})

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id);
    comments = comments.filter(comment => comment.id !== id)
    res.redirect("/comments")
})

app.get("/tacos", (req, res) => {
    res.render("GET tacos")
});

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`${meat}`);
});

app.listen(3000, () => {
    console.log(path)
});





