//SHA1 hasing algorithm
// generates a hash value which is typically rendered 
//as a hexadecimal number of exaclty 40 digits long
//Produces a 160-bit hash value which is known message digest

var crypto = require('crypto');
var hash = crypto.createHash('sha1');

data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);
