var names = ['rj', 'Ricky', 'Alex'];

console.log(names);

var len = names.length;
console.log(len);

var arr = new Array(3);
arr = [1,5,7];

//OR

var arr1 = new Array(2,5,7);
console.log("arr : " + arr);
console.log("arr 1: " + arr1);

//push
console.log("\n ===== push ====");
arr2 = ['a', 'e', 'i', 'o'];
console.log(arr2);
arr2.push('u');
console.log(arr2);

//pop
console.log("  \n ===== pops =====");
arr3 = [5,6,7,8];
console.log(arr3)
arr3.pop(); //LIFO
console.log(arr3);

//unshift
console.log("  \n =====unshift====");
arr4 = [5,5,8,7,6];
console.log(arr4);
arr4.unshift(1); //adds at index 0
console.log(arr4);

//shift
console.log("  \n =====shift=====");
arr5 = ['b', 'a', 'e', 'i', 'o', 'u'];
console.log(arr5);
arr5.shift(); //removes data at index 0
console.log(arr5);

//reverse
console.log("  \n =====reverse====");
arr6 = ['b','e','a','o','p','n','r'];
console.log(arr6);
arr6.reverse();
console.log(arr6);

//sort
console.log("  \n ===== sort ====");
arr7 = ['b','e','a','o','p','n','r'];
console.log(arr7);
arr7.sort();
console.log(arr7);

//splice
console.log("  \n ===== splice ====");
arr8 = ['b','e','a','o','p','n','r'];
console.log(arr8);
arr8.splice(2,2, 'rj', 'nodejs'); //like adding
console.log(arr8);

//splice 2 

console.log("  \n ===== splice2 ====");
arr9 = ['b','e','a','o','p','n','r'];
console.log(arr9);
arr9.splice(2,2); //removing
console.log(arr9);

//concat
console.log("  \n ===== concat ====");
arr10 = ['tomato', 'pineapple'];
arr11 = ['mango', 'peach', 'apple']
console.log(arr10);
console.log(arr11)
var newArray = arr10.concat(arr11)
console.log(newArray);

//indexOf
console.log("  \n ===== indexOf ====");
arr12 = [5, 2, 8, 5, 6];
console.log(arr12);
var pos = arr12.indexOf(8);
console.log("index of 8 is " + pos);
var pos1 = arr.indexOf(5);
console.log("index of 5 is " + pos1);

//lastIndexOf
console.log("  \n ===== lastIndexOf ====");
arr13 = [5, 2, 8, 5, 6];
console.log(arr13);
var pos = arr13.lastIndexOf(5);
console.log("index of 6 is " + pos);

//join
console.log("  \n ===== join ====");
arr14 = [5, 2, 8, 5, 6];
arr15 = ['a', 'b', 'c', 'd'];
console.log(arr14);
console.log(arr15);
var str = arr14.join();
var str1 = arr15.join(" : ");
console.log(str);
console.log(str1);

//slice
console.log("  \n ===== slice ====");
arr16 = [5, 2, 8, 5, 6];
arr17 = ['a', 'b', 'c', 'd'];
console.log(arr16);
console.log(arr17);
var str = arr16.slice(2,4);
var str1 = arr17.join(-2,-1);
console.log(str);
console.log(str1);

//every
console.log(" \n ===== every =====");
arr18 = [2,4,6,8,10];
arr19 = [2,3,4,6,8];
function even(value) {
    if ((value % 2) == 0 ){
        return true;
    } else {
        return false;
    }
}
var out = arr18.every(even);
var out1 = arr19.every(even);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);

//filter
console.log(" \n ==== filter =====");
arr20 = [2,4,6,8,10];
arr21 = [2,3,4,6,8];
function even(value) {
    if ((value % 2) == 0 ){
        return true;
    } else {
        return false;
    }
}
var out2 = arr20.filter(even);
var out3 = arr21.filter(even);
console.log("Output of array 1 : " + out2);
console.log("Output of array 2 :" + out3);

//find
console.log(" \n ==== find =====");
arr22 = [2,4,6,8,10];
arr23 = [2,3,4,7,8];
function odd(value) {
    if ((value % 2) == 1 ){
        return true;
    } else {
        return false;
    }
}
var out4 = arr22.find(odd);
var out5 = arr23.find(odd);
console.log("Output of array 1 : " + out4);
console.log("Output of array 2 :" + out5);

//forEach
console.log("==== forEach ====");
var arr24 = ['1', '2', '3', '5', '8'];
arr24.forEach( function(element) {
    console.log(element);
});

//reduce
console.log("==== reduce ====");
arr25= [5, 5, 8, 7, 6];
console.log(arr25);

function mul(value, total) {
    total = value * total;
    return total;
}
var output = arr25.reduce(mul);
console.log("The product of the array is : " + output);