import React, { useState } from "react";
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="login_container">
      <h1>LOGIN</h1>
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type="password" placeholder="Password" />
      <button>LOGIN</button>

      {/* {showProfile && <h1>{username}</h1>} */}
    </div>
  );
};

export default Login;
