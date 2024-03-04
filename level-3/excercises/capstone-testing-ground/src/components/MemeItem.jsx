import { useState, useEffect, useId } from 'react'
import { EditMeme } from './EditMeme'
import { editMeme } from '../http'

export const MemeItem = (props) => {

    const [showForm, setShowForm] = useState(false)

    const handleClickDelete = () => {
        props.deleteMeme(props.id)
    }

    const handleEditSubmit = (meme) => {
        props.editMeme(props.id, meme);
        setShowForm(false)
        console.log(meme)
    }

    return [
        <div>
        {!showForm ? 
            <div>
                  <h2 className="finished--toptext" >{props.topText}</h2> 
                  <img src={props.randomImage} className="meme--image" id={props.id}/> 
                  <h2 className="finished--bottomtext">{props.bottomText}</h2> 
                  <button className='edit--button' onClick={() => setShowForm(show => !show)}>{showForm ? 'Hide Editor' : 'Edit'}</button> 
                  <button className='delete--button' onClick={handleClickDelete}>Delete Meme</button>
            </div> :
          <EditMeme
            id={props.id}
            topText={props.topText}
            bottomText={props.bottomText}
            randomImage={props.randomImage}
            editMeme={handleEditSubmit}
        />}
        </div>
        ]


}