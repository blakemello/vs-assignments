// 1. Filter Anagrams
//    Write a function called filterAnagrams that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.
//    Understand the Problem:
//    Before you start coding, make sure you understand what the challenge is asking. You need to filter a given array of words to find the anagrams of a target word. Anagrams are words that have the same letters but in a different order.
    function filterAnagrams(arr, target) {
  
 }

// const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
// const target = 'enlist';

// const anagrams = filterAnagrams(words, target);
// console.log(anagrams); // Output: ['listen', 'silent']








// Write a function called sortByMultipleCriteria that takes an array of objects representing people, each with a name (string) and age (number) property. The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.
// function sortByMultipleCriteria(people) {

// }

// const people = [
// { name: 'Alice', age: 30 },
// { name: 'Bob', age: 25 },
// { name: 'Charlie', age: 35 },
// { name: 'David', age: 25 },
// ];

// const sortedPeople = sortByMultipleCriteria(people);
// console.log(sortedPeople);

// // Expected outcome: [
// //  { name: 'Bob', age: 25 },
// //  { name: 'David', age: 25 },
// //  { name: 'Alice', age: 30 },
// //  { name: 'Charlie', age: 35 }
// // ]

const words = ['mountain', 'anatomy', 'anemic', 'boldness', 'cinema', 
'iceman', 'machine', 'mechanic', 'elbow', 'below', 'state', 'taste', 
'dusty', 'night', 'study', 'thing', 'search', 'arches', 'chaser', 
'animal', 'manila', 'icewoman'];
const rearrange = text => [...text].sort()+''
const findAnagrams = (word, allWords) => {
   const rs = [];
   const rearrangeWord = rearrange(word);
   for (const wordItem of allWords) {
       if (wordItem.length === word.length) {
         if (rearrange(wordItem) === rearrangeWord) rs.push(wordItem);
       }
   }

  return rs;
};

fi