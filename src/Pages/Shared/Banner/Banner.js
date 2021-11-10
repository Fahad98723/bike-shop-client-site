import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row >
                    <Col md={6} className='align-items-center'>
                        <h2><span style={{color:'red'}}>Be A Rider  </span> <br />
                        An Ride Your Favourite Bike</h2>
                        <InputGroup className="my-3">
                        <FormControl
                        placeholder="Find Your Favourite Bike"
                        aria-label="Find Your Favourite Bike"
                        aria-describedby="basic-addon2"
                        />
                        <button className="btn btn-dark" id="button-addon2">
                        Find
                        </button>
                    </InputGroup>
                    <button className="btn btn-warning">
                        <Link to ='/allBikes'>Explore</Link>
                    </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;