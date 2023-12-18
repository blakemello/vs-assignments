// const status1 = ["Powered Up", "Big", "Small", "Dead"]

class player {
    constructor() {
        this.name = this.setName()
        this.totalCoins = 0
        // this.index = "Big"
        this.status = "Big"
        this.hasStar = false
        this.endGame = false
    }




    setName(namePicked) {
        //randomizes a 1 or a 2
        let result = Math.floor(Math.random() * 2) + 1
        // sets player name as mario or luigi based on outcome
        if (result === 1) {
            namePicked = "Mario"
            this.name = namePicked
        } else {
            namePicked = "Luigi"
            this.name = namePicked
        }
        return namePicked
    }


    gotHIt() {
        //this.status = status1[this.index]
        if (newPlayer.status === "Powered Up") {
            newPlayer.status = "Big"
        }
        else if (newPlayer.status === "Big") {
            newPlayer.status = "Small"
        }
        else if (newPlayer.status === "Small") {
            newPlayer.status = "Dead"
        }
        if (newPlayer.status === "Dead") {
            myStopFunction()
        }
        // return this.status.valueAsString
    }

    gotPoweredUp() {
        //this.status = status1[this.index]

        if (newPlayer.status === "Powered Up") {
            console.log("You have a Star!")
        }
        else if (newPlayer.status === "Big") {
            newPlayer.status = "Powered Up"
        }
        else if (newPlayer.status === "Small") {
            newPlayer.status = "Big"
        }
        // return this.status.valueAsString
    }

    addCoin() {
        this.totalCoins = this.totalCoins + 1
        return this.totalCoins
    }



    printPlayer() {
        const printName = `Name : ${this.name}
Status : ${this.status}
Coins : ${this.totalCoins}

`

        return printName

    }

}

//console.log(newPlayer.status)

let newPlayer = new player()

//console.log(newPlayer.printPlayer())

//console.log(newPlayer.printS())

// set the program to run on a loop
let myInterval = setInterval(function getRandomArbitrary() {
    let num = Math.floor(Math.random() * 3) + 0
    //console.log(num)
    if (num === 0) {
        (newPlayer.gotHIt())
    }
    if (num === 1) {
        (newPlayer.gotPoweredUp())
    }
    if (num === 2) {
        (newPlayer.addCoin())
    }
    console.log(newPlayer.printPlayer())
    //print(newPlayer.printPlayer)
}, 1500)

//
function myStopFunction() {
    if (newPlayer.status === "Dead") {
        newPlayer.endGame === true
    }
    if (newPlayer.endGame = true) {
        clearInterval(myInterval);
    }
}
//console.log(getRandomArbitrary)