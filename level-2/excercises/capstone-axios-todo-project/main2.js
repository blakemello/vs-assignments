// printHelloWorld = () =>	console.log("Hello World!");

// printHelloWorld();
//const axios = require("axios")

//console.log(axios)

getData = () => {
    axios.get("https://api.vschool.io/blakemello/todo")
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
}

listData = () => {

    clearList()

    axios.get("https://api.vschool.io/blakemello/todo")
        .then(response => {
        for(let i = 0; i < response.data.length; i++){
                // creates new element with the todo oject as the text
            const h2 = document.createElement('h2')
            h2.textContent = [response.data[i]]
            h2.id = 'listed-item'
                //attaches a delete button to it
            // const deleteButton = document.createElement('button')
            // deleteButton.id = 'delete-button'
            // deleteButton.textContent = 'Delete Item';
                //attached done button to it
            // const doneCheckbox = document.createElement('input')
            // doneCheckbox.setAttribute("type", "checkbox")
            // doneCheckbox.id = 'done-button'
            // doneCheckbox.textContent = 'Done Item';
                // adds all to the webpage
            document.getElementById('todo-list').appendChild(h2)
            addButtons()
            //deleteData()
            //document.body.appendChild(deleteButton)
            //document.body.appendChild(doneCheckbox)
            //document.getElementById('listed-item').appendChild(deleteButton)
            //document.getElementById('listed-item').appendChild(doneCheckbox)
            // checks completetion status and applies strike through if
            // task is finished
            if (response.data[i].completed === true){
                h2.classList.add("line-through")
            }
        }
    })
}

addButtons = () => {
    const deleteButton = document.createElement('button')
    deleteButton.id = 'delete-button'
    deleteButton.textContent = 'Delete Item';
    document.getElementById('todo-list').appendChild(deleteButton)

    const doneCheckbox = document.createElement('input')
    doneCheckbox.setAttribute("type", "checkbox")
    doneCheckbox.id = 'done-button'
    doneCheckbox.textContent = 'Done Item';
    document.getElementById('todo-list').appendChild(doneCheckbox)
}

clearList = () => {
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

listData()

const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
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

    axios.post("https://api.vschool.io/blakemello/todo", newTodo)
        .then(response => listData())
        .catch(err => console.log(err))
})

const button = document.getElementById('delete-button')

deleteData = () => {
    button.addEventListener("click", function(){
        axios.delete("https://api.vschool.io/blake/todo/" + (response.data[i]._id))
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    })
}