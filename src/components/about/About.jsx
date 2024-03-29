import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Element } from 'react-scroll';
import './About.css';

export default function About({ darkMode }) {
    let darkClassName = '';
    if (darkMode) {
      darkClassName += 'dark-theme';
    }
    return (
        <Element name="about" className={`about-section ${darkClassName}`}>
            <Container fluid className="about-container">
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <Card className="card-style">
                            <Card.Body>
                                <h1 className="text-center about-section-title">
                                    <span className="about-section-title-color">About</span>
                                </h1>

                                <section className="text-center">
                                    <p className="m-5 about-section-description-text">
                                        I am in the final semester of earning my Master's degree in computer science from Northeastern University. 
                                        I'm currently seeking in-person, hybrid, or remote software engineering opportunities.
                                    </p>
                                    <p className="m-5 about-section-description-text">
                                        I am a former journalist and public relations professional with over a decade of experience in the technology industry. 
                                        As a journalist, I had the privilege of writing about new products and technologies and sharing them with millions of readers. 
                                        During my time in public relations, I played a crucial role in successfully launching dozens of new products and innovative technologies. 
                                        Now, as I work towards completing my Master's degree, I am eager to contribute to building the next generation of technology products.
                                    </p>
                                </section>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
};
