import { useState, useEffect, useId } from 'react'
import { EditMeme } from './EditMeme'

export const MemeItem = (props) => {

    const [showForm, setShowForm] = useState(false)

    const handleClickDelete = () => {
        props.deleteMeme(props.id)
    }

    const handleEditSubmit = (id, meme) => {
        props.editMeme(id, meme);
        setShowForm(false)
    }

    return [
        <div>
            <div>
                  <h2 className="finished--toptext" >{props.topText}</h2> 
                  <img src={props.randomImage} className="meme--image" id={props.id}/> 
                  <h2 className="finished--bottomtext">{props.bottomText}</h2> 
                  <button className='edit--button' onClick={() => setShowForm(show => !show)}>{showForm ? 'Hide Editor' : 'Edit'}</button> 
                  <button className='delete--button' onClick={handleClickDelete}>Delete Meme</button>
            </div>
          
        {showForm && <EditMeme
            id={props.id}
            topText={props.topText}
            bottomText={props.bottomText}
            editMeme={handleEditSubmit}
        />}
        </div>
        ]


}