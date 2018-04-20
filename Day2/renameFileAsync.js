var fs = require("fs");

fs.rename('first.txt', 'renamned.txt', (err) => {
    if (err){
        throw err;
    }
    console.log("File is renamed");
    
});

console.log("This method is Asynchronously"); //YES This works