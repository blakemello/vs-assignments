import React from 'react'
import ReactDOM from 'react-dom/client'
import FriendList from './FriendList.jsx'
import data from './data.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FriendList />
  </React.StrictMode>,
)
