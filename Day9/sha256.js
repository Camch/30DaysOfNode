//SHA256 comes under SHA2
//produces a 256-bit hash value which is known as message digest

var crypto = require('crypto');
var hash = crypto.createHash('sha256');

data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash: " + gen_hash);