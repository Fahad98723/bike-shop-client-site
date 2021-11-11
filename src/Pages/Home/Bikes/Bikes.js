import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])

    return (
        <div className='py-5'>
            <Container>
                <div className="heading mb-5">
                    <h3>Choose Your Favourite Bikes</h3>
                    <h1>Our Bikes</h1>
                </div>
                <Row className ='gy-5'>
                        {
                        bikes.slice(0,6).map(bike => <Bike key={bike._id} bike = {bike}></Bike>)
                        }
                </Row>
            </Container>
        </div>
    );
};

export default Bikes;