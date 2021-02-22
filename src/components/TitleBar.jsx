import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles/titlebar.style.css'

const TitleBar = () => {
    return (
        <div className="titlebar">
            <Container>
                <Row>
                    <Col md={3} xs={6} className="mt-2"><span>CONTACT NUMBER</span></Col>
                    <Col md={3} xs={6} className="mt-2"><span>SOCIAL ACCOUNTS</span></Col>
                    <Col md={3} xs={6} className="my-2"><span>SOMETHING ELSE</span></Col>
                    <Col md={3} xs={6} className="my-2"><span>DONATE WITH US</span></Col>
                </Row>
            </Container>
        </div>
    )
}

export default TitleBar;