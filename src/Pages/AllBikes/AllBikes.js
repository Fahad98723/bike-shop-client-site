import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Bike from '../Home/Bike/Bike';
import Header from '../Shared/Header/Header';


const AllBikes = () => {
    //all bikes data taking from data base
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('https://shielded-inlet-60219.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])

    return (
        <>
        <Header></Header>
        <div className='py-5'>
            <Container>
                <div className="heading mb-5">
                    <h3>Choose Your Favourite Bikes</h3>
                    <h1>Our Bikes</h1>
                </div>
                <Row className ='gy-5'>
                        {
                        bikes.map(bike => <Bike key={bike._id} bike = {bike}></Bike>)
                        }
                </Row>
            </Container>
        </div>
        </>
    );
};

export default AllBikes;