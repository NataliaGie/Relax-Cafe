import React from 'react';
import styled from 'styled-components';

const Title = (props) => (
    <OurTitle fixed={props.fixed}>
        {props.children}
    </OurTitle>
);

const gold = '#daa520';

const OurTitle = styled.h1`
padding: ${props => props.fixed ? '90px 0 60px' : '60px 0 80px'};
font-size: 45px;
font-family: 'Dancing Script', cursive;
text-align: center;

@media (max-width: 610px) {
    padding: ${props => props.fixed ? '60px 0' : '60px 0 80px'};
}

&::before,    
&::after {
    display: inline-block;
    content: "";
    border-top: 2px solid ${gold};
    width: 4rem;
    margin: 15px 1rem;
}

@media (max-width: 610px) {
    font-size: 45px;
    margin: 5px;

    &::before,    
    &::after { 
        display: none;
    }
}
`;

export default Title;