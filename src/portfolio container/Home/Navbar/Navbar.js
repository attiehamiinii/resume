
import React from "react";
import {Link} from 'react-scroll'
import Logo from "../../../assets/Home/logo.png";
import "./Navbar.css";
 const Navbar = () => {




 

  return (
  
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
            <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
            </li>
            
            <li >
          
            <Link  to="about" spy={true} smooth={true}>About</Link>
            </li>
            <li>
            <Link  to="skill" spy={true} smooth={true}>Skill</Link>
            </li>
            <li>
            <Link  to="contact" spy={true} smooth={true}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
 
  );
  }
export default Navbar