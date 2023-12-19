// printHelloWorld = () =>	console.log("Hello World!");

//const { default: axios } = require("axios")

// printHelloWorld();
//const axios = require("axios")

//console.log(axios)

const myUrl = "https://api.vschool.io/blakemello/todo/"


const getData = () => {
    axios.get(myUrl)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
}

const renderData = () => {
    
}

const listData = () => {

    clearList()

    axios.get(myUrl)
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                // creates new element with the todo oject as the text
                const h2 = document.createElement('h2')
                h2.textContent = JSON.stringify(response.data[i])
                h2.id = 'listed-item'
                // adds all to the webpage
                document.getElementById('todo-list').appendChild(h2)
                addButtons(response.data[i]._id)
                // checks completetion status and applies strike through if
                // task is finished
                if (response.data[i].completed === true) {
                    h2.classList.add("line-through")
                }
            }
        })
}

//adds buttons to each object

const addButtons = (id) => {
    const deleteButton = document.createElement('button')
    deleteButton.id = 'delete-button'
    deleteButton.textContent = 'Delete Item';
    document.getElementById('todo-list').appendChild(deleteButton)
    deleteButton.addEventListener('click', deleteData(id))

    const doneCheckbox = document.createElement('input')
    doneCheckbox.setAttribute("type", "checkbox")
    doneCheckbox.id = 'done-button'
    doneCheckbox.textContent = 'Done Item';
    document.getElementById('todo-list').appendChild(doneCheckbox)
    doneCheckbox.addEventListener('click', markComplete())
}

const clearList = () => {
    const el = document.getElementById('todo-list')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

listData()

const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""

    axios.post(myUrl, newTodo)
        .then(response => listData())
        .catch(err => console.log(err))
})



// deleteData = () => {
//     axios.get(myUrl)
//     .then(response => {
//     for(let i = 0; i < response.data.length; i++){
//         let deleteID = response.data[i].id
//         deleteID
//     }
//     })
// }

function deleteData(id) {
    // const id = axios.get(myUrl)
    //     .then(response => {
    //         for (let i = 0; i < response.data.length; i++) {
    //             [response.data[i]._id]
    //         }

    //     })
    //console.log(id)
    axios.delete(myUrl + id)
        .then(response => listData())
        .catch((err) => console.log(err));
}

const updates = {
    completed: true
}

// function markComplete() {
//     const id = axios.get(myUrl._id)
//     axios.put(myUrl + id, updates)
//         .then(response => response.data)
//         .catch(err => console.log(err))
// }
// //   document.getElementById('delete-button').addEventListener ('click', function() {
//      deleteData()
//   })