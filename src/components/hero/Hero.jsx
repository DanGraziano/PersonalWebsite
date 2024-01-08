import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FcGlobe } from "react-icons/fc";
import { MdOutlineSchool } from "react-icons/md";
import Logo from '../../assets/dan-photo.jpg';
import { Element, Link } from 'react-scroll';
import './Hero.css';
import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg';
import {ReactComponent as Github} from '../../assets/github.svg';


export default function Hero() {
    return (
        <Element name="hero" className="hero-section">
            <Container className="hero-container">
                <Row className="justify-content-center align-items-center">
        
                    <Col className="text-center image-column mb-3">
                        <img src={Logo} height={230} width={230} alt="Dan Graziano" className="rounded-circle" />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    
                    <Col className="text-column">
                        <h1 className="hello-text">Hi, I'm Dan.</h1>
                        <h5 className="sub-hed-text">I'm a Full Stack Software Engineer.</h5>
                        <div className="location-text mt-3 text-center"><FcGlobe /> Portland, ME</div> 
                        <div className="education-text my-1 text-center" ><MdOutlineSchool /> MSCS, Northeastern University</div> 
                        <div className="education-text text-center"><MdOutlineSchool /> BA, Sacred Heart University</div> 
                    </Col>
                </Row>
                    <Row>
                        <div className="icon-container text-center my-2">
                            <a href="https://github.com/DanGraziano" className ="logo" ><Github /></a>
                            <a href="https://www.linkedin.com/in/danielgraziano/" className="logo"><LinkedIn /></a>
                        </div>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="text-center hero-section-button" >
                            <Link
                                activeClass="navbar-active-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="contact"
                            >
                            <Button variant="primary reach-out-button">Reach out</Button>
                            </Link>
                        </Col>
                </Row>
            </Container>
        </Element>
    );
}