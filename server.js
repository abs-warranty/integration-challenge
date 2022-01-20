const express = require("express");
const path = require("path");

const app = express();
const port = 8083;

var bodyParser = require("body-parser");

app.use(bodyParser());
app.use(express.static(__dirname + "/client"));
app.get("/tire-cart-1", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "tire-cart-1.html"));
});
app.get("/tire-cart-2", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "tire-cart-2.html"));
});

app.get("/registration", function (req, res, next) {
  res.status(200).json({});
});

app.post("/registration", function (req, res, next) {
  console.log(req.body);
  res.status(201).json({ message: "you posted" });
});

app.listen(port);
console.log(`Listening on ${port}`);
