import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { experiences } from '../../data.js';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Work.css';
import { Element } from 'react-scroll';

export default function Work({ darkMode }) {
    let darkClassName = '';
    if (darkMode) {
      darkClassName += 'dark-theme';
    }
  
    return (
    <Element name="work" className={`work-section ${darkClassName}`}>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} className="text-center">
                    <h2 className="mb-5">Work Experience</h2>
                </Col>
            </Row>

            <VerticalTimeline>
                {experiences.map((exp) => {
                    return (
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#3c0640",
                                color: "#fff",
                            }}
                            contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
                            date={exp.date}
                            dateClassName={`date ${darkClassName}`}
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={
                                <a href={exp.company_link} className="icon-container">

                                        <img
                                            src={exp.icon}
                                            alt={exp.company_name}
                                            className="img-fluid"
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
                                    <p 
                                        key={index} 
                                        className="badge px-3 py-1 me-2 tech-badge"
                                        style={{ 
                                            background: tech.backCol,
                                            color: tech.textCol,
                                        }}
                                        >
                                    {tech.name}
                                    </p>
                                ))}
                            </p>
                            </VerticalTimelineElement>
                    )}
                )}
            
            </VerticalTimeline>
        </Container>
    </Element>

    );
}