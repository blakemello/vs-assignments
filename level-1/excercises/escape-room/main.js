const readline = require("readline-sync");

//const name = readline.question("What is your name? ");

console.log ("You find yourself locked in a room. You see a door, a hole, and a lamp.")

let key = "no",

keyYN = (name) => {
   key = name
}
//sets the options array for the readline input
let options = ['Find the key', 'Put hand in hole', 'Open the door'];


// makes it so the function always repeats until you hit a break
 while (true) {
    index = readline.keyInSelect(options, 'What do you do?');

    if (options[index] === 'Put hand in hole') {
        console.log("You were bitten by a snake and died :'(")
        //makes sure once you choose this option you have to start over
        break;
    }

    else if (options[index] === 'Find the key') {
        console.log("You seached the lamp and found a key")
        keyYN("yes")
    }

    else if (options[index] === 'Open the door') {
        if (key==="yes") {
            console.log("YOU DID IT HORAY!!!!")
            break;
        } else if (key==="no") {
            console.log("The door is locked maybe there's a key around here somewhere")
    }

 }
};