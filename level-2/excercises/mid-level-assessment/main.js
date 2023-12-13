printHelloWorld = () =>	console.log("Hello World!");

printHelloWorld();

// Question 1 -------------------------------------------------------

function sortNumbers(arr) {
   arr.sort((a, b) => a - b)
    return arr
  }

const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);

// -----------------------------------------------------------------


//Question 2 --------------------------------------------------------

function convertToUppercase(arr){
  return  arr.map(str => {
  return  str[0].toUpperCase() + str.slice(1)
}  
  )
  }

  const strings = ['hello', 'world', 'javascript'];
  const uppercaseStrings = convertToUppercase(strings);
  console.log(uppercaseStrings);
  console.log(mystery(strings))

  // -------------------------------------------------------------------


  // Question 3 -------------------------------------------------------

  function mystery(arr) {
    let result = arr.sort()
    return result
  }
  
  function findEvens(arr){
    let newArr =  arr.filter(num2 => {
      if(num2 % 2 === 0) {
        return num2
      }
    }) 
    return newArr
  }
  
  const numbersTwo = [1,2,3,4,5,6,7,8,9,10]
  console.log(findEvens(numbersTwo))
  
  // ctrl + D --> highlight Text
  
  // alt up or alt down

  // alt + shift up or down