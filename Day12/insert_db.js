//insertOne: built-in method used for inserting data
//Including the required packages
var mongo = require('mongodb');
//Establishing the connection
var new_db = "mongodb://localhost:27017/demo_db"
mongo.connect(new_db, function(error, db){
    if (error) 
        throw error;


var data = {
    name: "rishabhio",
    age: "25",
    mobile: "1234567890"
}

db.collection("details").insertOne(data, (err, collection) => {
    if (err){
        throw err;
    }
    console.log("Record inserted successfully");
    console.log(collection);
});

});