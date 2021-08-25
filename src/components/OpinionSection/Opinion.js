import React from 'react';
import styled from 'styled-components';

const Opinion = (props) => (
    <OpinionContainer>
        <OpinionText>{props.text}</OpinionText>
        <OpinionAuthor>{props.author}</OpinionAuthor>
    </OpinionContainer>
);

const OpinionContainer = styled.div`
    margin-bottom: 60px;
    height: 90%;
    display: inline-block;
`;

const OpinionText = styled.p`
    font-size: 18px;
    inline-size: 800px;
    overflow-wrap: break-word;
    font-style: italic;
    line-height: 1.5;

    @media (max-width: 870px) {
        inline-size: 500px;
    }

    @media (max-width: 540px) {
        inline-size: 260px;
    }
`;

const OpinionAuthor = styled.p`
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
`;

export default Opinion;