//file append operation in nodejs
var fs = require('fs');
var content = "\n This is added synchronously";

fs.appendFileSync('sync_message.txt', content);
console.log("File Appended Successfully");