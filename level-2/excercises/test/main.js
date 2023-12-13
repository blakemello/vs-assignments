printHelloWorld = () =>	console.log("Hello World!");

printHelloWorld();

// Web Storage

// Local Storage
// Session Storage

// JSON - Javascript Object Notation
    // JSON.stringify => turning JS into JSON
    // JSON.parse => Turns JSON into JS

// Setter - Save data in local storage (key = value pairs)
// localStorage.setItem("name", "steve")
// localStorage.setItem("age", 10)
// localStorage.setItem("isAlive", true)
// localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
// localStorage.setItem("adress", JSON.stringify({street: "123 street", city: "SLC" }))


// // Getter
// const name = localStorage.getItem("name")
// const age = localStorage.getItem("age")
// const isAlive = localStorage.getItem("isAlive")
// const friends = JSON.parse(localStorage.getItem("friends"))
// const address = JSON.parse(localStorage.getItem("address"))
// console.log(address)

// Remove
// localStorage.removeItem("age")

// localStorage.dinosaur = "T-rex"

function collectAnimals(...arr) {  
    return [arr] 
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function parseSentence({location, duration}){
    return (`We're going to have a good time in ${location} for ${duration}`)
}
var vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  