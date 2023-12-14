// printHelloWorld = () =>	console.log("Hello World!");

// printHelloWorld();

// // 1) Rest Operator
// ​// to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// -------------------------------------------------------------------------


// 2) Write a function that returns a food object with the array names as properties.
//    You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice
//    in both the name and value of properties in your object:

    function combineFruit(fruit, sweets, vegetables){
     return {fruit, sweets, vegetables}
 }

 console.log(combineFruit(["apple", "pear"],
              ["cake", "pie"],
              ["carrot"]))
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }


// ---------------------------------------------------------------------------------------------------

// 3) Use destructuring to use the property names as variables. Destructure the object in the parameter:

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }));

// ---------------------------------------------------------------------------------------------------------


// 4) Use array destructuring to make this code ES6:
function returnFirst(items){
//    let firstItem = items[0] /*change this line to be es6*/
    let firstItem = [...items][0]
    return firstItem
}

console.log(returnFirst(["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]))

// 5) Write destructuring code to assign variables that will help us return the expected string.
// Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let firstFav = [...arr][1]
    let secondFav = [...arr][2]
    let thirdFav = [...arr][4]
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))

// ----------------------------------------------------------------------------------------------------


// 6) Use the Rest and Spread Operator to help take any number of arrays, and return one array.
// You will need to change how the arrays are passed in.
// You may write it assuming you will always recieve three arrays if you would like to.
function combineAnimals(a, b ,c) {
    result = [...a, ...b, ...c]
    return result
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]



// 7) Try to make the following function more ES6y: --------------------------

 function product(a, b, c, d, e) {
    let numbers = [a,b,c,d,e];
    //  return numbers.reduce(function(acc, number) {
    //    return acc * number;
    //  }, 1)
    let result = numbers.reduce((final, num) => {
        return final * num
    }, 1)
    return result
   }

console.log(product(1, 3, 4, 5, 7))

// ------------------------------------------------------------------------------


// 8) Make the following function more ES6y. Use at least both the rest and spread operators:
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }
function unshift(arr, ...a) {
    result = [...a, ...arr], [];
    return result
  }

console.log(unshift([1,2,3], 4, 5, 6, 7, 8, 9))

// ----------------------------------------------------------------------


// 9) Write some destructuring code to help this function out.
// Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
 function populatePeople(names){
     return names.map(function(name){
         name = name.split(" ");
        //  your code
        //console.log(name)
        // end your code
         return {
              firstName: name[0],
              lastName: name[1]
         }
     })
 }


console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]