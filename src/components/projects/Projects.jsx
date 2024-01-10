import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './Projects.css';
import { projectsData } from '../../data.js';


export default function Projects({ darkMode }) {

    let darkClassName = '';
    if (darkMode) {
      darkClassName += 'dark-theme';
    }

    return (
        <Element name="projects" className={`projects-section ${darkClassName}`}>
            <Container fluid className="projects-container">
            <Row className="justify-content-center">
                <Col xs={12}>
                    <div className="text-center">
                    <h1 className="section-title">Projects</h1>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center mt-5 gx-2 gy-4">
                {projectsData.map((project) => (
                    <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="project-card">
                            <Card.Img variant="top" src={project.imageUrl} />
                            <Card.Body className="flex-grow">
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <p>
                                {project.technologies.map((tech, index) => (
                                    <p 
                                        key={index} 
                                        className="badge px-3 py-1 me-2"
                                        style={{ 
                                            background: tech.backCol,
                                            color: tech.textCol,
                                        }}
                                        >
                                    {tech.name}
                                    </p>
                                ))}
                            </p>
                                
                                <div className="button-wrapper text-center">
                                    <a href={project.link} className ="learn-more-button">
                                        <Button variant="primary">Learn more</Button>
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        </Element>
    );
}