import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import { MemeForm } from './components/MemeForm'
import './App.css'
import { MemeList } from './components/MemeList'


export default function App() {

  const [memeList, setMemeList] = useState([])

  const [editedMeme, setEditedMeme] = useState(null)

  // console.log(memeList)
  

  const handleEditItem = (id, edits) => {
    setMemeList((prevMemeList) => {
      return prevMemeList.map((meme) => meme.id === id ? edits : meme)
    })
  }
  
  const handleDeleteItem = (id) => {
    const newList = memeList.filter((submission) => submission.id !== id)
    setMemeList([...newList])
  }
  
  return (
    <div>
          <Header />
          <MemeForm setMemeList={setMemeList} />
          <h3>Meme List:</h3>
          <MemeList items={memeList} editMeme={handleEditItem} deleteMeme={handleDeleteItem}/>
      </div>
  )
}

// const updatedMeme = memeList.find((sumbision) => submision.id === id)
// console.log(updatedMeme)
//  const updatedList = memeList.map((i) => i.id === updatedMeme.id ? i ={id: i.id, meme} : {id: i.id, meme: i.meme})
//  setMemeList(updatedList)
//  setEditedMeme(null)

// const updatedMeme = memeList.find((submission) => submission.id === id)
// setMemeList()

// const edited = memeList.find((submission) => submission.id === id);
// setMemeList(edited.MemeList)
// setEditedMeme(id) 

// const memeListElements = memeList.map(meme => {
//   return [
//     <div>
//           <h2 className="finished--toptext" >{meme.topText}</h2> 
//           <img src={meme.randomImage} className="meme--image" id={meme.id}/> 
//           <h2 className="finished--bottomtext">{meme.bottomText}</h2> 
//           <button className='edit--button' onClick={editMeme}>Edit Meme</button> 
//           <button className='delete--button' onClick={deleteMeme}>Delete Meme</button>
//     </div>
//   ]
// })