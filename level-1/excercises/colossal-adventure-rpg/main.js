const prompt = require('readline-sync');
const readlineSync = require('readline-sync');

// key in functionality allows to set a limit within readlinesync

// [ * Player * ]__________________________________________________________________
let player = {
    name: '',
    hp: '300',
    attack: '150',
    inventory: ['Sword', 'Bow'],
}

// [ *Enemies ]__________________________________________________________________
class Enemy {
    constructor(name,hp, attack){
        this.name = name,
        this.hp = hp
        this.attack = attack
    }
}

const enemy1 = new Enemy('Melanin Lizard', 100, 50)
const enemy2 = new Enemy('Cyclops', 200, 65)
const enemy3 = new Enemy('Another Hunter', 300, 400)
const enemies = [enemy1, enemy2, enemy3]


let gameOver = false


// Starting game

// Asking player for their name
const inputName = prompt.question("Hello user you're embarking upon an adnventure to Greed Island!, What would username would you prefer?")
player.name = inputName
console.log(`Nice to meet you ${player.name} good luck in the game!`)



// [ * While game is running * ]  ____________________________________________________________________
while(!gameOver){
   
    function playerDamage(){
        let min = 50;
        let max = 75;
        return Math.floor(Math.random() * (max-min+1)+min)
        }
 
   
    const input = readlineSync.keyIn("What would you like to do? You can hit : (w) to keep walking, (q) to quit, or (p) to look at your inventory", {limit: 'wqp'})
    // create a conditional that executes math.floor in figuring whether or not the user is going to continue walking forward

    //print inventory statement
    if(input === 'p'){
        console.log(`Your current inventory: ${player.inventory}`)
                
    }

    // walk statement
    if(input === 'q'){
        gameOver = true

    }
    
    if(input === 'w'){
        console.log ("Lets goooo!")
        // this line is taking the whole number of the result from math.random
        // the +1 at the end is to indicate that the function will never hit '0'
        // to change the chance to a 1/2 chance, or 50% chance, change the '*4' to '*2'
        let number = Math.floor(Math.random() * 4) + 1
        if(number === 3){
            console.log("You have encountered an enemy, and must fight!")
            // calculate the random number here
            //check see if they want to fight or run
            const runOrFight = prompt.keyIn("Would you like to run or fight? Press (r) to run, or (f) to fight", {limit: 'fr'})
            
            let attackNumber = Math.floor(Math.random() *2 ) + 1

                                        // ------ RUN SEQUENCE ------ // 
            if (runOrFight === 'r' ){
                console.log("You are choosing to run")

                if(attackNumber === 1)
                console.log("You have escaped!")
                
                if( attackNumber === 2){
                    console.log("You tried to run, but couldn't escape!")
                    
                    
                }
            }

                                    // ------ FIGHT SEQUENCE ------ // 
           if(attackNumber === 2 || runOrFight === 'f')  { 
                console.log("You are fighting")
                // Have to choose an enemy
                const index = Math.floor(Math.random() *2) // 0 or 1 to reference the enemy index
                let currEnemy = enemies[index]
                // encounter enemy
                console.log(`You have encountered the ${currEnemy.name}`)
                // choose an item in inventory to attack with


                                    // ------ WEAPON CHOICE PROMPT ------ // 
               
                let weaponChoice = prompt.question("You have a choice between an Sword, or a Bow, which weapon would you like to use? (B) for Bow and (S) for Sword : ")
                
                if (weaponChoice === 's'){
                    console.log(`You are choosing to use a ${player.inventory[0]}`)
                    weaponChoice = player.inventory[0]
                }
                
                if(weaponChoice === 'b'){
                    console.log(`You are choosing to use a ${player.inventory[1]}`)
                    weaponChoice = player.inventory[1]
                }


                // enemy hits user
                                
                    /* -------------------------------------------------------------------
                    Fight sequence will follow :

                    1. user attacks enemy, enemy loses hp
                    2. enemy attacks user, user loses hp
                    3. fight continues until either ones hp is < 0
                    ------------------------------------------------------------------------*/
                
                while(player.hp > 0 && currEnemy.hp > 0){
                    // keep fighting
                    // attack formula for player


                    // random enemy damage calculation
                    currEnemy.hp = currEnemy.hp-playerDamage()
                    console.log(`You have attacked ${currEnemy.name} with your ${weaponChoice}. ${currEnemy.name} now has ${currEnemy.hp}! `)
                    if(currEnemy.hp <= 0){
                        console.log(`You killed ${currEnemy.name}`)
                    }
                    else{
                        player.hp = player.hp - currEnemy.attack
                        console.log(`${currEnemy.name} has attacked you! You now have ${player.hp} hit points!`)
                    }
                }

                if(currEnemy.hp <= 0){
                    player.inventory.push('Staff')
                    console.log("You gained a STAFF for defeating your enemy!")
                    console.log(`Your inventory currently has ${player.inventory}`)
                }

                // cool death message
                //*----------------- 
                if(player.hp <= 0){
                    console.log(`And so ends the tale of ${player.name} the bold`)
                    gameOver = true
                }    
        }
        

        
    }

}
} 