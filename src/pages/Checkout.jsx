import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer'

import './styles/checkout.style.css'

export class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldActivate: false,
            items: ""
        }
    }

    disableFocus(e) {
        if (e.target.value === "") {
            this.setState({
                fieldActivate: false
            })
        }
    }

    updateInputValue(e) {
        this.setState({
            inputValue: e.target.value,
        });
        this.activateField(e);
        e.preventDefault();
    }

    componentWillMount() {
        var history = window.location.search;
        const urlParams = new URLSearchParams(history);
        const num = urlParams.get('items');
        this.setState({
            items: num
        });
    }
    

    // ValidationMessage = ({ valid, visited, validationMessage }) => {
    //     return (
    //         <>
    //             {!valid && visited &&
    //                 (<div className="required">{validationMessage}</div>)}
    //         </>
    //     );
    // }

    // emailValidator = (value) => (
    //     new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Please enter a valid email."
    // );

    // requiredValidator = (value) => {
    //     return value ? "" : "This field is required";
    // }

    render() {
        return (
            <>
                <div className="checkout-page my-5 mx-auto">
                    <Form className="checkout-form">
                        <Form.Row>
                            <div className="col-md-6 mx-auto formData">
                                <h2 className="text-center">Thank you for your support !</h2>
                                <div className="form-group">
                                    <Form.Control type="text" id="name" className="form-control" required />
                                    <label className="form-control-placeholder" for="name">Full Name</label>
                                </div>
                                <div className="form-group">
                                    <Form.Control type="text" id="namePrint" className="form-control" required />
                                    <label className="form-control-placeholder" for="namePrint">Name to be printed (optional)</label>
                                </div>
                                <div className="form-group">
                                    <Form.Control type="email" id="email" className="form-control" required />
                                    <label className="form-control-placeholder" for="email">E-Mail</label>
                                </div>
                                <div className="form-group">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>+91-</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="text" id="whatsappNumber" className="form-control" value={window.location.href} required />
                                        <label className="form-control-placeholder" for="whatsappNumber">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            Whatsapp Number
                                        </label>
                                    </InputGroup>
                                </div>
                                <Form.Row>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Form.Control as="select" defaultValue="Choose..." required >
                                                <option>Choose...</option>
                                                <option value="Facebook">Facebook</option>
                                                <option value="instagram">Instagram</option>
                                                <option value="twitter">Twitter</option>
                                                <option value="linkedin">LinkedIn</option>
                                            </Form.Control>
                                            <label className="form-control-placeholder" for="social">Social-Account</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="text" id="username" class="form-control" required />
                                                <label className="form-control-placeholder" for="username">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    username
                                                </label>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="form-group col-md-4 mx-auto">
                                        <Form.Control type="text" id="items" className="form-control" value={this.state.items} required />
                                        <label className="form-control-placeholder" for="items">Items</label>
                                    </div>
                                </Form.Row>
                                <br />
                                <div className="mx-auto">
                                    <Link to="/checkoutTemp">
                                        <Button variant="warning" type="submit" className="btn mt-4 px-4 checkout-btn" onClick={this.sendCount}>
                                            DONATE &nbsp; <span>₹{this.state.items*45}</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Form.Row>
                    </Form>
                </div>
                <Footer />
            </>
        )
    }
}

export default Checkout
