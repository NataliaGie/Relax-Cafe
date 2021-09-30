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
import cake1 from '../../images/cake1.jpg';
import cake2 from '../../images/cake2.jpg';
import bigCake from '../../images/bigCake.jpg';

const Cakes = () => (
    <>
        <MenuCategoryTitle>Cakes</MenuCategoryTitle>
        <MenuCategoryContainer>
            <MenuPhotoContainer>
                <MenuTwoPhotosContainer>
                    <MenuPhoto 
                        src={cake1}
                        alt="cake1" />
                    <MenuPhoto 
                        src={cake2}
                        alt="cake2" />
                </MenuTwoPhotosContainer>
                <MenuBiggerPhoto 
                    src={bigCake}
                    alt="cake3" />
            </MenuPhotoContainer>
            <MenuTextContainer>
                <MenuPositionContainer>
                    <MenuPositionName>chocolate cake</MenuPositionName>
                    <MenuPositionPrice>6$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>cheescake with strawberries</MenuPositionName>
                    <MenuPositionPrice>7$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>brownie</MenuPositionName>
                    <MenuPositionPrice>7$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>caramel cake with cream</MenuPositionName>
                    <MenuPositionPrice>6$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>muffin with blueberries and vanilla</MenuPositionName>
                    <MenuPositionPrice>5$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>pavlova with raspberries</MenuPositionName>
                    <MenuPositionPrice>6$</MenuPositionPrice>
                </MenuPositionContainer>
                <MenuPositionContainer>
                    <MenuPositionName>tiramisu</MenuPositionName>
                    <MenuPositionPrice>7$</MenuPositionPrice>
                </MenuPositionContainer>
            </MenuTextContainer>
        </MenuCategoryContainer>
    </>
);

export default Cakes;