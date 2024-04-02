import { useContext, useEffect, useState } from "react";
import { List } from "./components/List"
import { NewForm } from "./components/NewForm";
import { addItem, deleteItem, editItem, getAllItems } from "./http";
import { Context, ContextProvider } from './Context'

function App() {

  // const { addItem, deleteItem, editItem, getAllItems } = useContext(Context)

  const [items, setItems] = useState([]);

  const initializeItems = () => {
    getAllItems().then(items => setItems(items))
  }

  const handleAddItem = (newItem) => {
    addItem(newItem).then(savedItem => setItems(prev => [...prev, savedItem]))
  }

  const handleEditItem = (id, updatedFields) => {
    editItem(id, updatedFields).then(savedItem => {
      setItems(prev => prev.map(item => item._id === id ? savedItem : item))
    })
  }

  const handleDeleteItem = (id) => {
    deleteItem(id).then(() => setItems(prev => prev.filter(item => item._id !== id)))
  }

  useEffect(() => {
    initializeItems();
  }, [])


  return (
    <div>
      <ContextProvider>
      <NewForm addItem={handleAddItem} />
      <List items={items} editItem={handleEditItem} deleteItem={handleDeleteItem}/>
      </ContextProvider>
    </div>
  )
}

export default App
