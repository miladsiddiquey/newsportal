import React from 'react';
import BannerSection from './banner/BannerSection';
import Footer from './footer/Footer';
import Techonology from './techNews/Techonology';
import TopNews from './topNews/TopNews';
import HeaderSection from './header/HeaderSection';

const Home = () => {
    return (
        <div>
             <HeaderSection/>
            <BannerSection/>
            <TopNews/>
            <Techonology/>
            <Footer/>
        </div>
    );
};

export default Home;