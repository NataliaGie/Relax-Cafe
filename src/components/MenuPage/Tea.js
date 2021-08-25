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
import looseTea from '../../images/tea.jpg';
import teaBags from '../../images/teaBags.jpg';
import cupOfTea from '../../images/cupOfTea.jpg';

const Tea = () => (
    <>
    <MenuCategoryTitle>tea</MenuCategoryTitle>
    <MenuCategoryContainer>
        <MenuTextContainer>
            <MenuPositionContainer>
                <MenuPositionName>black tea - with lemon</MenuPositionName>
                <MenuPositionPrice>3$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>green tea</MenuPositionName>
                <MenuPositionPrice>3$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>earl grey black tea</MenuPositionName>
                <MenuPositionPrice>3$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>english tea - with milk</MenuPositionName>
                <MenuPositionPrice>3$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>white tea</MenuPositionName>
                <MenuPositionPrice>3$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>black fruit tea</MenuPositionName>
                <MenuPositionPrice>3$</MenuPositionPrice>
            </MenuPositionContainer>
        </MenuTextContainer>
        <MenuPhotoContainer>
        <MenuTwoPhotosContainer>
                <MenuPhoto 
                    src={teaBags}
                    alt="tea bags" />
                <MenuPhoto 
                    src={cupOfTea}
                    alt="cup of tea" />
            </MenuTwoPhotosContainer>
            <MenuBiggerPhoto 
                src={looseTea}
                alt="loose tea" />
        </MenuPhotoContainer>
    </MenuCategoryContainer>
    </>
);

export default Tea;