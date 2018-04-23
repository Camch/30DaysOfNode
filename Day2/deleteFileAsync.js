var fs = require("fs");
var filename = "content.txt";

fs.unlink(filename, (err) => {
    if (err){
        throw err;
    }
    console.log("File deleted successfully...async")
});
/**Create a file named "content.txt" first */