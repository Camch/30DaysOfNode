var fs = require('fs');
var wdata = "Im working with the streams";
var myWriteStream = fs.createWriteStream('notes.txt');

myWriteStream.write(wdata);
myWriteStream.end(); //done writing

myWriteStream.on('error', function(err){
    console.log(err);
});

myWriteStream.on('finish', function() {
    console.log("data written successfully using streams");
    console.log('Now trying to read the same file using read streams');
    var myReadStream = fs.createReadStream('notes.txt');
    var rContents = '' //to hold the read contents
    myReadStream.on('data', function(chunk) {
        rContents += chunk;
    });
    myReadStream.on('error', function (err) {
        console.log(err);
    });
    myReadStream.on('end', function () {
        console.log('read' + rContents);
    });
    console.log('performed write and read using streams');
});

