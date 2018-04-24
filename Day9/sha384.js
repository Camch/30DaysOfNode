//SHA384 comes under SHA2
//produces a 384-bit hash value which is known as message digest

var crypto = require('crypto');
var hash = crypto.createHash('sha384');

data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash: " + gen_hash);