import { useState, useEffect, useId } from 'react'

export default function Meme() {

    // renders the intial meme as a blank image below the input form

    

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
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
            randomImage: url,
        }))
    }

    const [memeList, setMemeList] = useState([])

    function handleSubmit(event) {
        const id = () => Date.now()
        event.preventDefault()
        setMemeList(prevMemeList => {
            return [...prevMemeList,
            <div id={id}>
            <h2 className="finished--toptext" >{meme.topText}</h2>, 
            <img src={meme.randomImage} className="meme--image" id={meme.id}/>, 
            <h2 className="finished--bottomtext">{meme.bottomText}</h2>, 
            <button className='edit--button' onClick={editMeme}>Edit Meme</button>, 
            <button className='delete--button' onClick={deleteMeme}>Delete Meme</button>,
            </div>
        ]
        })
        setMeme({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
        })
    }

    const listedMemes = memeList.map(submission =>  <div key={[0]}>{submission}</div>)

    console.log(memeList)



    function editMeme(id) {
        const edited = memeList 
    }

    function deleteMeme(id) {
       const newList = memeList.filter((item) => item.id !== id)
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