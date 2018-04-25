var express = require('express')
var fs = require('fs')

var app = express()

app.get('/', function (req, res){
    res.send('Simpe example of routes!');
})

app.get('/signup', function (req,res) {
    //this is how we revceive params
    var name = req.query.name;
    var email = req.query.email;
    var password = req.query.password;

    //For demo purpose
    console.log(name + ' ' + email + ' ' + password);

    //store this in a database
    res.send("In signup module");
});



app.listen(3000, function() {
    console.log('Server is listening at 3000');
})