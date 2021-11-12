import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Bikes from '../Bikes/Bikes';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Bikes></Bikes>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;