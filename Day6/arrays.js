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