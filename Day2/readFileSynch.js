var fs = require("fs");

var fileName = "message.txt";
var message = fs.readFileSync(fileName);
console.log("Content: " + message);