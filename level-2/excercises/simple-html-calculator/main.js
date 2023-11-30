//* For addition ----------------------------------------

const form1 = document["my-add-form"]

// Submit event

form1.addEventListener("submit", function(event){
    event.preventDefault()
    
    const numberOne = form1.numberOne.valueAsNumber
    const numberTwo = form1.numberTwo.valueAsNumber
    form1.numberOne.value = ""
    form1.numberTwo.value = ""

    console.log(numberOne + numberTwo)
    
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    // 2. <h1>Answer</h1>
    h1.textContent = (numberOne + " + " + numberTwo + " = " + (numberOne + numberTwo))
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)
});

//* -----------------------------------------------------------

//* For subtraction -------------------------------------------

const form2 = document["my-subtract-form"]

// Submit event

form2.addEventListener("submit", function(event){
    event.preventDefault()
    
    const numberOne2 = form2.numberOne2.valueAsNumber
    const numberTwo2 = form2.numberTwo2.valueAsNumber
    form2.numberOne2.value = ""
    form2.numberTwo2.value = ""

    console.log(numberOne2 - numberTwo2)
    
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    // 2. <h1>Answer</h1>
    h1.textContent = (numberOne2 + " - " + numberTwo2 + " = " + (numberOne2 - numberTwo2))
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)
});

//* -----------------------------------------------------------

//* For multiplication ----------------------------------------

const form3 = document["my-multiply-form"]

// Submit event

form3.addEventListener("submit", function(event){
    event.preventDefault()
    
    const numberOne3 = form3.numberOne3.valueAsNumber
    const numberTwo3 = form3.numberTwo3.valueAsNumber
    form3.numberOne3.value = ""
    form3.numberTwo3.value = ""

    console.log(numberOne3 * numberTwo3)
    
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    // 2. <h1>Answer</h1>
    h1.textContent = (numberOne3 + " x " + numberTwo3 + " = " + (numberOne3 * numberTwo3))
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)
});

//* -----------------------------------------------------------