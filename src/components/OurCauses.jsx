import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import slide1 from '../images/slider/slide1.webp';

import './styles/causes.style.css';

const OurCauses = () => {
    return (
        <div className="causes-section">
                <div className="help-text">
                    <h2>OUR <span style={{ color: '#ffc107' }}>CAUSES</span></h2>
                    <p>
                        That conviction is where the process of change really begins—with the realization that just because a certain abuse has taken place in the past doesn’t mean that we have to tole.
                        That conviction is where the process of change really begins
                    </p>
                </div>
                <Row>
                    <Col md={8} xs={12}>
                        <Row className="card-like mb-4">
                            <Col md={5} xs={12}>
                                <img
                                    className="d-block w-100 rt-img mx-auto mb-4 img-filter"
                                    src={slide1}
                                    alt="First slide"
                                />
                            </Col>
                            <Col md={7} xs={12}>
                                <h4 className="card-title mt-2">This is the title</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat obcaecati molestias reprehenderit, earum optio explicabo delectus eligendi laboriosam tempora illum modi beatae accusantium. Numquam error explicabo ratione quaerat sint aspernatur.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} xs={12}>
                        <Card className="cause-card mb-4">
                            <Card.Img variant="top" src={slide1} className="mx-auto p-3 img-filter" />
                            <Card.Body>
                                <Card.Title as="h4">Donate Now</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat obcaecati molestias reprehenderit, earum optio explicabo delectus eligendi laboriosam tempora.
                            </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <CardDeck>
                        <Card className="cause-card">
                            <Card.Img variant="top" src={slide1} className="mx-auto p-3 img-filter" />
                            <Card.Body>
                                <Card.Title as="h4">Donate Now</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                        </Card>
                        <Card className="cause-card">
                            <Card.Img variant="top" src={slide1} className="mx-auto p-3 img-filter" />
                            <Card.Body>
                                <Card.Title as="h4">Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                        </Card>
                        <Card className="cause-card">
                            <Card.Img variant="top" src={slide1} className="mx-auto p-3 img-filter" />
                            <Card.Body>
                                <Card.Title as="h4">Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content.
                            </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                        </Card>
                    </CardDeck>
                </Row>
        </div>
    )
}

export default OurCauses
