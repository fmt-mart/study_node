import express from "express";

const app = express();

const hostname = "localhost";
const post = 8107;

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(post, hostname, () => {
    console.log(`Server running at http://${hostname}:${post}/`);
});