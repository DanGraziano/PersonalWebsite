import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Placeholder from '../../assets/holder.svg';
import { Element } from 'react-scroll';

export default function Projects() {
    return (
        <Element name="projects" className="project-section">
        <Container fluid className="projects-container">
        <Row className="justify-content-center">
            <Col xs={12}>
                <h1 className="text-center mt-5 projects-section-title">
                    <span className="projects-section-title-color">Projects</span>
                </h1>
            </Col>
        </Row>

            <Row className="justify-content-center mt-5 gx-2 gy-4">
                <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Placeholder} />
                            <Card.Body>
                                <Card.Title>E-Commerce Price Tracker</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Placeholder} />
                            <Card.Body>
                                <Card.Title>RhythmRun Android App</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Placeholder} />
                            <Card.Body>
                                <Card.Title>Survue Android App</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Placeholder} />
                            <Card.Body>
                                <Card.Title>Portland Brewery Tour</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </Element>
    );
}