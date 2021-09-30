import React, {useState} from 'react';
import styled from 'styled-components';
import CoffeeButton from './CoffeeButton';
import ColdCoffee from './ColdCoffee';
import HotCoffee from './HotCoffee';
import Title from '../../ui/Title';

const CoffeeType = () => {
     const [activeHot, setActiveHot] = useState(true);
     const [activeCold, setActiveCold] = useState(false);

     const onHotClickedHandler = (event) => {
        setActiveCold(false); 
        setActiveHot(true);
     };

     const onColdClickedHandler = (event) => {
        setActiveHot(false);
        setActiveCold(true);
     };

    return (
    <CoffeeSection>
        <Title>Our coffee type for you</Title>
        <ButtonsContainer>
            {activeHot ? 
                <CoffeeButton active click={onHotClickedHandler}>
                    Hot Coffee
                </CoffeeButton>  :
                 <CoffeeButton click={onHotClickedHandler}>
                 Hot Coffee
                 </CoffeeButton>}     
            {activeCold ? 
                <CoffeeButton active click={onColdClickedHandler}>
                Cold Coffee
                </CoffeeButton> : 
                <CoffeeButton click={onColdClickedHandler}>
                Cold Coffee
            </CoffeeButton>} 
        </ButtonsContainer>
                {activeCold ? <ColdCoffee /> : <HotCoffee />}
    </CoffeeSection>
    );
};

const CoffeeSection = styled.div`
    width: 100%;
    margin-bottom: 35px;
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 475px) {
        flex-direction: column;
        margin: 10px;
    }
`;


export default CoffeeType;