/*eslint-disable*/
import React from "react";
import {
  BrowserRouter as Router,Link} from "react-router-dom"

import Logo from "../../../assets/Home/logo.png";
import "./Navbar.css";
export default function Navbar() {
  return (
   <Router>
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbart__left">
            <div className="navbar__left-logo">
              <img src={Logo} alt="logo" />
            </div>
          </ul>
        
          <ul className="navbar__right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Me</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/ContactMe">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  </Router>
  );
}
