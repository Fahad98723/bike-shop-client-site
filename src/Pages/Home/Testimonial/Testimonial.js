import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    console.log(reviews);
    return (
        <div className='py-5'>
            <Container>
                <div className="heading mb-5">
                    <h3>What Clients Says About Us</h3>
                    <h1>TestiMonials</h1>
                </div>
                <Row>
                {
                    reviews.map(review => 
                        <Col lg='4' sm='12'>
                            <Card>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        {review.message}{' '}
                                    </p>
                                    <p>
                                    <Rating className='text-warning'
                                    emptySymbol="fa fa-star-o "
                                    fullSymbol="fa fa-star "
                                    initialRating={review.rating}
                                    readonly
                                    />
                                    </p>
                                    
                                    <footer className="blockquote-footer">
                                        Review By <cite title="Source Title">    {review.name}</cite>
                                    </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
                </Row>
                
                
            </Container>
        </div>
    );
};

export default Testimonial;