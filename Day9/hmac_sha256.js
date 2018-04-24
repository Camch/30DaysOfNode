//It is the same as hasing the input
//with sha256 hasing algorithm as explained above

var crypto = require('crypto');
var hmac = crypto.createHmac('sha256', 'yoursecretkeyhere');

data = hmac.update('nodejsera');
gen_hmac = data.digest('hex');
console.log("hmac: " + gen_hmac);