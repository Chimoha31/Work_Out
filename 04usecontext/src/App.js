import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
import { LoginContext } from "./Contexts/LoginContext";

const App = () => {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
};

export default App;
