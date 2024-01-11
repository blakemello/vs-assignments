var arr = [5, 15, 110, 210, 550];
var index = arr.indexOf(5);

if (index > -1) {
   arr.splice(index, 1);
}
var list = [0, 2, 1, 3];

// var arr = [5, 15, 110, -1, 210, 550];
// var index = arr.indexOf();

// if (index == -1) {
//    arr[index] = undefined;
// }
// console.log(arr);

// arr.forEach(function(item){
//   if(item !== undefined){
//     console.log(item);
//   }
// });

// Challenge 1: Sort Array with Preserved Index for -1 Values
// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order,
// while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.
// the array to be sorted



function notNegative(arr) {
    let ogArray = arr.slice()
    let result = ogArray.filter(num => num !== -1).sort((a, b) => a -b)
    //console.log(result)
    let index = 0
    for (let i = 0; i < ogArray.length; i++) {
        if (ogArray[i] !== -1) {
            ogArray[i] = result[index]
            index++
        }
    }
    return ogArray
}

console.log(notNegative([-1, 150, 190, 170, -1, -1, 160, 180]))

