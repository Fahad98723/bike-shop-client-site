import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Pages/Shared/Header/Header'
const NotFound = () => {
    return (
        <>
        <Header></Header>
        <div className='py-5'>
            <Container>
                <div className="heading text-danger text-center">
                    <h3>Sorry Page Not Found</h3>
                    <h1>404</h1>
                </div>
            </Container>
        </div>
        </>
    );
};

export default NotFound;