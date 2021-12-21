const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post("/", function (req, res) {
    console.log(req.body.cityName);

    const query = req.body.cityName;
    const apiKey = "3d45d101d518ad0739e9b77b6c0f23fd";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;
    https.get(url, response => {
        console.log(response);
        console.log(response.statusCode);

        response.on('data', function (data) {
            const weatherData = JSON.parse(data);
            console.log(weatherData);

            //get the weather temperature
            const temp = weatherData.main.temp;
            console.log(temp);
            //get the description
            const weatherDesc = weatherData.weather[0].description;
            console.log(weatherDesc);

            const icon = weatherData.weather[0].icon;
            const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.set("Content-Type", "text/html")
            res.write("<h1>The temperature  in " + query + " is " + temp + "° </h1>");
            res.write('<h3>The weather is currently ' + weatherDesc + '</h3>');
            res.write("<img src='" + iconURL + "'>")
            res.send();
        })
    })
})






app.listen(3000, function () {
    console.log('Server is listening on port 3000');
})