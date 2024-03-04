import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EditMeme = (props) => {

const [meme, setMeme] = useState({
    topText: props.topText,
    bottomText: props.bottomText,
    randomImage: props.randomImage,
    id: props.id
})

function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}




function handleSubmit(event) {
    event.preventDefault()
    props.editMeme(meme)
    // console.log(meme)
}

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
            randomImage: url,
        }))
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
                type='submit'
                className="form--button"
                onClick={handleSubmit}
            >
                Save
            </button>
        </div>
    </main>
)
}