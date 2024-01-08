import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FcGlobe } from "react-icons/fc";
import { MdOutlineSchool } from "react-icons/md";
import Logo from '../../assets/dan-photo.jpg';
import { Element, Link } from 'react-scroll';

export default function Hero() {
    return (
        <Element name="hero" className="hero-section">
            <Container className="hero-container">
                <Row className="justify-content-center align-items-center">
        
                    <Col xs={12} md={4} className="text-center">
                        <img src={Logo} height={230} width={230} alt="Dan Graziano" className="rounded-circle my-4" />
                    </Col>

                    <Col xs={6} md={4}>
                        <h1 className="hello-text">Hi, I'm Dan.</h1>
                        <h5 className="sub-hed-text">I'm a Full Stack Software Engineer.</h5>
                        <div className="location-text d-flex align-items-center mt-3"><FcGlobe /> Portland, ME</div> 
                        <div className="education-text d-flex align-items-center my-1"><MdOutlineSchool /> MSCS, Northeastern University</div> 
                        <div className="education-text d-flex align-items-center my-1"><MdOutlineSchool /> BA, Sacred Heart University</div> 
                        <a href="https://github.com/DanGraziano" className=""><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/danielgraziano/" className="m-3"><FaLinkedinIn /></a>
                    </Col>

                    <Row className="justify-content-center">
                        <Col className="text-center hero-section-button my-4" >
                            <Link
                                activeClass="navbar-active-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="contact"
                            >
                            <Button variant="primary mb-4 mt-3 mb-lg-0">Reach out</Button>
                            </Link>
                        </Col>
                </Row>
                </Row>
            </Container>
        </Element>
    );
}