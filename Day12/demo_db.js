var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (error,db) => {
    if (error) {
        throw error;
    }
    console.log("Database demo_db created successfully");
    //To close the connection
    db.close();
})
//This is not really tested due to no mongodb installed