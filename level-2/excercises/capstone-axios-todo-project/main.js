// printHelloWorld = () =>	console.log("Hello World!");

//const { default: axios } = require("axios")

//const { default: axios } = require("axios")

// printHelloWorld();
//const axios = require("axios")

//console.log(axios)

const myUrl = "https://api.vschool.io/blakemello/todo/"

// makes sure link is working
const getData = () => {
    axios.get(myUrl)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
}

// possible make display better looking
const renderData = () => {
    
}

// posts the JSON file to the html
const listData = () => {

    clearList()

    axios.get(myUrl)
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                // creates new element with the todo oject as the text
                const h2 = document.createElement('h2')
                const h22 = document.createElement('h3')
                const h23 = document.createElement('h3')
                const h24 = document.createElement('img')
                const h25 = document.createElement('h3')
                h2.textContent = (response.data[i].title)
                h22.textContent = ("Price: $" + response.data[i].price)
                h23.textContent = ("Decription: " + response.data[i].description)
                h24.src = (response.data[i].imgUrl)
                h25.textContent = ("completed: " + response.data[i].completed)
                h2.id = 'listed-item'
                // adds all to the webpage
                document.getElementById('todo-list').appendChild(h2)
                document.getElementById('todo-list').appendChild(h22)
                document.getElementById('todo-list').appendChild(h23)
                document.getElementById('todo-list').appendChild(h24)
                document.getElementById('todo-list').appendChild(h25)
                //changeStatus(response.data[i].completed)
                addButtons(response.data[i]._id)
                // checks completetion status and applies strike through if
                // task is finished
                if (response.data[i].completed === true) {
                    h2.classList.add("line-through")
                    h22.classList.add("line-through")
                    h23.classList.add("line-through")
                    h25.style.color = "green"
                }
                else {
                    h25.style.color = "red"
                }
            }
        })
}



// test image url: https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png
//adds buttons to each object

const addButtons = (id) => {
    const deleteButton = document.createElement('button')
    deleteButton.id = 'delete-button'
    deleteButton.textContent = 'Delete Item';
    document.getElementById('todo-list').appendChild(deleteButton)
    deleteButton.addEventListener('click', function(e){
        e.stopPropagation()
        deleteData(id)
    })

    const doneCheckbox = document.createElement('input')
    doneCheckbox.setAttribute("type", "checkbox")
    doneCheckbox.id = 'done-button'
    doneCheckbox.textContent = 'Done Item';
    //const doneLabel = document.createElement('label')
    //label.htmlFor = "doneCheckbox"
    document.getElementById('todo-list').appendChild(doneCheckbox)
    //document.getElementById('done-button').appendChild(doneLabel)
    doneCheckbox.addEventListener('click', function(e){
        e.stopPropagation()
        markComplete(id)
    })

    const notDoneCheckbox = document.createElement('input')
    notDoneCheckbox.setAttribute("type", "checkbox")
    notDoneCheckbox.id = 'not-done-button'
    notDoneCheckbox.textContent = 'Not Done Item';
    document.getElementById('todo-list').appendChild(notDoneCheckbox)
    notDoneCheckbox.addEventListener('click', function(e){
        e.stopPropagation()
        markIncomplete(id)
    })
}


//clears the list so it doesn't double post all prior 
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

 
 const trueUpdates = {
     completed: true
 }

 const markComplete = (id) => {
           axios.put(myUrl + id, trueUpdates)
           .then(response => alert("This items status has been updated to complete"))
           .catch(err => console.log(err))
           autoRefresh()
  }

 const flaseUpdates = {
     completed: false
 }

 const markIncomplete = (id) => {
     axios.put(myUrl + id, flaseUpdates)
     .then(response => alert("This items status has been updated to incomplete"))
     .catch(err => console.log(err))
     autoRefresh()
 }

// tried to make it a single click option but decided two boxes was easier for all involved
// const changeStatus = (id) => {
//     const updates = {
//         completed: !id.target.value
//     }
//     axios.put(myUrl + id, updates)
// }

//const deleteyboi = document.getElementById('delete-button')

//deleteyboi.addEventListener('click', deleteData(id))

 const deleteData = (id) => {
      axios.delete(myUrl + id)
      .then(response => alert("Item has been deleted"))
      .catch(err => console.log(err))
      autoRefresh()
}

const autoRefresh = () => {
    refresh(function(){
        location.reload()
    }, 500)    
}