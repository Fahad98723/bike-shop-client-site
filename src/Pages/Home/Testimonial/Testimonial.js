import React, { useEffect, useState } from 'react';
import { Card, Container,} from 'react-bootstrap';
import Rating from 'react-rating';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
    Pagination
  } from 'swiper';

SwiperCore.use([Pagination]);
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://shielded-inlet-60219.herokuapp.com/review')
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
            <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
            "clickable": true
            }} navigation={false} className="mySwiper">
                {
                    reviews.map(review => 
                        <SwiperSlide className='mb-5'>
                            <Card style={{background:'#29648a', color : 'white', padding:'20px 10px'}}>
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
                                    
                                    <footer className="blockquote-footer text-light">
                                        Review By <cite title="Source Title">    {review.name}</cite>
                                    </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                            
                    )
                }   
            </Swiper>
            </Container>
        </div>
    );
};

export default Testimonial;