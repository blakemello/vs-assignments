import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const MemeForm = (props) => {

    // sets the state for the form inputs
const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    id: uuidv4()
})

    // catches input values and stores them in state
function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

    // new state to hold data from server
const [allMemes, setAllMemes] = useState([])

    //fetches data from server and stores it in new state
useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
}, [])

    //math function to grab a rand url at whatever index the random number lands on
function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    const id = allMemes[randomNumber].id
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url,
    }))
}

    // added to submit button 
function handleSubmit(event) {
    event.preventDefault()
    props.setMemeList(prevMemeList => {
        return [
            ...prevMemeList,
            meme,
        ]
    })

    setMeme({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        id: uuidv4()
    })
}

return (
    <main>
        {/* Shows the form for the meme edit */}
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
            {/* Submits the meme to the list */}
        <button 
                className="form--button"
                onClick={handleSubmit}
            >
                Submit Meme
            </button>
        </div>
        
    </main>
)
}