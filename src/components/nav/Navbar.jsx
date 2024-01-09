import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from 'react-scroll';
import './Navbar.css';

export default function Navigation() {
  return (
      <Navbar expand="lg" className="bg-light" variant="light" fixed="top">
        <Container className="navbar-container">
          <Navbar.Brand>
            
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              duration={500} >
              DG {/* TODO - replace DG with my picture or fancy text */}
            </Link>

          </Navbar.Brand>

          <Nav.Link href=""><FaMoon /></Nav.Link>
          <Nav.Link href=""><FaSun /></Nav.Link>
          {/* TODO - implement dark/light modes */}

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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}