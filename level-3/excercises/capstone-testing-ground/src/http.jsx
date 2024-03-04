import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'


export const editMeme = (id) => {
    const [editedMeme, setEditedMeme] = useState(0)
    const updatedMeme = memeList.find((sumbision) => submision.id === id)
    console.log(updatedMeme)
    const updatedList = memeList.map((i) => i.id === updatedMeme.id ? i = { id: i.id, meme } : { id: i.id, meme: i.meme })
    setMemeList(updatedList)
    setEditedMeme(null)
}