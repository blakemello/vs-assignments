// // Challenge 1: Sort Array with Preserved Index for -1 Values
// // You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order,
// // while preserving the original index positions of -1 values.

// // Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// // All non -1 values in the array should be sorted in ascending order.
// // The -1 values should retain their original index positions in the sorted array.
// // the array to be sorted

// function solution(arr) {
//     //saves the arr under a new var
//     //let ogArray = arr.slice()
//     //filters out all the -1s and sorts the rest in ascending order, mutating our copy of the arr
//     let result = arr.filter(num => num !== -1).sort((a, b) => a - b)
//     //console.log(result)
//     //starts a count
//     let index = 0
//     for (let i = 0; i < arr.length; i++) {
//         // if the number is not -1 it replaces it with the sorted array, if it is -1 it leaves it alone
//         if (arr[i] !== -1) {
//             arr[i] = result[index]
//             // increases the index count to let it move to the next item in the sorted array, otherwise it would just replace all non -1 items with the first object
//             index++
//         }
//     }
//     return arr
// }

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))

// // Challenge 2: Count Vowels
// // Write a JavaScript function called countVowels that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.
// // Implement the countVowels function using either the provided example solutions or your own solution.

// function countVowels(str) {
//     let count = 0
//     //turn the input to a string if it's not already, plus make it lowercase for less code bloat
//     const string = str.toString().toLowerCase()

//     //loop thru results
//     for (let i = 0; i < string.length; i++) {
//         if (string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || string.charAt(i) === 'u')

//             //add number to count until done

//             count ++
//     }

//     return count
//     // const result = [...str].filter(str => str)
// }

// // function countVowels2(str) {
// //     let result = str.match('a','e','i','o','u')
// //     return result
// // }

// // something new to me I found on stack overflow  (g makes it search the whole string, i makes it case-insensitive)
// // function getVowels(str) {
// //     const m = str.match(/[aeiou]/gi);
// //     return m === null ? 0 : m.length;
// //   }
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// // Example usage
// const isValidEmail = emailRegex.test("example@email.com");
// console.log(isValidEmail); // Outputs: true

// //   console.log(getVowels('test'))

// const input = 'Hello, World!';

// console.log(countVowels(input)); // Output: 3
// // ​
// const input2 = 'Counting Vowels';

// console.log(countVowels(input2)); // Output: 5





// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

function findSumOfTwo(numbers, target) {
    for (let i=0; i<numbers.length; i++) {
        for (let j=1; j<numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [numbers[i], numbers[j]]
            }
        }
    }
    return []
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 91)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]