var mongo = require('mongodb');
//Establishing the connection
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (error,db) => {
    if(error) {
        throw error;
    }

    var query = {
        age: "above 22"
    };
    db.collection("details").deleteOne(query, (err, collection) => {
        if(err) throw err;
        console.log(collection.result.n + "Records deleted successfully");
        console.log(collection);
        db.close();
    });
});

mongo.connect(new_db, (error, db) => {
    if(error) {
        throw error;
    }
    var query = {
        age: "above 22"
    };
    db.collection("details").deleteMany(query, (err, collection) => {
        if (err) throw err;
        console.log(collection.result.n + "Records deleted successfully");
        console.log(collection);
    });
});