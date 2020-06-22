const express = require("express");
const fetcher = require("./fetcher");
const app = express();

const port = 3000 | process.env.PORT;

app.use(express.static("public"));

app.get("/api", (req, res) => {
    res.send(fetcher.getMessage())
})

app.get("*", (req, res) => {res.send("404")})

app.listen(port);