import React from 'react';
import styled from 'styled-components';
import ImageSectionElement from './ImageSectionElement';
import image1 from '../../images/sectionImage1.jpg';
import image2 from '../../images/sectionImage2.jpg';
import image3 from '../../images/sectionImage3.jpg';


const ImageSection = () => (
    <ElementsWrapper>
        <ImageSectionElement 
            src={image1}
            alt="muffins with blubberries" />
        <ImageSectionElement 
            src={image2}
            alt="coffee with flowers" />
        <ImageSectionElement 
            src={image3}
            alt="coffee with syroup to go" />
    </ElementsWrapper>
);

const ElementsWrapper = styled.div`
    margin: 120px 0 10px;
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    @media (max-width: 1200px) {
        height: 360px;
    }

    @media (max-width: 970px) {
        height: 260px;
    }

    @media (max-width: 720px) {
        height: 200px;
    }

    @media (max-width: 550px) {
        display: none;
    }
`;

export default ImageSection;