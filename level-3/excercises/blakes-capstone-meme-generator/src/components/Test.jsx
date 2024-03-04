import { useState, useEffect } from 'react'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = useState([])
        
    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const [memeList, setMemeList] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        setMemeList(prevMemeList => {
            return [...prevMemeList, 
            <h2 className="finished--toptext">{meme.topText}</h2>, 
            <img src={meme.randomImage} className="meme--image" />, 
            <h2 className="finished--bottomtext">{meme.bottomText}</h2>, 
            <button className='edit--button' onClick={editMeme}>Edit Meme</button>, 
            <button className='delete--button' onClick={deleteMeme}>Delete Meme</button>,
            {meme, id: `${meme}-${Math.floor(Math.random() * 99)}`}
        ]
        })
        setMeme({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        })

        // if(editedMeme) {
        //     const edited = memeList.find((i) => i.id === editedMeme)
        //     const updatedMeme = memeList.map((t) => t.id === edited.id ? t= {id: t.id, meme} : {id: t.id, meme: t.meme})
        //     setMemeList(updatedMeme)
        //     setEditedMeme(0)
        //     return
        // }
    }

    const listedMemes = memeList.map(submission =>  <div key={submission}>{submission}</div>)

    const [editedMeme, setEditedMeme] = useState(0)

    function editMeme(id) {
        const edited = memeList.find((i) => i.id === id);
        setMeme(edited.meme)
        setEditedMeme(id)
    }

    function deleteMeme(id) {
       const newList = memeList.filter((submission) => submission.id !== id)
       setMemeList([...newList])
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
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
                {listedMemes}
            </div>
        </main>
    )
}