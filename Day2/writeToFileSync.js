var fs = require("fs");

var content = "This is written synchronously"

fs.writeFile("sync_message.txt", content);
console.log("The file is created");