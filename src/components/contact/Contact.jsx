import { Container, Row, Col, Form } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './Contact.css';


export default function Contact({ darkMode }) {

    let darkClassName = '';
    if (darkMode) {
      darkClassName += 'dark-theme';
    }

    return (
        <Element name="contact" className={`contact-section ${darkClassName}`}>
            <Container className="contact-container">
                <Row className="justify-content-center m-4">
                    <Col xs={12} className="text-center">
                        <h2 className="mb-5">Contact</h2>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                <Col xs={10} md={8} lg={6}>
                    <Form>

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="firstName" placeholder="Enter your name" required value={FormData.firstName} />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your email" required value={FormData.email} />
                    </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" required value={FormData.message} />
                        </Form.Group>

                    <div className="d-grid gap-2 mt-4">
                        <button className="btn btn-primary" type="submit" >Reach out</button>
                    </div>
                    
                    </Form>
                </Col>
                </Row>
            </Container>
          </Element>
    );
  };