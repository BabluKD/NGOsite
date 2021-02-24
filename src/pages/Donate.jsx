import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom'
//import {connect} from 'react-redux'
//import BrowserRouter from 'history'
import Footer from '../components/Footer'

import poorChildren from '../images/poor/two-children.jpg';
import food from '../images/poor/dal-chawal.png';

import './styles/donate.style.css';

class Donate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 10,
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement() {
        if (this.state.count > 1) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    // <Link to="/">
    render() {
        return (
            <>
                <Container className="donate-page mx-auto mt-4" >
                    <Row>
                        <Col md={8} xs={12} className="donate-left">
                            <h1>
                                Sponsor a Plate of Food for the poor
                    </h1>
                            <Image src={poorChildren} fluid />
                        </Col>
                        <Col md={4} xs={12} className="donate-right">
                            <Card className="donate-card text-center">
                                <Card.Body>
                                    <Card.Title as="h4">Donate Now</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                            </Card.Text>
                                    <Card.Img variant="bottom" src={food} className="food-svg mx-auto p-4" /><br />
                                </Card.Body>
                                <Card.Footer>
                                    <form method="GET">
                                        <Row>
                                            <Col xs={6} className="rate my-auto">
                                                <strong>₹ 45/unit</strong>
                                            </Col>
                                            <Col xs={6} className="counter">
                                                <button type="button" className="btn" onClick={() => this.decrement()}>
                                                    <strong>-</strong>
                                                </button>
                                                <input type="text" value={this.state.count} />
                                                <button type="button" className="btn" onClick={() => this.increment()}>
                                                    <strong>+</strong>
                                                </button>
                                            </Col>
                                        </Row>

                                        <Link to={"/checkout?items=" + this.state.count}>
                                            <Button variant="secondary" type="button" className="btn mt-4 px-4 donate-btn" onClick={this.sendCount}>
                                                DONATE NOW |&nbsp; <span>₹{this.state.count * 45}</span>
                                            </Button>
                                        </Link>
                                    </form>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </>
        )
    }
}
export default Donate;