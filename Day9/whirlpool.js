//Whirlpool
//this algorithm takes input of any length less than 2^256,
//outputs 512-but hash

var crypto = require('crypto');

var hash = crypto.createHash('whirlpool');
data = hash.update('nodejsera' , 'utf-8');

gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);