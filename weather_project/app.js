const express = require('express');
const https = require('https');

const app = express();

app.get("/", function(req, res) {
    const url= "https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=3d45d101d518ad0739e9b77b6c0f23fd"
    https.get(url, response =>{
        console.log(response);
        console.log(response.statusCode);

        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            
            //get the weather temperature
            const temp = weatherData.main.temp;
            console.log(temp);
            //get the description
            const weatherDesc = weatherData.weather[0].description;
            console.log(weatherDesc);

        })
    })

    res.send("Hello");
});





app.listen(3000, function (){
    console.log('Server is listening on port 3000');
})