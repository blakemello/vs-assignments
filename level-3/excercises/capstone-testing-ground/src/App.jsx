import { useEffect, useState } from "react";
import { List } from "./components/List"
import { NewForm } from "./components/NewForm";
import { addItem, deleteItem, editItem, getAllItems } from "./https";

function App() {

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
      <NewForm addItem={handleAddItem} />
      <List items={items} editItem={handleEditItem} deleteItem={handleDeleteItem}/>
    </div>
  )
}

export default App
