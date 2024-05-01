import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import axios from 'axios'
import Bounties from './components/Bounties'
import AddBountiesForm from './components/AddBountiesForm';
import './App.css';

function App() {

  const [bounties, setBounties] = useState([])

  function getBounties(){
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounties(newBounties){
    axios.post("/bounties", newBounties)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBounties(bountiesId) {
    axios.delete(`/Bounties/${bountiesId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounties => bounties._id !== bountiesId))
      })
      .catch(err => console.log(err))
  }

  function editBounties(updates, bountiesId) {
    console.log('updates:', updates)
    axios.put(`/bounties/${bountiesId}`, updates)
       .then(res => {
         setBounties(prevBounties => prevBounties.map(bounties => bounties._id !== bountiesId ? bounties : res.data))
       })
      //.then(res => console.log('response:', res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div className="App">
      <div className='bounties-container'>
        <h1>Add New Bounties</h1>
        <AddBountiesForm
          submit={addBounties}
          btnText="Add Bounty"
        />
        {bounties.map(bounty =>
          <Bounties
            {...bounty}
            key={bounty._id}
            deleteBounties={deleteBounties}
            editBounties={editBounties}
          />)}
      </div>
    </div>
  );
}

export default App;
