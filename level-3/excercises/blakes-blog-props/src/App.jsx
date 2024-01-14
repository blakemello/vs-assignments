import { useState } from 'react'
import Header from './Header'
import BlogList from './BlogList'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
    
  )
}

export default App
