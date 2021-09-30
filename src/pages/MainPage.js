import React from 'react';
import Fade from 'react-reveal/Fade';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Quotation from '../components/Quotation/Quotation';
import CoffeeType from '../components/CoffeeType/CoffeType';
import ImageSection from '../components/ImageSection/ImageSection';
import Opinions from '../components/OpinionSection/Opinions';

const MainPage = () => (
    <>
    <Home />
    <Fade>
        <About />
        <Quotation />
        <CoffeeType />
        <ImageSection />
        <Opinions />
    </Fade>
    </>
);

export default MainPage;