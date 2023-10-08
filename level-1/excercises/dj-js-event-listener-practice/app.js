document.getElementById("square").addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue"
});

document.getElementById("square").addEventListener("mousedown", function(){
    this.style.backgroundColor = "red"
});

document.getElementById("square").addEventListener("mouseup", function(){
    this.style.backgroundColor = "yellow"
});

document.getElementById("square").addEventListener("dblclick", function(){
    this.style.backgroundColor = "green"
});

document.getElementById("square").addEventListener("wheel", function(){
    this.style.backgroundColor = "orange"
});

document.addEventListener("wheel", function (){
    square.style.backgroundColor = "orange"
});


    
window.addEventListener("keypress", function() {
    if (this.event.key === "b") {
    square.style.backgroundColor = "blue"
    }
});

window.addEventListener("keypress", function() {
    if (this.event.key === "r") {
    square.style.backgroundColor = "red"
    }
});

window.addEventListener("keypress", function() {
    if (this.event.key === "y") {
    square.style.backgroundColor = "yellow"
    }
});

window.addEventListener("keypress", function() {
    if (this.event.key === "g") {
    square.style.backgroundColor = "green"
    }
});

window.addEventListener("keypress", function() {
    if (this.event.key === "o") {
    square.style.backgroundColor = "orange"
    }
});


Object.keys(window).forEach(key => {
     if (/^on/.test(key)) {
         window.addEventListener(key.slice(2), event => {
             console.log(event.type);
         });
     }
 });