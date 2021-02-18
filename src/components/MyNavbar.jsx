import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '../images/logo-golden.png';
import LogoName from '../images/logo-name.png';
import { NavLink } from 'react-router-dom';
import './styles/navbar.style.css';

const MyNavbar = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between my-navv">
                <Navbar.Brand className="ml-sm-2 -mr-4" href="/">
                    <img src={Logo} alt="NGO" className="logo" /> &nbsp; &nbsp;
                    <img src={LogoName} alt="NGO" className="logo-name" />
                    {/* <span id="nav-title" className="ml-2"><b>NGO Charity</b></span> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mr-1" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink exact activeClassName="active-nav" className="nav-link" to="/">Home</NavLink>
                        {/* <NavLink exact activeClassName="active-nav" className="nav-link" to="/about">About Us</NavLink> */}
                        <NavDropdown title="About Us" id="basic-nav-dropdown" >
                            <NavDropdown.Item className="bg-warning" href="/mission">Our Mission n Our Vision</NavDropdown.Item>
                            <NavDropdown.Item className="bg-warning" href="/campaigns">Our Campaigns</NavDropdown.Item>
                            <NavDropdown.Item className="bg-warning" href="/plans">Our Plans</NavDropdown.Item>
                            <NavDropdown.Item className="bg-warning" href="/volunteers">Our Volunteers</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink exact activeClassName="active-nav" className="nav-link" to="/partners">Our Partners</NavLink>
                        <NavLink exact activeClassName="active-nav" className="nav-link" to="/transparency">Flow of Transparency</NavLink>
                        <NavLink exact activeClassName="active-nav" className="nav-link" to="/contact">Contact Us</NavLink>
                    </Nav>
                    <Nav className="ml-auto mb-2 mb-sm-0">
                        <NavLink className="btn btn-outline-warning text-nowrap btn-block btn-lg" exact to="/donate">
                            {/* <Button className=" btn-outline-warning text-nowrap btn-block"> */}
                                <strong>DONATE WITH US</strong>
                            {/* </Button> */}
                        </NavLink>
                    </Nav>
                    {/* <Nav className="ml-auto">
                        <NavLink exact to="/login">
                            <Button className="btn btn-outline-warning" >
                                <strong>Login | Register</strong>
                            </Button>
                        </NavLink>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar;
