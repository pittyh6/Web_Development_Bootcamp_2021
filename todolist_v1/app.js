const express = require('express');
const bodyParser = require('body-parser');

let items = ["Buy Meat", "Buy Juice","Buy Bread"];

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    let today = new Date();
    let options={
        weekdays: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {kindOfDay: day, newListItems: items});
})

app.post("/", function(req, res) {
    let item = req.body.newItem
    items.push(item);   
    res.redirect("/")
})

app.listen(3000, function(){
    console.log('Server is listening on port 3000');
})