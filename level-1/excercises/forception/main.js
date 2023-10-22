 var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];

 var alphabet = "abcdefghijklmnopqrstuvwxyz";



 function forception(people, alphabet){
     var answer = [];
    var upperCase = alphabet.toUpperCase();
    for (var i = 0; i < people.length; i++) {
         answer.push(people[i] + ": ".concat(upperCase.split("")))
          }
          return answer;
     };

 console.log(forception(people, alphabet));

 //deffo didn't do this right ask about later