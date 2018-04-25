var mongo = require('mongodb');
//Establishing the connection
var new_db = "mongodb://localhost:27017/demo_db";

mongo.connect(new_db, function(error, db) {
    if(error){
        throw error;
    }

    db.collection("details").find({}).toArray ( err, collection) => {
        if(err) throw err;
        console.log("Record READ successfully");
        console.log(collection);
        db.close();
    }
})
