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
import pancakes from '../../images/pancakes.jpg';
import frenchToast from '../../images/frenchToast.jpg';
import sandwich from '../../images/sandwich.jpg';
    
const Breakfast = () => (
    <>
    <MenuCategoryTitle>Breakfast</MenuCategoryTitle>
    <MenuCategoryContainer>
        <MenuTextContainer>
            <MenuPositionContainer>
                <MenuPositionName>banana-chocolate pancakes</MenuPositionName>
                <MenuPositionPrice>7$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>blueberry &#38; strawberry pancakes</MenuPositionName>
                <MenuPositionPrice>7$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>french toast</MenuPositionName>
                <MenuPositionPrice>6$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>apple-cinamoon french toast</MenuPositionName>
                <MenuPositionPrice>7$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>cheese omelet</MenuPositionName>
                <MenuPositionPrice>6$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>ham, bacon and tomato omelet</MenuPositionName>
                <MenuPositionPrice>7$</MenuPositionPrice>
            </MenuPositionContainer>
            <MenuPositionContainer>
                <MenuPositionName>egg &#38; ham sandwich</MenuPositionName>
                <MenuPositionPrice>7$</MenuPositionPrice>
            </MenuPositionContainer>
        </MenuTextContainer>
        <MenuPhotoContainer>
            <MenuTwoPhotosContainer>
                <MenuPhoto 
                    src={pancakes}
                    alt="breakfast position" />
                <MenuPhoto 
                    src={sandwich}
                    alt="breakfast position" />
            </MenuTwoPhotosContainer>
            <MenuBiggerPhoto 
                src={frenchToast}
                alt="breakfast position" />
        </MenuPhotoContainer>
    </MenuCategoryContainer>
    </>
);

export default Breakfast;