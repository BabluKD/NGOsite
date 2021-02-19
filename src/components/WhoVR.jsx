import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import slide1 from '../images/slider/slide1.webp';

import './styles/whovr.style.css'

const WhoVR = () => {
    return (
        <div className="whovr-section">
            <Row>
                <Col md={6} xs={12} className="whovr-text my-auto">
                    <h1>WHO ARE<span style={{ color: '#ffc107' }}> WE ?</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum est perspiciatis rerum quasi, molestias asperiores
                        maiores inventore aliquid. Corporis possimus officiis,
                        vero expedita earum sit laborum sed soluta adipisci unde.
                    </p>
                    <Button className="btn btn-outline-warning text-nowrap btn-lg">
                        <strong>DONATE WITH US</strong>
                    </Button>
                </Col>
                <Col md={6} xs={12} >
                    <img
                        className="d-block w-100 rt-img"
                        src={slide1}
                        alt="First slide"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default WhoVR;
