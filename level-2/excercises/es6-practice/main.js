printHelloWorld = () =>	console.log("Hello World!");

printHelloWorld();

// let and const
// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John",
// but instead "spot" is returned). You only need to delete var and insert let and const
// John is the pet owner, and his name should be stored differently than the other names.
const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// ----------------------------------------------------------------------------

// ES6 ARROW FUNCTIONS

// Task 1 -----------------------------------------------------------------------------------------------------------
// Re-write this .map() using an arrow function:
// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object,
// so the : will be an unexpected symbol.
const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

let mapVegetables = (arr) => arr.map(function(carrot){
    return { type: "carrot", name: carrot}
})

console.log(mapVegetables(carrots))

// -----------------------------------------------------------------------------------------


// Task 2 ----------------------------------------------------------------------------------
// Re-write this .filter() ’s callback function using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

let filterForFriendly = (arr) => arr.filter(arr => arr.friendly ? true : false)

console.log(filterForFriendly(people))

// ---------------------------------------------------------------------------------


// Task 3 -----------------------------------------------------------------------------
// Re-write the following functions to be arrow functions:
let doMathSum = (a, b) => a + b

console.log(doMathSum(1, 2))

let produceProduct = (a, b) => a * b

console.log(produceProduct(1, 2))
//Hi

// ------------------------------------------------------


// Task 4 ---------------------------------------------------------------------------------
//Write a `printString` function that takes `firstName`, `lastName`, and `age`
// as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?
// `firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to `100`

let firstName = "Jane";
let lastName = "Doe";
let age2 = 100;

console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age2}`)