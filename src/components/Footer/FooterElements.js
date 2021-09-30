import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    padding: 60px 100px 10px;
    margin: 0 auto;
    width: 100%;
    background-color: #333333;
`

export const FooterRow = styled.div`
    margin: 0 15%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;
    justify-content: center;

    @media (max-width: 540px) {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        margin: 0 10%;
        text-align: left; 
    }
`

export const FooterLinksContainer = styled.div`
    margin-bottom: 30px;
    line-height: 1.9;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FooterLinksTitle = styled.h2`
    color: #b8b7ad;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;

    @media (max-width: 540px) {
        font-size: 18px;
    }
`

export const FooterLink = styled(Link)`
    margin: 0 10px;
    font-size: 16px;
    color: #b8b7ad;
    text-decoration: none;

    &:hover {
        color: #daa520;
        transition: 200ms ease-in;
    }
`

export const FooterIconsSection = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FooterFbIcon = styled.i`
    font-size: 26px;
    margin: 10px 5px;
    color: #b8b7ad;
    cursor: pointer;

    &:hover {
        color: #4267B2;
        transition: 200ms ease-in;
    }
`

export const FooterIgIcon = styled(FooterFbIcon)`
    &:hover {
        color: #8a3ab9;
    }
`

export const Copyright = styled.p`
    margin-left: -7%;
    font-style: italic;
    font-size: 13px;
    color: #b8b7ad;
`
