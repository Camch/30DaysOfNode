var str = 'FFFG';
var pattern = /^[a-fA-F0-9]+$/g;

var res = str.match(pattern);
console.log(str);

if(res){
    console.log("Valid Hexadecimal number");
} else {
    console.log("Not a valid hexadecimal number");
}