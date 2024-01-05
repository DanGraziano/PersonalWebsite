import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navigation() {
    return (
        <Navbar expand="lg" className="bg-black" variant="dark">
          <Container>
            <Navbar.Brand href="#home">DG</Navbar.Brand> 
            {/* TODO - replace DG with my picture or fancy text */}
            <Nav.Link href=""><FaMoon /></Nav.Link>
            <Nav.Link href=""><FaSun /></Nav.Link>
            {/* TODO - implement dark/light modes */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#work">Work</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }