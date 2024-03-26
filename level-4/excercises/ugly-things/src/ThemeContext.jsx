import {useState, useEffect, createContext} from 'react';
import { v4 as uuidv4 } from 'uuid'
import axios from "axios"


const ThemeContext = createContext()

function ThemeContextProvider(props) {

    const [thing, setThing] = useState({
        title: '',
        imgUrl: '',
        description: '',
        //id: uuidv4(),
    })

    const [listedThings, setListedThings] = useState([])

    console.log(thing)
    console.log(listedThings)
    
    const thingsList = listedThings.map(b => <main key={b.id}>
        <h2>{b.title}</h2>
        <img src={b.imgUrl} width={200} />
        <p>{b.description}</p>
    </main>)
    //console.log(thingsList)

    const handleSubmit = (e) => {
        e.preventDefault()
        // setListedThings(prevListedThing => {
        //     return [
        //         ...prevListedThing,
        //         thing
        //     ]
        // })

        addItem()

        setThing({
            title: '',
            imgUrl: '',
            description: '',
           // id: uuidv4(),
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setThing(prevThing => ({
            ...prevThing,
            [name]: value
        }))
    }

const [allUglyThings, setAllUglyThings] = useState([])

    

const baseUrl = "https://api.vschool.io/blakemello"


const getAllItems = () => axios.get(baseUrl + '/thing').then(res => res.data);

const addItem = (item) => axios.post(baseUrl + '/thing', item).then(res => res.data);

const editItem = (id, item) => axios.put(baseUrl + '/thing/' + id, item).then(res => res.data);

const deleteItem = (id) => axios.delete(baseUrl + '/thing/' + id).then(res => null);


    
    return(
        <ThemeContext.Provider value={{
            thing: thing,
            listedThings: listedThings,
            thingsList, thingsList,
            handleSubmit: handleSubmit,
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