import React,{useState} from 'react';
import { Link } from 'react-scroll';
import { FaAlignJustify } from "react-icons/fa";
import Logo from '../../../assets/Home/logo.png';
import { motion } from 'framer-motion';
import './Navbar.css';
const Navbar = () => {
  const [state, setState] = useState(true);
  return (
    <nav className="navbar">
      <div className="container_nav">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 40,
                }}
              >
                <img src={Logo} alt="logo" />
              </motion.div>
            </div>
          </ul>
          {state ? (
          <ul className="navbar__right">
            <li>
              <Link  to="home" spy={true} smooth={true}>
                Home
              </Link>
            </li>

            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="skill" spy={true} smooth={true}>
                Skill
              </Link>
            </li>
            <li>
              <Link  to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
           ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};
export default Navbar;
