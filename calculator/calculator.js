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

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("Result: " + result);
})


//calculate BMI
app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post('/bmiCalculator', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = weight / (height * height);
    res.send("Your BMI is " + result)
})




app.listen(port, function(){
    console.log('listening on port 3000');
});

