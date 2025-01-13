import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    setUser({username, password});
  };
  return (
    <div>
      <label htmlFor="name">Username: </label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Login;
