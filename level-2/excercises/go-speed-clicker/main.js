printHelloWorld = () =>	console.log("Hello World!");

printHelloWorld();


 window.addEventListener("click", function(){ 
     var numberOfClicks;
     if(localStorage.getItem('myClicks')) {
         numberOfClicks = parseInt(localStorage.getItem('myClicks'))
     }
     else{
         numberOfClicks = 0
     }
     var newNumberOfClicks = numberOfClicks  + 1;
     localStorage.setItem('myClicks', newNumberOfClicks);
     console.log(newNumberOfClicks);
     this.alert("Curret number of clicks is : " + newNumberOfClicks);


 })

 function stopCounting() {
    localStorage.clear("myClicks")
}

setTimeout(stopCounting, 10000)

setTimeout(function(){
    console.log('Clicks CLeared!');
    alert('Clicks CLeared!');
 }, 10000);