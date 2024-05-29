// 1) Extract Initials:
//     Write a function called **`extractInitials`** that takes an array of full names 
//     and returns a new array containing only the initials of each name.

function extractInitials(names) {
    const firstLetter = names.join(', ').split(' ').map(i => i.charAt(0))
    const result = []
    for(i=0; i< firstLetter.length; i++){
      if(i % 2 === 1 ){
        result.push(firstLetter[i-1]+firstLetter[i])
      }
    }
    console.log(result)

    return names.map( name => {
      //returns arr of arr of strings
      const part = name.split(' ')
    // returns arr of arr of first initials        returns arr of strings
      const initials = part.map( part => part[0]).join('')
      return initials
    })
};


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']



// 2) Filter Object Array by Property:
//     Write a function called **`filterByProperty`** that takes an array of objects and a property name as input.
//     The function should return a new array containing only the objects that have a specific value for the given property.



function filterByProperty(objects, propertyName, propertyValue) {
    const result = objects.filter(object => object[propertyName] === propertyValue)
    return result;
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);