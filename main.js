'use strict'

// 1.display in the console the numbers from 1 to 20

for (var i = 1; i <= 20; i++) {
    console.log(i);
}
console.log('2.display in the console the odd numbers from 1 to 20')

//2.display in the console the odd numbers from 1 to 20

for (let i = 1; i<20; i++) {
    if ( i % 2 === 1) {
        console.log(i);
    }
}
console.log('3.compute the sum of the elements of an array and display it in the console')
// 3.compute the sum of the elements of an array and display it in the console

var array = [2044, 777, 120, 1500, 1115, 442, 825, 1505];
var sum = array.reduce(function(a, b){
return a + b; }, 0);
console. log(sum); 

console.log('4.compute the maximum of the elements of an array and display it in the console')

// 4.compute the maximum of the elements of an array and display it in the console 

function maxOfArr(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    
    return max;
}
let myArr = [5204, 22457, 152522, 3335550, 1121115, 445559, 85353, 1105];
console.log(maxOfArr(myArr));
console.log('5. compute how many times a certain element appears in an array  ')

// 5. compute how many times a certain element appears in an array   

const arrayToCount = [1, 2, 3, 5, 2, 8, 9, 2, 80, 2, 84, 2 , 56, 2 , 3, 2, 62, 1000, 2, 2, 52, 4, 2];
const result = arrayToCount.filter(i => i === 2).length;
console.log('number of appearances ' + result);
console.log('Challenge Nested')

// Challenge Nested

var a = [1,2,3,1,2,3,4];
var map = a.reduce(function(obj, b) {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});


let pattern = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    
];
console.log(pattern);
