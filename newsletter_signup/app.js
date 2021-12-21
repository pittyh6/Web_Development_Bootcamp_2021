

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname  + '/signup.html')
})
app.post("/", function (req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    console.log(req.body)
    res.send("Here we go")
})


app.listen(3000, function () {
    console.log('Server is listening on port 3000')
})