// 1. Write a function that takes a string as a parameter and returns
// the same string in all capital letters followed by all lowercase letters.

var capilizeAndLowercase = function(a) { 
    return a.toUpperCase() + a.toLowerCase();
};

console.log(capilizeAndLowercase("hello"));

// 2. Write a function that takes a string as a parameter and returns a number
// that is half the string's length, rounded down.
// Hint: You'll need to use Math.floor().

var findMiddleIndex = function(b) {
    return Math.floor(b.length / 2);
};

console.log(findMiddleIndex("big farts"));

// 3. Write a function that uses slice() and the other functions you've written
// to return the first half of the given string.

var returnFirstHalf = function(c) {
    return c.slice(0, c.length / 2);
};

console.log(returnFirstHalf("Test post"));

// 4. Write a function that takes a string as a parameter and returns that
// string where the first half is capitalized, and the second half is lowercase.
// Hint: If your string length is odd, use Math.floor() to round down.

var capilizeAndLowercase2 = function(d) {
    var firstPart = d.toUpperCase().slice(0, Math.floor(d.length / 2));
    var secondPart = d.toLowerCase().slice(Math.floor(d.length / 2));
    return firstPart + secondPart
};

console.log(capilizeAndLowercase2("How will this affect Lebron's legacy?"));