import React, { useContext } from "react";
import "../App.css";
import { LoginContext } from "../Contexts/LoginContext";

const Login = () => {
  const { username, setUsername, setShowProfile } = useContext(LoginContext);

  const handleLogin = () => {
    if (username) {
      setShowProfile(true);
    } else {
      alert("Please enter username");
    }
  };

  return (
    <div className="login_container">
      <h1>LOGIN</h1>
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default Login;
