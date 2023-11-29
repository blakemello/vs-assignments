function printHelloWorld() {
	console.log("Hello World!");
}

printHelloWorld();

document.getElementById("Intro").addEventListener("mouseover", function(){
	this.style.backgroundColor = "white"
});

document.getElementById("Intro").addEventListener("mouseleave", function(){
	this.style.backgroundColor = "grey"
});

document.getElementById("About").addEventListener("mouseover", function(){
	this.style.backgroundColor = "white"
});

document.getElementById("About").addEventListener("mouseleave", function(){
	this.style.backgroundColor = "grey"
});

document.getElementById("Contact").addEventListener("mouseover", function(){
	this.style.backgroundColor = "white"
});

document.getElementById("Contact").addEventListener("mouseleave", function(){
	this.style.backgroundColor = "grey"
});