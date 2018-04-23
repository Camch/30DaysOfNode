var fs = require("fs");
var fileName = "content.txt";

fs.unlinkSync(fileName);
console.log("File successfully deleted");

/**Create a file namned content.txt */