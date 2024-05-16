import React, { useState, useEffect, useContext } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import HomePage from './HomePage'
import Form from './Form'
import { Context, ContextProvider } from '../Context';

export default function Home(props){

  const { all, getAll, addItem, editItem, deleteItem } = useContext(Context)
  
  const [editToggle, setEditToggle] = useState(false)

  const things = all.map(all => (
    <h2 key={all._id}>
      <Link to={`/list/${all._id}`}>
        {all.title}
      </Link>
        <br></br>
        <button
          className='delete-btn'
          onClick={() => deleteItem(all._id)}
        >
          Delete
        </button>
        <button
          className='edit-btn'
          onClick={() => setEditToggle(prevToggle => !prevToggle)}
        >
          Edit
        </button>
    </h2>
  ))

  return(
    <div className="App">
    <div className='container'>
      <h1></h1>
      <Form
        submit={addItem}
        btnText="Add To List"
      />

      <h1>Things To Do:</h1>
      {things}
      {/* {all.map(all =>
        <HomePage
          {...all}
          key={all._id}
        />)} */}
    </div>
  </div>
  )
}