const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000; // default

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    console.log(req.body);

    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 + num2;

    res.send("Result: " + result);
})

app.listen(port, function(){
    console.log('listening on port 3000');
});

