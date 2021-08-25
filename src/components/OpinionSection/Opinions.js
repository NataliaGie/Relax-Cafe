import React from 'react';
import styled from 'styled-components';
import Opinion from './Opinion';
import Title from '../Title';
import Carousel from 'react-elastic-carousel';
import opinionBackgr from '../../images/opinionBackgr.jpg';


const Opinions = () => {
    return (
        <OpinionsWrapper>
            <Title>People love our cafe!</Title>
            <StyledCarousel enableAutoPlay autoPlaySpeed={10000} 
                itemToShow={1}>
                <Opinion 
                text="This plase is so cozy and have wonderful 
                atmosphere. Here I can eat a delicious cake and drink
                good coffee. I like to come back here :) " 
                author="Stephanie" />
                <Opinion 
                text="When I want to meet my friends, I choose 
                Relax Cafe. I like vibe of this place. It's really relaxing.
                They have a lot of space and tables, this is a big plus." 
                author="Tom" />
                <Opinion 
                text="When I want to go for quick coffe to take away,
                I always go to Relax Cafe. Nice and efficient staff
                have never let me down. They serve the best coffee ever!" 
                author="Monica" />
                <Opinion 
                text="Top quality, unusual combinations and always super tasty.
                They never leave me disappointed. Absolutely recommend!"
                author="Arthur" />
            </StyledCarousel>
        </OpinionsWrapper>
    )
}

const gold = '#daa520';

const OpinionsWrapper = styled.div`
    padding: 30px;
    text-align: center;
    margin: auto;
    overflow: hidden;
    background-image: url(${opinionBackgr});
`;

const StyledCarousel = styled(Carousel)`
    padding: 40px 0;

    .rec-arrow {
        display: none;
    }

    .rec-dot {
        width: 12px;
        height: 12px;
        box-shadow: none;
        background-color: #b8b8b8;
    }

    .rec-dot_active {
        background-color: ${gold};
    }

    .rec-pagination {
        margin: 5px 0;
    }
`;


export default Opinions;