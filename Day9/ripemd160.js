//RACE Integrity Primitives Evaluation Message Digest
//160 is an improved verion of ripemd and it usually
//generates a 40 digit hexadecimal number

var crypto = require('crypto');
var hash = crypto.createHash('ripemd160');

data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash: " + gen_hash);