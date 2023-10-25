const name = "Ben";
const age = 24;
const dateOfBirth = "feb";

let statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
};

console.log(message)

function product(...numbers) {
    
  
    return numbers.reduce((acc, number) => {
      return acc * number;
    }, 1)
  };

  product(1,2,3,4,5);
  console.log(product(1,2,3,4,5));

let array = [];
let a = 1
let b = 2
let c = 3
let d = 5
let e = 6

  function unshift(array, a, b, c, d, e) {
    return [...(a, b, c, d, e), ...array];
  }
  
//  console.log(unshift());

const sum2ES6 = () => {
    console.log("ES6 is fun!")
};

sum2ES6();

const sum2ES62 = word => {
    console.log(`ES6 is ${word}!`)
};

sum2ES62("cool");