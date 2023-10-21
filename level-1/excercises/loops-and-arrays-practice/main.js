var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

let count = 0;

for ( var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer"){
        count += 1;
    }
};

console.log(count);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];



for (var k = 0; k < peopleWhoWantToSeeMadMaxFuryRoad.length; k++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[k].age < 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[k].name + " is not old enough to see Mad Max.");
    }
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[k].name + " is old enough to see Mad Max.");
    }
};