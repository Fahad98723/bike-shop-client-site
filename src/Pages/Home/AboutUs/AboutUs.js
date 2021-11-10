import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import upcoming1 from '../../../images/upcoming/upcoming (1).jpg'
import upcoming2 from '../../../images/upcoming/upcoming (2).jpg'
import upcoming3 from '../../../images/upcoming/upcoming (3).jpg'
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="heading mb-4">
                        <h3>Want To Know About Us?</h3>
                        <h1>About Us</h1>
                        </div>
                        <div className="details">
                        <p>Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activity such as joining a motorcycle club and attending motorcycle rallies.</p>
                        <p> There are three major types of motorcycle: street, off-road, and dual purpose. Within these types, there are many sub-types of motorcycles for different purposes. There is often a racing counterpart to each type, such as road racing and street bikes, or motocross including dirt bikes.</p>

                        <button className="btn btn-warning">Read More</button>
                        </div>
                    </Col>
                    <Col className='upcoming' md={5}>
                    <Carousel >
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src={upcoming1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>New Collection</h5>
                                    <p>Coming Soon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 "
                                src={upcoming2}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5>New Collection</h5>
                                    <p>Coming Soon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={upcoming3}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>New Collection</h5>
                                    <p>Coming Soon</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;