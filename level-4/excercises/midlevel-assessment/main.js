// 1. Filter Anagrams
//    Write a function called filterAnagrams that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.
//    Understand the Problem:
//    Before you start coding, make sure you understand what the challenge is asking. You need to filter a given array of words to find the anagrams of a target word. Anagrams are words that have the same letters but in a different order.


// const hasSameLetterCount = (word1, word2) => {
//     const word1Count = numberOfEachLetter(word1.split(''));
//     const word2Count = numberOfEachLetter(word2.split(''));

// const numberOfEachLetter = (letters) => {
//     return letters.reduce((acc, letter) => ({
//         ...acc,
//         [letter]: acc[letter] ? acc[letter] + 1 : 1,
//     }), {});
// };
//     return word1.length == word2.length && 
//         Object.keys(word1Count)
//           .every(letter => word1Count[letter] === word2Count[letter]);
// };

// const findAnagrams = (word, allWords) => {
//     const anagrams = allWords.filter(item => {
//         return word !== item && hasSameLetterCount(word, item);
//     });
//     return anagrams;
// };

// const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
// const target = 'gdo';

// const anagrams = findAnagrams(target, words)
// console.log(anagrams); // Output: ['listen', 'silent']

function filterAnagrams(arr, target) {
    const sortedTarget = target.split('').sort().join('');
    return arr.filter(word => {
      const sortedWord = word.split('').sort().join('');
      return sortedWord === sortedTarget;
    });
  }
  const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
  const target = 'enlist';
  const anagrams = filterAnagrams(words, target);
  console.log(anagrams); // Output: ['listen', 'silent']


// 2. Write a function called sortByMultipleCriteria that takes an array of objects representing people, each with a name (string) and age (number) property.
//    The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.


function sortByMultipleCriteria(people) {
    return people.sort((a, b) => a.age - b.age || a.name - b.name)
}


 const people = [
 { name: 'Alice', age: 30 },
 { name: 'Bob', age: 25 },
 { name: 'Charlie', age: 35 },
 { name: 'David', age: 25 },
 ];

 const sortedPeople = sortByMultipleCriteria(people);
 console.log(sortedPeople);

//  Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]

// 3. Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property.
// The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.
function calculateTotalPrice(products) {
  return products.map((a) => `Name: '${a.name}', Total Price: ${a.price * a.quantity}`)
  
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]