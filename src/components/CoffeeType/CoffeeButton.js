import React from 'react';
import styled from 'styled-components';

const coffeeButton = (props) => (
    <CoffeeButton
        active={props.active}
        activated={props.activated}
        onClick={props.click}>
            {props.children}
    </CoffeeButton>
);

const gold = '#daa520';

const CoffeeButton = styled.button`
    width: 200px;
    height: 50px;
    margin: 20px;
    border: 2px solid ${gold};
    background-color: ${props => props.active ? "#daa520" : "white"};
    color: ${props => props.active ? "white" : "black"};
    font-size: 16px;
    cursor: pointer;
    box-shadow: ${props => props.active ? "5px 5px 5px grey" : "none"};

    @media (max-width: 475px) {
        margin: 12px;
    }
`;


export default coffeeButton;