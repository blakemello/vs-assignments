import { useState } from 'react'
import React from 'react'
import Header from './Header'
import BlogList from './BlogList'
import BlogPost from './BlogPost'
import Footer from './Footer'
import data from './data'
import './App.css'

function App() {
  const blogData = data.map(item => {
    return (
      <BlogPost
        key={item.id}
        {...item}
        // title = {item.title}
        // subTitle = {item.subTitle}
        // author = {item.author}
        // date = {item.date}
      />
    )
  })

  return (
    <div>
      <Header />
      <div>
      <BlogList />
      </div>
      <Footer />
    </div>
    
  )
}

export default App
