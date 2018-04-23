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
//indexof
console.log("  \n ===== join ====");
arr14 = [5, 2, 8, 5, 6];
arr15 = ['a', 'b', 'c', 'd'];
console.log(arr14);
console.log(arr15);
var str = arr14.join();
var str1 = arr15.join(" : ");
console.log(str);
console.log(str1);