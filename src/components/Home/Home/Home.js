import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header/>
            <Services/>
            <FeaturedService/>
            <Testimonials/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default Home;