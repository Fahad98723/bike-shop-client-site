import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <>
        <div className= 'footer-section'>
            <Container>
                <Row className='py-5 '>
                    <Col lg= '4'>
                        <h3>Triangle Bike Shop</h3>
                        <h6><i className="fas fa-envelope"></i> : md.ravi63@gmail.com</h6>
                        <h6><i className="fas fa-phone"></i> : +9355 3652 832</h6>
                        <h6><i className="fas fa-phone"></i> : +5642 4352 257</h6>
                        <h6><i className="fas fa-map-marked-alt"></i> : 3 Edgar Buildings, England,
                        BA1 2FJ.</h6>
                    </Col>
                    <Col lg='2'>
                        <h3>Quick Link</h3>
                        <h6>Popular Tour</h6>
                        <h6>Blog</h6>
                        <h6>Shop</h6>
                        <h6>FAQ's</h6>
                        <h6>Privacy Policy</h6>
                    </Col>
                    <Col lg='3'>
                        <h3>Important Links</h3>
                        <h6>Destination</h6>
                        <h6>Get In Touch</h6>
                        <h6>Who We Are</h6>
                        <h6>Contact Us</h6>
                        <h6>Hotels</h6>
                    </Col>
                    <Col lg='3'>
                    <InputGroup className="my-3">
                        <FormControl
                        placeholder="Find Your Favourite Bike"
                        aria-label="Find Your Favourite Bike"
                        aria-describedby="basic-addon2"
                        />
                        <button className="btn btn-warning" id="button-addon2">
                        Find
                        </button>
                    </InputGroup>
                    </Col>
                </Row>
                <div className="footer text-center py-2">
                    <p>Copyright ©2021 Triangle Bike Shop. Designed Developed By Fahad</p>
                </div>
            </Container>
        </div>       
    </>
    );
};

export default Footer;