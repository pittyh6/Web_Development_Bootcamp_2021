const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hi Thereeeeee")
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
})