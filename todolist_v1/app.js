const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');


const items = ["Buy Meat", "Buy Juice","Buy Bread"];
const workItems = [];
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) { 
    let day = date.getDate();   
    res.render("list", {listTitle: day, newListItems: items});
})

app.post("/", function(req, res) {
    let item = req.body.newItem;

    // verify wch list.. work, todo, study ...
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);   
        res.redirect("/");
    }
})

// WORK
app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
})
app.post("/work", function(req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})






app.listen(3000, function(){
    console.log('Server is listening on port 3000');
})