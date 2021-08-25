import React from 'react';
import styled from 'styled-components';

const ImageSectionElement = (props) => (
    <OneImage 
        src={props.src}/>
);

const OneImage = styled.img`
    width: 32%;
    height: 100%;
    margin: 0 1px;
    
`;

export default ImageSectionElement;