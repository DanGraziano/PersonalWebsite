import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from 'react-scroll';
import './Navbar.css';
import BlackComputer from '../../assets/logo/dan-graziano-black-computer.png';
import WhiteComputer from '../../assets/logo/dan-graziano-white-computer.png';


export default function Navigation({ darkMode, setDarkMode }) {

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } 
    else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const toggleIcon = () => {
    if (darkMode) {
      return <FaSun />;
    } 
    else {
      return <FaMoon />;
    }
  }

  let navbarClass = "bg-light";
  let navbarVariant = "light";
  let logo = BlackComputer;

  if (darkMode) {
    navbarClass = "bg-dark";
    navbarVariant = "dark";
    logo = WhiteComputer;
  }

  return (
      <Navbar expand="lg" className={navbarClass} variant={navbarVariant} fixed="top">
        <Container className="navbar-container">
          <Navbar.Brand>
            
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              duration={500} >
                <img src={logo} alt="Dan Graziano" className="nav-logo" />
            </Link>

          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>

            <Nav>
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-120} 
                duration={500} 
                className="nav-link">
                About
              </Link>

              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-40} 
                duration={500} 
                className="nav-link">
                Projects
              </Link>

              <Link 
                to="work" 
                spy={true} 
                smooth={true} 
                offset={-40} 
                duration={500} 
                className="nav-link">
                Work
              </Link>
              
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-30} 
                duration={500} 
                className="nav-link">
                Contact
              </Link>
            </Nav>

            <Nav.Link onClick={toggleMode} className='nav-toggle'>
              {toggleIcon()}
            </Nav.Link>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    );
}