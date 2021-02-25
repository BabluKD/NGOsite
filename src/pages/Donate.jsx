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
            item1: 10,
            item2: 12,
            item3: 14,
            item4: 16,
        }
    }
    handleItem1Change(e) {
        this.setState({ item1: e.target.value });
    }
    incrementItem1() {
        this.setState({
            item1: this.state.item1 + 1
        })
    }
    decrementItem1() {
        if (this.state.count > 1) {
            this.setState({
                item1: this.state.item1 - 1
            })
        }
    }


    handleItem2Change(e) {
        this.setState({ item2: e.target.value });
    }
    incrementItem2() {
        this.setState({
            item2: this.state.item2 + 1
        })
    }
    decrementItem2() {
        if (this.state.count > 1) {
            this.setState({
                item2: this.state.item2 - 1
            })
        }
    }


    handleItem3Change(e) {
        this.setState({ item3: e.target.value });
    }
    incrementItem3() {
        this.setState({
            item3: this.state.item3 + 1
        })
    }
    decrementItem3() {
        if (this.state.count > 1) {
            this.setState({
                item3: this.state.item3 - 1
            })
        }
    }



    

    handleItem4Change(e) {
        this.setState({ item4: e.target.value });
    }
    incrementItem4() {
        this.setState({
            item4: this.state.item4 + 1
        })
    }
    decrementItem4() {
        if (this.state.count > 1) {
            this.setState({
                item4: this.state.item4 - 1
            })
        }
    }


    
    // <Link to="/">
    render() {
        return (
            <>
                <Container id="food" className="donate-page mx-auto mt-4" >
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
                                    <Card.Title as="h4">Donate for Food</Card.Title>
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
                                                <button type="button" className="btn" onClick={() => this.decrementItem1()}>
                                                    <strong>-</strong>
                                                </button>
                                                <input type="text" value={this.state.item1} onChange={this.handleItem1Change.bind(this)} />
                                                <button type="button" className="btn" onClick={() => this.incrementItem1()}>
                                                    <strong>+</strong>
                                                </button>
                                            </Col>
                                        </Row>

                                        <Link to={"/checkout?item1="+this.state.item1+"&item2="+this.state.item2+"&item3="+this.state.item3+"&item4="+this.state.item4}>
                                            <Button variant="secondary" type="button" className="btn mt-4 px-4 donate-btn" onClick={this.sendCount}>
                                                DONATE NOW |&nbsp; <span>₹{this.state.item1 * 45}</span>
                                            </Button>
                                        </Link>
                                    </form>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container id="cloth" className="donate-page mx-auto mt-4" >
                    <Row>
                        <Col md={8} xs={12} className="donate-left">
                            <h1>
                                Sponsor cloths for the poor
                            </h1>
                            <Image src={poorChildren} fluid />
                        </Col>
                        <Col md={4} xs={12} className="donate-right">
                            <Card className="donate-card text-center">
                                <Card.Body>
                                    <Card.Title as="h4">Donate for Cloth</Card.Title>
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
                                                <strong>₹ 101/unit</strong>
                                            </Col>
                                            <Col xs={6} className="counter">
                                                <button type="button" className="btn" onClick={() => this.decrementItem2()}>
                                                    <strong>-</strong>
                                                </button>
                                                <input type="text" value={this.state.item2} onChange={this.handleItem2Change.bind(this)} />
                                                <button type="button" className="btn" onClick={() => this.incrementItem2()}>
                                                    <strong>+</strong>
                                                </button>
                                            </Col>
                                        </Row>

                                        <Link to={"/checkout?item1="+this.state.item1+"&item2="+this.state.item2+"&item3="+this.state.item3+"&item4="+this.state.item4}>
                                            <Button variant="secondary" type="button" className="btn mt-4 px-4 donate-btn">
                                                DONATE NOW |&nbsp; <span>₹{this.state.item2 * 101}</span>
                                            </Button>
                                        </Link>
                                    </form>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container id="ocassion" className="donate-page mx-auto mt-4" >
                    <Row>
                        <Col md={8} xs={12} className="donate-left">
                            <h1>
                                Sponsor something occassional for the poor
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
                                                <strong>₹ 115/unit</strong>
                                            </Col>
                                            <Col xs={6} className="counter">
                                                <button type="button" className="btn" onClick={() => this.decrementItem3()}>
                                                    <strong>-</strong>
                                                </button>
                                                <input type="text" value={this.state.item3} onChange={this.handleItem3Change.bind(this)} />
                                                <button type="button" className="btn" onClick={() => this.incrementItem3()}>
                                                    <strong>+</strong>
                                                </button>
                                            </Col>
                                        </Row>

                                        <Link to={"/checkout?item1="+this.state.item1+"&item2="+this.state.item2+"&item3="+this.state.item3+"&item4="+this.state.item4}>
                                            <Button variant="secondary" type="button" className="btn mt-4 px-4 donate-btn" onClick={this.sendCount}>
                                                DONATE NOW |&nbsp; <span>₹{this.state.item3 * 115}</span>
                                            </Button>
                                        </Link>
                                    </form>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container id="gauSewa" className="donate-page mx-auto mt-4" >
                    <Row>
                        <Col md={8} xs={12} className="donate-left">
                            <h1>
                                Sponsor a Plate of Food for Cows
                    </h1>
                            <Image src={poorChildren} fluid />
                        </Col>
                        <Col md={4} xs={12} className="donate-right">
                            <Card className="donate-card text-center">
                                <Card.Body>
                                    <Card.Title as="h4">Donate for Cows</Card.Title>
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
                                                <strong>₹ 50/unit</strong>
                                            </Col>
                                            <Col xs={6} className="counter">
                                                <button type="button" className="btn" onClick={() => this.decrementItem4()}>
                                                    <strong>-</strong>
                                                </button>
                                                <input type="text" value={this.state.item4} onChange={this.handleItem4Change.bind(this)} />
                                                <button type="button" className="btn" onClick={() => this.incrementItem4()}>
                                                    <strong>+</strong>
                                                </button>
                                            </Col>
                                        </Row>

                                        <Link to={"/checkout?item1="+this.state.item1+"&item2="+this.state.item2+"&item3="+this.state.item3+"&item4="+this.state.item4}>
                                            <Button variant="secondary" type="button" className="btn mt-4 px-4 donate-btn" onClick={this.sendCount}>
                                                DONATE NOW |&nbsp; <span>₹{this.state.item4 * 50}</span>
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