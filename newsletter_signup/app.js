

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
    const https = require('https');
   
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: { 
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us20.api.mailchimp.com/3.0/lists/e9e3dc6103"
    const options = {
        method: "POST",
        auth: "pittyh6:adbb564984ed681fd860ace1e6d36a13-us20"
    }

    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    }); 
    request.write(jsonData);
    request.end();
})


app.listen(3000, function () {
    console.log('Server is listening on port 3000')
})

// adbb564984ed681fd860ace1e6d36a13-us20
// e9e3dc6103