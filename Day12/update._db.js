var mongo = require('mongodb');
//Establishing the connection
var new_db = "mongodb://localhost:27017/demo_db"

//update ONE

mongo.connect(new_db, (error, db) => {
    if(error) {
        throw error;
    }

    var query = {
        name: "rishabhio"
    };
    var data = {
            name: "nodejsera.com",
            mobile: "1234567890"
    };
    db.collection("details".updateOne(query, data, (err, colleciton) => {
        if(err) throw err;
        console.log("Record UPDATED successfully");
        console.log(collection);
     });
});

//UPDATE ALL

mongo.connect(new_db, (error, db) => {
    if(error) {
        throw error;
    }

    var query2 = {
        age: {
            $gt: "22"
        }
    }
    db.collection("details").updateMany(query, data, (err, collection) => {
        if (err) throw err;
        console.log(collectio.result.nModified + "Record(s) updated successfully" );
        console.log(collectio);
    })
})