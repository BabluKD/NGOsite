import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'

import slide1 from '../images/slider/slide1.webp';
import slide2 from '../images/slider/slide2.webp';
import slide3 from '../images/slider/slide3.webp';

import './styles/myslider.style.css'

const MySlider = () => {
    return (
        <div className="slide-section">
            <Carousel controls={true} indicators={false} interval={2500} pause="false" >
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Row>
                            <Col md={6} xs={12} className="left-text my-auto">
                                <h2>ATTRACTIVE <span style={{ color: '#ffc107' }}>DUMMY </span> TITLE</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum est perspiciatis rerum quasi, molestias asperiores.
                                </p>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={slide2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <Row>
                                <Col md={6} xs={12} className="left-text my-auto">
                                    <h2>ATTRACTIVE <span style={{ color: '#ffc107' }}>DUMMY </span> TITLE</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Harum est perspiciatis rerum quasi, molestias asperiores.
                                    </p>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={slide3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <Row>
                                <Col md={6} xs={12} className="left-text my-auto">
                                    <h2>ATTRACTIVE <span style={{ color: '#ffc107' }}>DUMMY </span> TITLE</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Harum est perspiciatis rerum quasi, molestias asperiores.
                                    </p>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MySlider
