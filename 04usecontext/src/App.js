import React, { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css';

const App = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="App">
      {showProfile ? <Profile /> : <Login />}
    </div>
  )
}

export default App
