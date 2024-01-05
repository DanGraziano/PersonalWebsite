import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FcGlobe } from "react-icons/fc";
import { MdOutlineSchool } from "react-icons/md";
import Logo from '../../assets/dan-photo.jpg';

export default function Hero() {
    return (
        <Container className="hero-container">
            <Row className="justify-content-center align-items-center">
       
                <Col xs={12} md={4} className="text-center">
                    <img src={Logo} height={230} width={230} alt="Dan Graziano" className="rounded-circle" />
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
                    <Col className="text-center my-4">
                        <Button variant="primary">Reach out</Button>
                    </Col>
            </Row>
            </Row>
        </Container>
    );
}