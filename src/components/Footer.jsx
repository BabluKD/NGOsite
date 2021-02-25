import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles/footer.style.css';

import logo from '../images/logo-name(Golden).png';
import location from '../images/icons/map-marker.png';
import mail from '../images/icons/envelope-solid.png';
import phone from '../images/icons/phone-solid.png';


const Footer = () => {
    return (
        <div className="footer-section">
            <Container fluid className="text-center text-md-left px-4">
                <Row>
                    <Col md={6} xs={12}>
                        <a href="#"><img className="footer-logo" src={logo} /></a>
                        <p className="pt-4">
                            Here you can use rows and columns here to organize your footer
                            content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quia hic quam sint harum, tempora adipisci natus exercitationem soluta
                        </p>
                    </Col>
                    <Col md={3} xs={6}>
                        <h5 className="title mb-4" style={{ color: '#ffc107', fontWeight: '500' }}>USEFUL LINKS:</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} xs={6}>
                        <h5 className="title mb-4" style={{ color: '#ffc107', fontWeight: '500' }}>CONTACT US:</h5>
                        <ul>
                            <li className="list-unstyled">
                                <span><img className="footer-svg" src={location} /> Location </span>
                            </li>
                            <li className="list-unstyled">
                                <span><img className="footer-svg mail" src={mail} /> Mail </span>
                            </li>
                            <li className="list-unstyled">
                                <span><img className="footer-svg phone" src={phone} /> Phone </span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container>
                    &copy; {new Date().getFullYear()} Copyright : <a href="#"  style={{ color: '#ffc107', fontWeight: '500' }}> vihan4u.com </a>
                </Container>
            </div>
        </div>
    )
}

export default Footer
