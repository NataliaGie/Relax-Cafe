import React from 'react';
import styled from 'styled-components';

const KindOfCoffee = (props) => (
    <KindOfContainer right={props.right}>
        <KindParagraph>{props.title}</KindParagraph>
        <Line />
        <Ingredients>{props.text}</Ingredients>
    </KindOfContainer>
);

const KindOfContainer = styled.div`
    margin: 10px 40px;
    text-align: ${props => props.right ? 'right' : 'left'};

    @media (max-width: 650px) {
        text-align: center;
        margin: 0;
    }
`;

const KindParagraph = styled.p`
    font-size: 26px;
    margin: 50px 0;

    @media (max-width: 710px) {
        font-size: 22px;
        margin: 25px 0;
    }
`;

const Line = styled.hr`
    position: relative;
    bottom: 20px;
    border: 1px solid black;
`;

const Ingredients = styled.p`
    height: 60px;
    font-size: 14px;
    font-style: italic;
    margin-top: -10px;
    word-wrap: break-word;
`;


export default KindOfCoffee;