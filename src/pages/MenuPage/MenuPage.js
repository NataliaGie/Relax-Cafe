import React from 'react';
import Fade from 'react-reveal/Fade';
import Title from '../../ui/Title';
import { MenuPageContainer } from './MenuElements';
import Breakfast from './Breakfast';
import Smoothies from './Smoothies';
import Tea from './Tea';
import Cakes from './Cakes';


const MenuPage = () => (
    <MenuPageContainer>
    <Title fixed>Menu</Title>
        <Fade left>
            <Breakfast />
        </Fade>
        <Fade right>   
            <Smoothies />
        </Fade>
        <Fade left>    
            <Tea />
        </Fade>
        <Fade right> 
            <Cakes />
        </Fade>    
    </MenuPageContainer>
);

export default MenuPage;