import React from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import slide1 from '../images/slider/slide1.webp';
import './styles/ourteam.style.css'

const OurTeam = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        centerMode: true,
        pauseOnHover: true
    };
    return (
        <div className="team-section">
            <div className="help-text">
                <h2>OUR <span style={{ color: '#ffc107' }}> TEAM</span></h2>
                <p>
                    That conviction is where the process of change really begins—with the realization that just because a certain abuse has taken place in the past doesn’t mean that we have to tole.
                    That conviction is where the process of change really begins
                </p>
            </div>
            <Slider {...settings}>
                    <Card className="team-card">
                        <Card.Img variant="top" src={slide1} className="team-svg mx-auto p-1" />
                        <Card.Body>
                            <Card.Title as="h4">Bablu Kumar</Card.Title>
                            <Card.Subtitle as="h5">Web Developer</Card.Subtitle>
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
                    <Card className="team-card">
                        <Card.Img variant="top" src={slide1} className="team-svg mx-auto p-1"  />
                        <Card.Body>
                            <Card.Title as="h4">Bablu Kumar</Card.Title>
                            <Card.Subtitle as="h5">Web Developer</Card.Subtitle>
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
                    <Card className="team-card">
                        <Card.Img variant="top" src={slide1} className="team-svg mx-auto p-1"  />
                        <Card.Body>
                            <Card.Title as="h4">Bablu Kumar</Card.Title>
                            <Card.Subtitle as="h5">Web Developer</Card.Subtitle>
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
                    <Card className="team-card">
                        <Card.Img variant="top" src={slide1} className="team-svg mx-auto p-1"  />
                        <Card.Body>
                            <Card.Title as="h4">Bablu Kumar</Card.Title>
                            <Card.Subtitle as="h5">Web Developer</Card.Subtitle>
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
                    <Card className="team-card">
                        <Card.Img variant="top" src={slide1} className="team-svg mx-auto p-1"  />
                        <Card.Body>
                            <Card.Title as="h4">Bablu Kumar</Card.Title>
                            <Card.Subtitle as="h5">Web Developer</Card.Subtitle>
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
                    <Card className="team-card">
                        <Card.Img variant="top" src={slide1} className="team-svg mx-auto p-1"  />
                        <Card.Body>
                            <Card.Title as="h4">Bablu Kumar</Card.Title>
                            <Card.Subtitle as="h5">Web Developer</Card.Subtitle>
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
            </Slider>
        </div>
    )
}

export default OurTeam;
