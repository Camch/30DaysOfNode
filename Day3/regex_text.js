/* Find specific text using regular expression*/ 

var fs = require('fs');
var fileName = "data.txt";

var str = fs.readFileSync(fileName).toString(); //store everything in data.txt into 'str'
var pattern = /MAN/gim; /** looking for occurences for MAN , g: global, i: case sensitive m: multiline match  MAN*/

var myarray = str.match(pattern);
var len =   myarray.length;

console.log("Occurrencens of pattern in the string is : " + len);
