// printHelloWorld = () =>	console.log("Hello World!");

// printHelloWorld();

// Provided Array
const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// You should use multiple array methods to solve these problems. Don't use `for` loops!

// Using the provided `peopleArray` (bottom of this article), write a function that:

// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

function sortedOfAge(arr){
    // filters out all users under 18
    //arr.filter((arr) => arr.age >= 18)
    const over18 = arr.filter(function(arr){
        return arr.age >= 18
    })
    //sorts list into alphepetical order
    over18.sort((a, b) => a.lastName.localeCompare(b.lastName))
    // tells what to log
    let result = over18.map(function(item){
        if (item.age >= 18) {
            return "<li>" + item.firstName + " " + item.lastName + " is " + item.age + "</li>"
        }
        else {
            //return arr.pop(arr.age < 18)
            return ''
        }
    })
    return result
 }
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 
//  try {
    
//     if(2 === 2){
//        throw new Error("Hey I am an error!")
//     }
//     console.log("Did I console log?")
// }
// catch(err){
//     console.log(err)
// }
// finally {
//    console.log("I am running no matter what!") 
// }