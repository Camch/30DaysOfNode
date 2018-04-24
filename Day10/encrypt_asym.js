var crypto = require('crypto');
var fs = require('fs');

pubK = privK = fs.readFileSync('pub.key').toString();

var buf = Buffer.from('This is secret code', 'utf-8');

secretData = crypto.publicEncrypt(pubK, buf);

console.log(secretData.toString('utf-8'));

privK = {
    key: fs.readFileSync('priv.key', secretData),
    passpharse:'nodejsera'
}

origData = crypto.privateDecrypt(privK, secretData)

console.log(origData.toString());