import React from 'react';
import UseTitle from '../../hooks/UseTitle';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Services from './Services/Services';


const Home = () => {
    UseTitle('Home')
    return (
        <div>
           
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;