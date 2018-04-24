//SHA224 - comes under cryptographic hash functions which
// is used to generate hash values. 
//It produces 224-bit hash value which is known as message digest

var crypto = require('crypto');
var hash = crypto.createHash('sha224');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');

console.log("hash : " + gen_hash);