const axios = require("axios")

function deleteData() {
    const id = axios.get("https://api.vschool.io/blakemello/todo")
    .then(response => {
    for(let i = 0; i < response.data.length; i++){
            [response.data[i].id]
    }
})
console.log(id)
    axios.delete("https://api.vschool.io/blakemello/todo" + id).then(response => listData()) .catch((err) => console.log(err));
}

deleteData()