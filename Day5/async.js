//Reading a File Asynchronously using nodejs
//if any error occurs such as file not found
//we don't have permission, etc
//then an err message will be console
//otherwise data will be printed

var fs = require('fs');

fs.readFile('message.txt', (err,data) => {
    if (err){
        return console.error(err);
    }
    console.log("Content : " + data);
    });

/** Very few asynchronous methods still use throw to raise exception which can further be handled using
 * try/catch bloack (not recommended)
 */