import React from 'react';
import Fade from 'react-reveal/Fade';
import Home from './Home/Home';
import About from './About/About'
import Quotation from './Quotation/Quotation';
import CoffeeType from './CoffeeType/CoffeType';
import ImageSection from './ImageSection/ImageSection';
import Opinions from './OpinionSection/Opinions';

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