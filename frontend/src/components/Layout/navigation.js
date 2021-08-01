import React, {useState, Fragment, useEffect} from "react";
//import DarkModeToggle from "react-dark-mode-toggle";

import Switch from '@material-ui/core/Switch';
import {Link} from 'react-router-dom';

export default function Login (props) {
  const [darkMode, setDarkMode] = useState(true);
  const [navExpanded, setnavExpanded] = useState(false);
  
  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);
  
  return (
    <Fragment>
	<nav className="navbar navbar-default app-navbar">
	    <div className="container-fluid">
	        <div className="navbar-header">
	            <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            </button>
	            <Link to="/" className="navbar-brand"><b>Risk Your Bag</b></Link>
	        </div>
	        <div className="navbar-collapse collapse" id="navbar">
	            <ul aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="nav navbar-nav navbar-right">
	                <li>
	                <Link to="/play">Play</Link></li>
	                <li><Link to="/account">Account</Link></li>
	                <li><Link to="/faq">FAQ</Link></li>
	                <li><Link to="/verification">Verification</Link></li>
	                <li>
	                <Switch className="dark-switch" checked={darkMode} onClick={() => setDarkMode(!darkMode)} name="checkedA" />
	               {/* <DarkModeToggle
	                 onChange={setDarkMode}
	                 className="dark-btn"
	                 checked={darkMode}
	                 size={35} /> */}
	                </li>
	            </ul>
	        </div>
	    </div>
	</nav>

    </Fragment>
    )
}