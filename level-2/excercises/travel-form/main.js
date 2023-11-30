var form = document.getElementById("airlineForm");
var submit = document.getElementById("submit");
var query = document.querySelector;



formAlert = (e) => {

    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;


    var diet = [];
    if (form.elements['vegetarian'].checked) {
        diet.push(document.getElementById("vegetarian").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['kosher'].checked) {
        diet.push(document.getElementById('kosher').value);
    }
    if (form.elements['lactose'].checked) {
        diet.push(document.getElementById('lactose').value)
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDietary Restrictions: " + diet + "\nThank You For Choosing Hunter Airlines" + "\nWe Hope You Have A Safe Flight!");


};



submit.addEventListener("click", formAlert);