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

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div className="App">
      <div className='bounties-container'>
        <AddBountiesForm
          addBounties={addBounties}
        />
        {bounties.map(bounty =>
          <Bounties
            {...bounty}
            key={bounty._id}
            deleteBounties={deleteBounties}
          />)}
      </div>
    </div>
  );
}

export default App;
