import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: '',
    birthplace: "",
    phone: "",
    favortiteFood: "",
    aboutYou: "",
})

const [allSubmissions, setAllSubmissions] = useState([])

function handleChange(event) {
  const {name, value, type, checked} = event.target
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: type === "checkbox" ? checked : value
  }))
}

// const clearList = () => {
//   const el = document.getElementById('form-id')
//     while (el.firstChild) {
//         el.removeChild(el.firstChild)
//     }
// }

function handleSubmit(event) {
  event.preventDefault()
  // clearList()
  setAllSubmissions(prevAllSubmissions => {
    return [...prevAllSubmissions, `Badge:`, ``, `Name ${formData.firstName + " " + formData.lastName}`, `Phone: ${formData.phone}`, `Place of birth: ${formData.birthplace}`, `Favorite food: ${formData.favortiteFood}`, `Email: ${formData.email}`, ``, `${formData.aboutYou}`]
  })
  setFormData({
    firstName: "",
    lastName: "",
    email: '',
    birthplace: "",
    phone: "",
    favortiteFood: "",
    aboutYou: "",
})
}

const addSubmissions = allSubmissions.map(submission => <p key={submission}>{submission}</p>)

console.log(formData)

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} id='form-id'>
        <input
          type="text"
          placeholder="First Name"
          name='firstName'
          onChange={handleChange}
          value={formData.firstName}
          required
          minLength={3}
        />
        <input
          type="text"
          placeholder="Last Name"
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
          required
          minLength={3}
        />
        <br></br>
        <input
          type="email"
          placeholder="Email"
          name='email'
          onChange={handleChange}
          value={formData.email}
          required
          minLength={3}
        />
        <input
          type="text"
          placeholder="Place of Birth"
          name='birthplace'
          onChange={handleChange}
          value={formData.birthplace}
          required
          minLength={3}
        />
        <br></br>
        <input
          type="number"
          placeholder="Phone Number xxxxxxxxx No Hypens"
          name='phone'
          onChange={handleChange}
          value={formData.phone}
          required
          minLength={3}
        />
        <input
          type="text"
          placeholder="Favorite Food"
          name='favortiteFood'
          onChange={handleChange}
          value={formData.favortiteFood}
          required
          minLength={3}
        />
        <br></br>
        <textarea
          rows={5}
          cols={45}
          type="text"
          placeholder="Tell us about yourself"
          name='aboutYou'
          onChange={handleChange}
          value={formData.aboutYou}
          required
          minLength={3}
        />
        <br></br>
        <button type='submit'>Submit</button>
      </form>
      <div className='submitted--badge'>
        {addSubmissions}
      </div>
    </div>
  )
}

export default App
