import React from 'react';
import Navbar from './Navbar';
import Services from './Services';
import Choose from './Choose';
import Footer from './Footer';
import Team from './Team';
import Slider from './Slider';
import HeroSection from './HeroSection';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Services></Services>
            <Choose></Choose>
            <HeroSection></HeroSection>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;