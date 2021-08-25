import React from 'react';
import styled from 'styled-components';
import coldImage from '../../images/iced.png';
import KindOfCoffee from './KindOfCoffee';

const coldCoffee = () => (
    <SectionWrapper>
        <KindWrapperLeft>
            <KindOfCoffee title="Iced Latte" text="1x espresso, milk, ice, flavored syrup (optional)" />
            <KindOfCoffee title="Frappuccino" text="1x espresso, crushed ice, milk, flavored syrup, whipped cream" />
        </KindWrapperLeft>
        <CoffeeImage 
            src={coldImage}
            alt="cold coffee" />
        <KindWrapperRight>
            <KindOfCoffee right title="Iced Americano" text="2x espresso, water, ice, flavored syup (optional)" />
            <KindOfCoffee right title="Iced Caffe Mocha" text="2x espresso, milk, ice, liquid chocolate, whipped cream (optional)" />
        </KindWrapperRight>
    </SectionWrapper>
);

const SectionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const KindWrapperLeft = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
        width: 60%;
        order: 1;
    }
`;

const KindWrapperRight = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
        width: 60%;
        order: 1;
    }
`;

const CoffeeImage = styled.img`
    margin: 30px 0;
    width: 33%;
    height: 500px;
    z-index: 5;

    @media (max-width: 1200px) {
        height: 350px;
    }

    @media (max-width: 910px) {
        height: 280px;
    }

    @media (max-width: 650px) {
        align-self: flex-start;
        height: 360px;
        width: 65%;
        order: -1;
    }

    @media (max-width: 475px) {
        height: 290px;
    }
`;

export { SectionWrapper, KindWrapperLeft, KindWrapperRight, CoffeeImage };

export default coldCoffee;