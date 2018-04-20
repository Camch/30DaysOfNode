var http = require("http"); //built-in module to acccess a server

var host = '127.0.0.1' //localhost
var port = 3000;

var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"}); //built-in method to return status code, like 404 not found
    console.log("Server is working");
    response.end("Server Working Successfully");
});

server.listen(port, host, (error) => {  //built-in method used to bind to the port an start listening for incoming connections.
    if (error) {
        return console.log('An Error has occured: ', error);
    }

    console.log('Server is listening on: ' + host + ':' + port)
});	 