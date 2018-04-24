//We are hashing the contents of a file using node.js streams.
// node.js filesystem, SHA256, cryptographic hashing algorithm

var crypto = require('crypto');
var fs = require('fs');

var algorithm = 'sha256'; //algortihm to be used
var hash = crypto.createHash(algorithm);

//reading
var fileName = "data.txt";
var file_data = fs.ReadStream(fileName);

//passing
file_data.on('data', function(data) {
    hash.update(data);
})

//creating the hash
file_data.on('end', function() {
    var gen_hash = hash.digest('hex');
    console.log('Hash generated using ' + algorithm +
'\n Hashed output is: ' + gen_hash + ' \n File name is '
+ fileName );
fs.writeFileSync(fileName, gen_hash);
})