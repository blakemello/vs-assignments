import React, { useState, useEffect, useContext } from 'react'
import HomePage from './HomePage'
import Form from './Form'
import { Context, ContextProvider } from '../Context';

export default function Home(props){

  const { all, getAll, addItem, editItem, deleteItem } = useContext(Context)

  return(
    <div className="App">
    <div className='container'>
      <h1></h1>
      <Form
        submit={addItem}
        btnText="Add To List"
      />

      <h1>Things Available</h1>
      {all.map(all =>
        <HomePage
          {...all}
          key={all._id}
        />)}
    </div>
  </div>
  )
}