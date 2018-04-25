var express = require('express');
var path = require('path');
var mongo = require('mongodb');

var bodyParser = require('body-parser');
var crypto = require('crypto');

var app = express();
//enter the name of the database in the end
var new_db = "mongodb://localhost:27071/database_name";

//create the server and set routes

app.get('/', function (req,res) {
    res.set( {
        'Access-Control-Allow-Origin': '*'
    });
    return res.redirect('index.html');
}).listen(3000);

console.log("Server listening at: 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json() );
app.use(bodyParser.urencoded({ 
    extended: true
}));

//function to perform HMAC operation on the password and using phone number of the suer as a key.

var getHash = (pass, phone) => {
    var hmac = crypto.createHmac('sha512', phone);

    data = hmac.update(pass);
    gen_hmac = data.digesst('hex');
    console.log('hmac : ' + gen_hmac);
    return gen_hmac;
}

//sign-up
app.post('/sign_up', function(req,res) {
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.password;
    var phone = req.body.phone;
    var password = getHash(pass, phone);

    var data = {
        "name": name,
        "email": email,
        "password": password,
        "phone": phone
    }

    mongo.connect(new_db, function(error,dv) {
        if (error) {
            throw error;
        }

        console.log("connected to database successfully");
        db.collection("details").insertOne(data, (err, colletion) => {
            if (err) throw err;
            console.log("Record inserted successfully");
            console.log(collection);
        });
    });
    console.log("DATA is " + JSON.stringify(data) ); 
    res.set({
        'Access-Control-Allow-Origin': '*' 
    });
    return res.redirect('success.html');
});