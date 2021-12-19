const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hi Thereeeeee")
})

app.get("/contact", (req, res) => {
    res.send("contact me at pittyh6@gmail.com")
})

app.get("/about", (req, res) => {
    res.send("<h1>my name is Priscila</h1> <p>I am a beginner web developer</p> <h3>Give me a job please!!!!</h3>")
})
app.listen(3000, function () {
    console.log("Server started on port 3000");
})