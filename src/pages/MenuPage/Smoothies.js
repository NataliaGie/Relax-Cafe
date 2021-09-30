import React from 'react';
import { 
    MenuTextContainer, 
    MenuPhotoContainer,
    MenuCategoryContainer,
    MenuPositionContainer,
    MenuPositionName,
    MenuPositionPrice,
    MenuPhoto,
    MenuTwoPhotosContainer,
    MenuBiggerPhoto } from './MenuElements';
import MenuCategoryTitle from './MenuCategoryTitle';
import smoothies from '../../images/smoothies.jpg';
import cocoSmoothie from '../../images/coconSmooth.jpg';
import greenSmoothie from '../../images/grnSmooth.jpg';

const Smoothies = () => (
    <>
        <MenuCategoryTitle>Smoothies</MenuCategoryTitle>
        <MenuCategoryContainer>
            <MenuPhotoContainer>
                <MenuTwoPhotosContainer>
                    <MenuPhoto
                        src={cocoSmoothie}
                        alt="coconut smoothie" />
                    <MenuPhoto 
                        src={greenSmoothie}
                        alt="green smoothie" />
                </MenuTwoPhotosContainer>
                <MenuBiggerPhoto 
                    src={smoothies}
                    alt="smoothies" />
            </MenuPhotoContainer>
            <MenuTextContainer>
                <MenuPositionContainer>
                    <MenuPositionName>banana smoothie</MenuPositionName>
                    <MenuPositionPrice>4$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>strawberry and mint smoothie</MenuPositionName>
                    <MenuPositionPrice>4$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>chocolate smoothie</MenuPositionName>
                    <MenuPositionPrice>4$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>coconut and cream smoothie</MenuPositionName>
                    <MenuPositionPrice>4$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>spinach and chia smoothie</MenuPositionName>
                    <MenuPositionPrice>4$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>blueberry and banana smoothie</MenuPositionName>
                    <MenuPositionPrice>4$</MenuPositionPrice>
                </MenuPositionContainer>
            </MenuTextContainer>
        </MenuCategoryContainer>
    </>
);

export default Smoothies;