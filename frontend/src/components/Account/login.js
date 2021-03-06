import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import Clipboard from 'react-clipboard.js';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [reg, setReg] = useState();
  let history = useHistory();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
 {/* const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  }; */}
 /* const continueLogin = () => {
    setReg();
  } */
// console.warn(user);
  // login the user
  const handleSubmit = async e => {
    try {
    e.preventDefault();
    const user = { "userID": username, "password": password };
    // send the username and password to the server try {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      user
    );
    // set the state of the user
    setUser(response.data);
    
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data))
      
    } catch (err) {
    setError("Invalid UserID and password.")
  }
  };
  
 console.log(error);
  // if there's a user show the message below
  if (user) {
    history.push('/account');
    return (
      <div>
        is loggged in
      </div>
    );
  }
 
  // if there's no user, show the login form
  return (
    <div className="panel panel-default mtl">
    	 <div className="panel-heading text-center">
    	     <b>Login</b>
    	  </div>
    <div className="panel-body">
    	<div className="row">
       <div className="col-md-4 col-md-offset-4 ptl pbl">
       <h5
       style={{color: "red",fontWeight: "bold", textAlign: "center",display: error.length<1  ? "none" : "",}}><i className="fas fa-times"></i> {error}</h5>
      <form onSubmit={handleSubmit}>
      <div className="form-group ">
        <label className="control-label">User ID </label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        </div>
        <div className="form-group ">
          <label className="control-label">Password </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
       <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">Login</button>
       </div>
      </form>
      <div style={{marginBottom: "5px"}}>
      <Link to="/register">
    <button className="btn signup btn-block" type="submit"><b>Create Account</b></button> </Link>
    </div>
     </div>
    </div>
    
     <center><small>Note: Accounts are created once the first deposit is credited.</small></center>
    </div>
    </div>
  );
};

export default Login;