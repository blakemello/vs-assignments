import React, { useState, useEffect } from 'react';
import UserMemes from './UserMemes';

export default function MemeForm() {
    
    const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemes, setAllMemes] = useState([])



useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])


function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

function handleSubmit(event) {
    event.preventDefault()
    setMemeList(prevMemeList => {
        return [...prevMemeList,
        <h2 className="finished--toptext" >{meme.topText}</h2>, 
        <img src={meme.randomImage} className="meme--image" id={meme.id}/>, 
        <h2 className="finished--bottomtext">{meme.bottomText}</h2>, 
        <button className='edit--button' onClick={editMeme}>Edit Meme</button>, 
        <button className='delete--button' onClick={deleteMeme}>Delete Meme</button>,
    ]
    })
    setMeme({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })
}

return (
    <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        <div>
            <button 
                    className="form--button"
                    onClick={handleSubmit}
                >
                    Submit Meme
                </button>
            </div>
            <div className='meme--list'>
                Meme List: 
                <UserMemes 
                    
                />
            </div>
    </main>
)
}