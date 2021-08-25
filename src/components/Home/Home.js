import React from 'react';
import styled, { keyframes } from 'styled-components';
import homejpg from '../../images/home.jpg';
import { fadeInDown } from 'react-animations';

const Home = () => (
    <HomeContainer>
        <AnimationDiv>
            <WelcomeText>Welcome in Relax Cafe!</WelcomeText>
            <HomeText>cafe | bakery | place to meet</HomeText>
        </AnimationDiv>
    </HomeContainer>
);

const HomeContainer = styled.div`
    position: relative;
    top: 0;
    left: 0; 
    right: 0;
    z-index: 0;
    background-image: url(${homejpg});
    height: 100vh;
    background-size: cover;
    background-color: #464646;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: inset 0 0 0 100vw rgba(0,0,0,0.4);
    color: white;
    text-align: center;
`
const WelcomeText = styled.h1`
    padding-top: 42vh;
    font-size: 45px;

    @media (max-width: 490px) {
        font-size: 35px;
    }
`

const HomeText = styled.h2`
    text-transform: uppercase;
    padding-top: 20px;

    @media (max-width: 490px) {
        font-size: 20px;
    }
`
const fadeInDownAnimation = keyframes`${fadeInDown}`;

const AnimationDiv = styled.div`
    animation: 2s ${fadeInDownAnimation};
`

export default Home;
