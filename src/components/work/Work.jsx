import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { experiences } from './experiences.js';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Work.css';

export default function WorkExperience() {
    return (
    <Container>
        <Row className="justify-content-center m-4">
            <Col xs={12} className="text-center">
                <h2 className="m-5">Work Experience</h2>
            </Col>
        </Row>

        <VerticalTimeline>
            {experiences.map((exp) => {
                return (
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "#1d1836",
                            color: "#fff",
                        }}
                        contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
                        date={exp.date}
                        dateClassName="date"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={
                            <a href={exp.company_link} className="icon-container">

                                    <img
                                        src={exp.icon}
                                        alt={exp.company_name}
                                        className="img-fluid" // Use Bootstrap's class for responsive images
                                    />
                            </a>
                          }
                        >
                        <h4 className="vertical-timeline-element-title">{exp.title}</h4>
                        <h5 className="vertical-timeline-element-subtitle">{exp.company_name}</h5>
                        <p>
                            {exp.bullets.map((bullet, index) => (
                                <ListGroup.Item key={index} className="bg-transparent border-0 py-2">
                                    {bullet}
                                </ListGroup.Item>
                            ))}
                        </p>
                        <p>
                            {exp.technologies.map((tech, index) => (
                                <span key={index} className="badge bg-primary mx-1 my-1">
                                    {tech.name}
                                </span>
                            ))}
                        </p>
                        </VerticalTimelineElement>
                )}
            )}
        
        </VerticalTimeline>
    </Container>

    );
}