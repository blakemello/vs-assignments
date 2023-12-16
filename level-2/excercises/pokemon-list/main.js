//require axios from 'axios';

// import 'regenerator-runtime/runtime';
// import axios from 'axios';

//const axios = require("axios")
//Step One ------------------------------------------------------------------------
// Write a function that runs an axios get request, the response data will be structured like this:
// {
//     name: 'Charmander',
//     resource_uri: 'api/v1/pokemon/8/'
// },
// {(Another pokemon object)},
// {(Another pokemon object)},
// {(Another pokemon object)},
// ...
// etc.

// WORKS --------------------
 axios.get("https:api.vschool.io/pokemon")
       //gets first name of first pokemon  
      .then(response => console.log(response.data.objects[0].pokemon))
      .catch(error => console.log(error))


    //  # **Step Two** ---------------------------------------------------------------------------

    //  Make each Pokémon's name show up on a separate line in the browser.

axios.get("https://api.vschool.io/pokemon")
    .then(response => {
        // creates a for loop for the data
        for(let i = 0; i < response.data.objects[0].pokemon.length; i++){
            // makes sure the fuction works
            //const test = response.data.objects[0].pokemon[i].name
            //console.log(test)
             const h1 = document.createElement('h1')
             // runs through the pokemon object and grabs the name
             h1.textContent = response.data.objects[0].pokemon[i].name
             document.body.appendChild(h1)
            // console.log(h1.textContent)
        }
    })
    .catch(error => console.log(error))
