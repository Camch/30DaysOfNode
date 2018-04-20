var fs = require("fs");

fs.renameSync('renamned.txt', 'sync_renamed.txt');
console.log('File renamed once again');

console.log("This was done synchronously");