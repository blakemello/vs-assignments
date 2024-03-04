import { useState, useEffect, useId } from 'react'

export default function Meme() {

    // renders the intial meme as a default image below the input form

    

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        id: ''
    })

    const [allMemes, setAllMemes] = useState([])
        
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const random = allMemes[randomNumber]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: random.url,
            id: random.id
        }))
    }

    const [memeList, setMemeList] = useState([])

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

    const listedMemes = memeList.map(submission =>  <div key={submission.id}>{submission}</div>)

    //console.log(listedMemes[0].props.children.props.id)



    function editMeme(id) {
        const edited = memeList.find((i) => i.id === id);
        setMeme(edited.meme)
        setEditedMeme(id)
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
    
// display for whole page
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
                    Submit Meme
                </button>
            </div>
            {/* Displays the list on the DOM */}
            <div className='meme--list'>
                Meme List: 
                {listedMemes}
            </div>
        </main>
    )
}