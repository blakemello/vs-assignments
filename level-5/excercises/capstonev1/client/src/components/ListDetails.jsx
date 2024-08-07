import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Context } from '../Context';

export default function ListDetails(props) {

    const { all } = useContext(Context)

    const { listId } = useParams()
    const foundList = all.find(list => list._id === listId)

    const navigate = useNavigate()

    return(
        <div className="App">
            <h1>{foundList.title} </h1>
            <img src={foundList.imgUrl} width={250}/>
            <p>{foundList.description}</p>
            <p>{foundList.completed ? "Done" : "Incomplete"}</p>
            <br></br>

            <br></br>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}