import {useState, useEffect, createContext} from 'react';
import { v4 as uuidv4 } from 'uuid'
import axios from "axios"


const ThemeContext = createContext()

function ThemeContextProvider(props) {

    const getAllItems = () => axios.get(baseUrl + '/thing').then(res => res.data);
    
    const addItem = (item) => axios.post(baseUrl + '/thing', item).then(res => res.data);
    
    const editItem = (id, item) => axios.put(baseUrl + '/thing/' + id, item).then(res => res.data);
    
    const deleteItem = (id) => axios.delete(baseUrl + '/thing/' + id).then(res => null);

    const [uglyThing, setUglyThing] = useState({
        title: '',
        imgUrl: '',
        description: '',
    })

const [allUglyThings, setAllUglyThings] = useState([])

const [showForm, setShowForm] = useState(false)

const uglyThingsList = allUglyThings.map(b => 
<div key={b._id}>
    <h2>{b.title}</h2>
    <img src={b.imgUrl} width={200} />
    <p>{b.description}</p>
    <button onClick={() => deleteItem(b._id)}>X</button>
    <button onClick={() => setShowForm(show => !show)}>{showForm ? 'Hide Form' : 'Edit'}</button>
</div>
)


console.log(uglyThing)
console.log(allUglyThings)    

const baseUrl = "https://api.vschool.io/blakemello"

useEffect(() => {
    fetch(baseUrl + '/thing')
        .then(res => res.json())
        .then(data => setAllUglyThings(data))
}, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        addItem(uglyThing)

        setUglyThing({
            title: '',
            imgUrl: '',
            description: '',
        })
    
        useEffect(() => {
            fetch(baseUrl + '/thing')
                .then(res => res.json())
                .then(data => setAllUglyThings(data))
        }, [])   
    }

    const handleEditSubmit = (id, fields) => {
        editItem(id, fields);
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUglyThing(prevUglyThing => ({
            ...prevUglyThing,
            [name]: value
        }))
    }


    
    return(
        <ThemeContext.Provider value={{
            uglyThing: uglyThing,
            allUglyThings: allUglyThings,
            uglyThingsList: uglyThingsList,
            showForm: showForm,
            handleSubmit: handleSubmit,
            handleEditSubmit: handleEditSubmit,
            handleChange: handleChange,
            getAllItems: getAllItems,
            addItem: addItem,
            editItem: editItem,
            deleteItem: deleteItem,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}