import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Bikes from '../Bikes/Bikes';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Bikes largeSize= '4'></Bikes>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;