import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './styles/newsletter.style.css';
import phone from '../images/icons/phone-solid.svg';

const NewsLetter = () => {
    return (
        <div className="newsletter-section mx-auto">
            <Row className="row align-items-lg-center">
                <Col md={4} xs={12} className="news-left center">
                    <h3>Donation Hotline</h3>
                    <h4><img className="news-logo" src={phone} /> : 0326-9292362</h4>
                </Col>
                <Col md={7} xs={12}>
                    <InputGroup className="center">
                        <FormControl
                            placeholder="Email ID"
                            aria-label="Email ID"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append className="mr-4">
                            <Button variant="dark">Subscribe</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    )
}

export default NewsLetter
