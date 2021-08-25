import styled from 'styled-components';
import menuBackground from '../../images/menuBackground.png';

export const NavigationBackgroundContainer = styled.div`
    top: 0;
    left: 0;
    position: absolute;
`

export const NavigationBackground = styled.div`
    position: sticky;
    height: 70px;
    width: 100%;
    background-color: #333333;
`

export const MenuPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${menuBackground});
`

export const MenuCategoryContainer = styled.div`
    margin: 80px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 1140px) {
        flex-direction: column;
        margin: 70px 0 100px;
    }
`

export const MenuTextContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 40vw;
    padding: 90px 0;

    @media (max-width: 1140px) {
        width: 60vw;
        padding: 40px 0 20px;
    }

`

export const MenuPositionContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const MenuPositionName = styled.h3`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 17px;

    @media (max-width: 350px) {
        font-size: 14px;
        margin-right: 5px;
    }
`

export const MenuPositionPrice = styled.h3`
    font-style: italic;
    letter-spacing: 2px;
    margin-right: 50px;
    font-size: 17px;

    @media (max-width: 1140px) {
        margin-right: 0;
    }

    @media (max-width: 350px) {
        font-size: 14px;
    }
`

export const MenuPhotoContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    height: 470px;
    width: 600px;

    @media (max-width: 620px) {
        width: 80%;
        height: 400px;
    }

    @media (max-width: 545px) {
        height: 370px;
    }

    @media (max-width: 480px) {
        height: 300px;
    }

    @media (max-width: 395px) {
        height: 270px;
    }
`

export const MenuTwoPhotosContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 5px;

`

export const MenuPhoto = styled.img`
    width: 100%;
    height: 50%;
    margin-bottom: 5px;
`

export const MenuBiggerPhoto = styled.img`
    width: 50%;
    height: 99%;
`