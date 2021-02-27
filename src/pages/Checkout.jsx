import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer'

import './styles/checkout.style.css'

export class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldActivate: false,
            item1: "",
            item2: "",
            item3: "",
            item4: "",
            fname: "",
            namePrint: "",
            email: "",
            whatsappNumber: "",
            userName: "",
            socialAccount: "Facebook",
        }
    }

    
    componentWillMount() {
        var history = window.location.search;
        const urlParams = new URLSearchParams(history);
        const num1 = urlParams.get('item1');
        const num2 = urlParams.get('item2');
        const num3 = urlParams.get('item3');
        const num4 = urlParams.get('item4');
        this.setState({
            item1: num1,
            item2: num2,
            item3: num3,
            item4: num4
        });
    }

    handleChangeFname(e) {
        this.setState({
            fname: e.target.value
        })
    }
    handleChangeNamePrint(e) {
        this.setState({
            namePrint: e.target.value
        })
    }
    handleChangeEMail(e) {
        this.setState({
            email: e.target.value
        })
    }
    handleChangeWNumber(e) {
        this.setState({
            whatsappNumber: e.target.value
        })
    }
    handleChangeUserName(e) {
        this.setState({
            userName: e.target.value
        })
    }
    handleChangeSocialAccount(e) {
        this.setState({
            socialAccount: e.target.value
        })
    }

    handleFormSubmit(e) {
        alert('Error! \nSite under maintenance');
        e.preventDefault();
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
                                    <Form.Control type="text" id="fname" className="form-control" value={this.state.fname} onChange={this.handleChangeFname.bind(this)} required />
                                    <label className="form-control-placeholder" for="fname">Full Name</label>
                                </div>
                                <div className="form-group">
                                    <Form.Control type="text" id="namePrint" className="form-control" value={this.state.namePrint} onChange={this.handleChangeNamePrint.bind(this)} required />
                                    <label className="form-control-placeholder" for="namePrint">Name to be printed (optional)</label>
                                </div>
                                <div className="form-group">
                                    <Form.Control type="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChangeEMail.bind(this)} required />
                                    <label className="form-control-placeholder" for="email">E-Mail</label>
                                </div>
                                <div className="form-group">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>+91-</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="text" id="whatsappNumber" className="form-control" value={this.state.whatsappNumber} onChange={this.handleChangeWNumber.bind(this)} required />
                                        <label className="form-control-placeholder" for="whatsappNumber">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            Whatsapp Number
                                        </label>
                                    </InputGroup>
                                </div>
                                <Form.Row>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Form.Control as="select" value={this.state.value} onChange={this.handleChangeSocialAccount.bind(this)} required >
                                                <option value="Facebook">Facebook</option>
                                                <option value="instagram">Instagram</option>
                                                <option value="twitter">Twitter</option>
                                                <option value="linkedin">LinkedIn</option>
                                            </Form.Control>
                                            <label className="form-control-placeholder" for="socialAccount">Social-Account</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control type="text" id="userName" class="form-control" value={this.state.userName} onChange={this.handleChangeUserName.bind(this)} required />
                                                <label className="form-control-placeholder" for="userName">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    username
                                                </label>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="form-group col-md-10 mx-auto">
                                        <Table variant="warning" striped bordered hover responsive borderless size="sm">
                                            <thead>
                                                <tr className="text-center bg-warning">
                                                    <th>Type</th>
                                                    <th>Rate</th>
                                                    <th>Qty</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Sashwat Aahar</td>
                                                    <td className="text-center">&nbsp;&nbsp;₹45</td>
                                                    <td className="text-center">{this.state.item1}</td>
                                                    <td className="text-center">&nbsp;&nbsp;{"₹"+this.state.item1*45}</td>
                                                </tr>
                                                <tr>
                                                    <td>Vastradaan</td>
                                                    <td className="text-center">₹101</td>
                                                    <td className="text-center">{this.state.item2}</td>
                                                    <td className="text-center">{"₹"+this.state.item2*101}</td>
                                                </tr>
                                                <tr>
                                                    <td>Ocassional Daan</td>
                                                    <td className="text-center">₹115</td>
                                                    <td className="text-center">{this.state.item3}</td>
                                                    <td className="text-center">{"₹"+this.state.item3*115}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gau Sewa</td>
                                                    <td className="text-center">&nbsp;&nbsp;₹50</td>
                                                    <td className="text-center">{this.state.item4}</td>
                                                    <td className="text-center">&nbsp;&nbsp;{"₹"+this.state.item4*50}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Form.Row>
                                <br />
                                <div className="checkout-btn">
                                    <Link>
                                        <Button variant="warning" type="submit" className="btn btn-lg px-4"  onClick={this.handleFormSubmit.bind(this)}>
                                            DONATE &nbsp; <span>₹{this.state.item1*45+this.state.item2*101+this.state.item3*115+this.state.item4*50}</span>
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
