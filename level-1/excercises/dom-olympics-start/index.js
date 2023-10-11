var credit = document.createElement("h2")
credit.textContent = "<span class = name>Blake</span> wrote the JavaScript"
document.body.prepend(credit)
credit.style.textAlign = "center";

var header = document.createElement("h1")
header.textContent = "JavaScript Made This!!"
document.body.prepend(header)
header.style.textAlign = "center";

//getElementById("header").style.textAlign = "center";

document.getElementById("clear-button").addEventListener("click", function clear(){
    document.getElementById("messages").innerHTML="";
});

document.getElementById("messages").textContent = "something fun and good.";
//"function(){
//    this.textContent = "something fun and good"
//});