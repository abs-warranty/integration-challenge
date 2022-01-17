const express = require("express")
const path = require("path")

const app = express()
const port = 8083

var bodyParser = require("body-parser")

app.use(bodyParser())
app.use(express.static(__dirname + "/client"))
app.get("/", function (req, res) {
  console.log("Returning Index")
  res.sendFile(path.join(__dirname, "client", "index.html"))
})

app.get("/registration", function (req, res, next) {
  console.log("you got me!")
  res.status(200).json({})
})

app.post("/registration", function (req, res, next) {
  console.log("you posted to me!")
  console.log(req.body)
  res.status(201).json({ message: "you posted" })
})

app.listen(port)
console.log(`Listening on ${port}`)
