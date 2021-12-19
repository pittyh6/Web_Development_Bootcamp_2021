const express = require('express');
const port = 3000; // default
app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
})


app.listen(port, function(){
    console.log('listening on port 3000');
});

