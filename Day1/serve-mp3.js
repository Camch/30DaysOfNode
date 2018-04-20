var http =  require("http");
var fs = require("fs");

http.createServer( function (req, res) {
    console.log("Port Number : 3000");
    res.writeHead(200, {'Content-Type' : 'audio/mp3'});
    fs.exists('audio/mp3', function(exists){
        if (exists){
            var rstream = fs.createReadStream('audio.mp3');
        }
        else {
            res.end("It's a 404 - Not Found");
        }
    });
}).listen(3000);