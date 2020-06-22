const path = require("path");
const express = require("express");
const fetcher = require("./fetcher");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/api", (req, res) => {
    res.send(fetcher.getMessage())
})

app.get("*", (req, res) => {res.send("404")})

app.listen(port);
