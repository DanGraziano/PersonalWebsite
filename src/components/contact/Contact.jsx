import { Container, Row, Col, Form } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './Contact.css';
import React, { useState } from 'react';
import { useForm } from '@formspree/react';


export default function Contact({ darkMode }) {

    let darkClassName = '';
    if (darkMode) {
      darkClassName += 'dark-theme';
    }
    
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      if (state.succeeded) {
        return <p className='success-message text-center'>Thanks for reaching out!</p>;
    }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      };

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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name" 
                                placeholder="Enter your name"
                                required value={FormData.firstName}
                                onChange={handleChange} />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            required value={FormData.email}
                            onChange={handleChange} />
                    </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea"
                                name="message" 
                                rows={3} 
                                placeholder="Enter your message" 
                                required value={FormData.message}
                                onChange={handleChange} />
                        </Form.Group>

                    <div className="d-grid gap-2 mt-4">
                        <button 
                            className="btn btn-primary reach-out-button" 
                            type="submit" 
                            disabled={state.submitting}
                        >
                        Reach out</button>
                    </div>
                    </Form>
                    {state.errors && state.errors.length > 0 && (
                        <div className="fail-message text-center">Failed to send message. Please try again later.</div>
                    )}
                </Col>
                </Row>
            </Container>
          </Element>
    );
};