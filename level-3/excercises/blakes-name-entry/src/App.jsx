import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
      firstName: ""
  })

  const [allSubmissions, setAllSubmissions] = useState([])

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event) {
    // console.log('handleSubmit')
    event.preventDefault()
    setAllSubmissions(prevAllSubmissions => {
      return [...prevAllSubmissions, formData.firstName]
    })
  }
  
  const addName = allSubmissions.map(submission => <h1 key={submission}>{submission}</h1>)
  
  // const addName = formData.firstName
  
  //  console.log("all submissions", allSubmissions)

  return (
    <div>
      <form>
      <input 
        type="text"
        placeholder='Input Name'
        name='firstName'
        onChange={handleChange}
        value={formData.firstName}
      />
      <br></br>
      <button onClick= {(event) => handleSubmit(event)}>Submit</button>
      </form>
      <h1>{formData.firstName}</h1>
      <br></br>
      {addName}
    </div>
  )
}

export default App
