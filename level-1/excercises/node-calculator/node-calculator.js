var readlineSync = require('readline-sync');

var num1 = readlineSync.questionInt("Please enter your first number. ");

var num2 = readlineSync.questionInt("Please enter your second number. ");

//console.log(num1);

//console.log(num2);

var operation = readlineSync.question("Please enter the operation you wish to perfomr: add, sub, mul, div. ");

//couldn't get to work at first, then realized you have to add the 'Number' part before the math function and you don't need
//to put function results() first for some reason, ask later

//function result(){
   if (operation === "add") {
    return console.log("The result is: " + Number(num1 + num2))
   }
   else if (operation === "sub") {
    return console.log("The result is: " + Number(num1 - num2))
   }
   else if (operation === "mul") {
    return console.log("The result is: " + Number(num1 * num2))
   }
   else if (operation === "div") {
    return console.log("The result is: " + Number(num1 / num2))
   }
   
 //};

 //console.log("The result is: " + result);