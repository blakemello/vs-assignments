import {useState, useEffect, createContext} from 'react';
import axios from "axios"


const Context = createContext()

function ContextProvider(props) {
    const getAllItems = () => axios.get(baseUrl + '/thing').then(res => res.data);

    const addItem = (item) => axios.post(baseUrl + '/thing', item).then(res => res.data);

    const editItem = (id, item) => axios.put(baseUrl + '/thing/' + id, item).then(res => res.data);

    const deleteItem = (id) => axios.delete(baseUrl + '/thing/' + id).then(res => null);

    return(
        <Context.Provider value={{
            getAllItems: getAllItems,
            addItem: addItem,
            editItem: editItem,
            deleteItem: deleteItem,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}