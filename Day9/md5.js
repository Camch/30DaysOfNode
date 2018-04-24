//MD5 hasing algorithm
// MD5 stands for Message Digest 5, produces 128.bit hashes

var crypto = require('crypto'); //loading the crypto module
var hash = crypto.createHash('md5'); //creating the hash object

data = hash.update('nodejsea', 'utf-8'); //data to be hashed
gen_hash = hash.digest('hex'); //creating the require format
console.log("hash: " + gen_hash); //priting the output
