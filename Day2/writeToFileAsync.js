var fs = require("fs");

var content = "I am THE BEST";

fs.writeFile("async_message.txt", content, (err) => {
    if (err){
        throw err;
    console.log("File created!");
    }
})