import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import hand from '../images/icons/hand-holding.svg';
import './styles/choose.style.css';


const ChooseUs = () => {
    return (
        <div className="choose-section">
            <div className="help-text">
                <h2>WHY CHOOSE <span style={{ color: '#ffc107' }}> US ?</span></h2>
                <p>
                    That conviction is where the process of change really begins—with the realization that just because a certain abuse has taken place in the past doesn’t mean that we have to tole.
                    That conviction is where the process of change really begins
                </p>
            </div>
            <Row>
                <Col md={6} xs={12}>
                    <Row className="row1">
                        <Col md={4} xs={12}>
                            <Image src={hand} className="hand-svg2" roundedCircle />
                        </Col>
                        <Col md={8} xs={12} className="my-auto about">
                            <h3>Best Pricing Guarantee</h3>
                            <p>1-3% guaranteed pricing and fastest access to your funds. We only need it for other necessary activities</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12}>
                    <Row className="row2">
                        <Col md={4} xs={12}>
                        <Image src={hand} className="hand-svg2" roundedCircle />
                        </Col>
                        <Col md={8} xs={12} className="my-auto about">
                            <h3>Best Pricing Guarantee</h3>
                            <p>1-3% guaranteed pricing and fastest access to your funds. We only need it for other necessary activities</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={6} xs={12}>
                    <Row className="row3">
                        <Col md={4} xs={12}>
                            <Image src={hand} className="hand-svg2" roundedCircle />
                        </Col>
                        <Col md={8} xs={12} className="my-auto about">
                            <h3>Best Pricing Guarantee</h3>
                            <p>1-3% guaranteed pricing and fastest access to your funds. We only need it for other necessary activities</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12}>
                    <Row>
                        <Col md={4} xs={12}>
                        <Image src={hand} className="hand-svg2" roundedCircle />
                        </Col>
                        <Col md={8} xs={12} className="my-auto about">
                            <h3>Best Pricing Guarantee</h3>
                            <p>1-3% guaranteed pricing and fastest access to your funds. We only need it for other necessary activities</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={6} xs={12}>
                    <Row>
                        <Col md={4} xs={12}>
                            <Image src={hand} className="hand-svg2" roundedCircle />
                        </Col>
                        <Col md={8} xs={12} className="my-auto about">
                            <h3>Best Pricing Guarantee</h3>
                            <p>1-3% guaranteed pricing and fastest access to your funds. We only need it for other necessary activities</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12}>
                    <Row>
                        <Col md={4} xs={12}>
                        <Image src={hand} className="hand-svg2" roundedCircle />
                        </Col>
                        <Col md={8} xs={12} className="my-auto about">
                            <h3>Best Pricing Guarantee</h3>
                            <p>1-3% guaranteed pricing and fastest access to your funds. We only need it for other necessary activities</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ChooseUs
