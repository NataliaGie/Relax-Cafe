import React from 'react'
import hotCoffeeImg from '../../images/coffeeCup.png';
import { SectionWrapper,
        KindWrapperLeft, 
        KindWrapperRight, 
        CoffeeImage } from './ColdCoffee';
import KindOfCoffee from './KindOfCoffee';

const hotCoffee = () => (
    <SectionWrapper>
        <KindWrapperLeft>
            <KindOfCoffee title="Espresso" text="1x espresso"/>
            <KindOfCoffee title="Americano" text="2x espresso, hot water" />
            <KindOfCoffee title="Mocha" text="1x espresso, steamed milk, liquid chocolate, milk foam" />
        </KindWrapperLeft>
        <CoffeeImage 
            src={hotCoffeeImg}
            alt="hot coffee" />
        <KindWrapperRight>
            <KindOfCoffee right title="Latte" text="2x espresso, steamed milk, milk foam, caramel (optional)" />
            <KindOfCoffee right title="Cappuccino" text="1x espresso, steamed milk, milk foam" />
            <KindOfCoffee right title="Flat White" text="2x espresso, steamed milk" />
        </KindWrapperRight>
    </SectionWrapper>
);


export default hotCoffee;
