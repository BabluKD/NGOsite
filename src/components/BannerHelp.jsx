import React from 'react'
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';

import hand from '../images/icons/hand-holding.svg';

import './styles/help.style.css';

const BannerHelp = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    return (
        <div className="help-section">
                <div className="help-text">
                    <h2>THE POOR NEEDS <span style={{ color: '#ffc107' }}> YOUR HELP</span></h2>
                    <p>
                        That conviction is where the process of change really begins—with the realization that just because a certain abuse has taken place in the past doesn’t mean that we have to tole.
                        That conviction is where the process of change really begins
                    </p>
                </div>
                <Slider {...settings}>
                    <Card className="cardd">
                        <Card.Img variant="top" src={hand} className="hand-svg mx-auto p-4" />
                        <Card.Body>
                            <Card.Title as="h4">Donate Now</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button variant="warning"><strong>Read More..</strong></Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="cardd">
                        <Card.Img variant="top" src={hand} className="hand-svg mx-auto p-4" />
                        <Card.Body>
                            <Card.Title as="h4">Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="warning"><strong>Read More..</strong></Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="cardd">
                        <Card.Img variant="top" src={hand} className="hand-svg mx-auto p-4" />
                        <Card.Body>
                            <Card.Title as="h4">Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content.
                            </Card.Text>
                            <Button variant="warning"><strong>Read More..</strong></Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="cardd">
                        <Card.Img variant="top" src={hand} className="hand-svg mx-auto p-4" />
                        <Card.Body>
                            <Card.Title as="h4">Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content.
                            </Card.Text>
                            <Button variant="warning"><strong>Read More..</strong></Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="cardd">
                        <Card.Img variant="top" src={hand} className="hand-svg mx-auto p-4" />
                        <Card.Body>
                            <Card.Title as="h4">Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content.
                            </Card.Text>
                            <Button variant="warning"><strong>Read More..</strong></Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="cardd">
                        <Card.Img variant="top" src={hand} className="hand-svg mx-auto p-4" />
                        <Card.Body>
                            <Card.Title as="h4">Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content.
                            </Card.Text>
                            <Button variant="warning"><strong>Read More..</strong></Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                </Slider>
        </div>
    )
}

export default BannerHelp
