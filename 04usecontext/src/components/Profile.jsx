import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

const Profile = () => {
  const { username, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <h1 style={{margin: "0"}}>Profile</h1>
      <h2>Username: {username}</h2>
      <button onClick={() => setShowProfile(false)}>Return to Login</button>
    </>
  );
};

export default Profile;
