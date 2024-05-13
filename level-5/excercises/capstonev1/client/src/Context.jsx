import { createContext } from 'react';
import axios from "axios"
import React, { useState, useEffect } from 'react'

const Context = createContext()

function ContextProvider(props) {

    const [all, setAll] = useState([])

    const getAll = () => axios.get('/capstone').then(res => setAll(res.data)).catch(err => console.log(err));

    const addItem = (item) => axios.post('/capstone', item).then(res => setAll(prevAll => [...prevAll, res.data])).catch(err => console.log(err));

    //const editItem = (id, item) => axios.put('/capstone' + id, item).then(res => res.data).catch(err => console.log(err));
    const editItem = ( updates, id  ) => axios.put(`/capstone/${id}`, updates).then(res => setAll(prevAll => prevAll.map(all => all._id !== id ? all : res.data))).catch(err => console.log(err));;
    //res => setAll(prevAll => prevAll.map(all => all._id !== id ? all : res.data))).catch(err => console.log(err));
    //res => console.log(`updates: ${updates}`));

    const deleteItem = (id) => axios.delete(`/capstone/${id}` ).then(res => {setAll(prevAll => prevAll.filter(all => all._id !== id))}).catch(err => console.log(err));

    useEffect(() => {
        getAll()
      }, [])
    

    return(
        <Context.Provider value={{
            all: all,
            getAll: getAll,
            addItem: addItem,
            editItem: editItem,
            deleteItem: deleteItem,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}