const form = document["billing"]
const submit = document.getElementById("submit");

showTotal = (event) => {
    
    // prevents page from refreshing
    event.preventDefault();
    // test button
    //console.log("button works")

    // get values of all boxes in form
    const goombas = form.goombas.valueAsNumber
    const bobombs = form.bomombs.valueAsNumber
    const cheepcheeps = form.cheepcheeps.valueAsNumber
    //test if values have been captured
    // console.log(goombas)
    // console.log(bobombs)
    // console.log(cheepcheeps)

    //*do math with form ---------------------
    const goombasPrice = (goombas * 5)
    const bobombsPrice = (bobombs * 7)
    const cheepcheepsPrice = (cheepcheeps * 11)

    // console.log(goombasPrice)
    // console.log(bobombsPrice)
    // console.log(cheepcheepsPrice)

    //* Add totals together


    //shows total price as a string
    const totalPrice = document.createElement('p')
    //
    totalPrice.textContent = ("Goombas: " + goombas + " x 5 = " + goombasPrice + " Bob-ombs: " + bobombs + " x 7 = " + bobombsPrice + " Cheep-cheeps: " + cheepcheeps + " x 11 = " + cheepcheepsPrice + " = " + " For A Total Of: " + (goombasPrice + bobombsPrice + cheepcheepsPrice) + " Coins")
    //
    document.getElementsByTagName("body")[0].append(totalPrice)
};

submit.addEventListener("click", showTotal);