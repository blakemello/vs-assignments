printHelloWorld = () =>	console.log("Hello World!");

printHelloWorld();

function sortNumbers(arr) {
    let result = arr.sort((a, b) => a - b)
    return result
  }

const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);

function convertToUppercase(arr){
    let result = arr.map(str => str.toUpperCase())
    return result
  }

  const strings = ['hello', 'world', 'javascript'];
  const uppercaseStrings = convertToUppercase(strings);
  console.log(uppercaseStrings);