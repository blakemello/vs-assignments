//couldn't get document["add-todo"] working

const form = document.getElementById("add-todo");

//


// Submit event

form.addEventListener("submit", (e) => {
//document.getElementById("add-todo").addEventListener("submit", function(e) {
    e.preventDefault();
//    alert("Hi Mom!");
// let deleteItem = (d) => {
//     document.getElementById("list").removeChild(newItem)
// }
// setting the text from the form box to a varible for easier recall
    const grocery = form.title.value;
    
//    console.log(grocery);
    form.title.value = "";

// creates a new list tag ussing the css already refrenced
    const newItem = document.createElement("li");

//creates a new division so they don't all end up on the same line
    const newDiv = document.createElement("div");

//adds a button to the function that can be appended later, 
//as well as adding the text and a function, d, to remove
//the item
    const xButton = document.createElement("button");
    xButton.textContent = "Delete Item";
    xButton.addEventListener("click", function(d){
        document.getElementById("list").removeChild(newItem);
    });

//adds another button for editing the item on the list
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Item";

// EXTRA CREDIT
    editButton.addEventListener("click", (q) => {
        document.body.createElement("form");

    });
// EXTRA CREDIT

//Make sure the new list item uses the value from the form box using the
//'grocery' var
    newDiv.textContent = grocery;

//adding the buttons and a html div to read translate the text
//to the page
    newItem.appendChild(newDiv);
    newItem.appendChild(editButton);
    newItem.appendChild(xButton);
    
// should add to list area
    document.getElementById("list").appendChild(newItem);


});

