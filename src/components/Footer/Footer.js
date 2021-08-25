import React from 'react';
import { FooterContainer,
         FooterRow,
         FooterLinksContainer,
         FooterLinksTitle,
         FooterLink,
         FooterIconsSection,
         FooterFbIcon,
         FooterIgIcon,
         Copyright
} from './FooterElements';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => (
    <FooterContainer>
        <FooterRow>
            <FooterLinksContainer>
                <FooterLinksTitle>About</FooterLinksTitle>
                <FooterLink>About us</FooterLink>
                <FooterLink>Our history</FooterLink>
                <FooterLink>Our mission</FooterLink>
                <FooterLink>Testimonials</FooterLink>
            </FooterLinksContainer>
            <FooterLinksContainer>
                <FooterLinksTitle>Menu</FooterLinksTitle>
                <FooterLink>Our Menu</FooterLink>
                <FooterLink>Gluten free</FooterLink>
                <FooterLink>Vegan</FooterLink>
                <FooterLink>Drinks</FooterLink>
            </FooterLinksContainer>
            <FooterLinksContainer>
                <FooterLinksTitle>Contact Us</FooterLinksTitle>
                <FooterLink>Adress</FooterLink>
                <FooterIconsSection>
                    <FooterFbIcon><FaFacebookSquare /></FooterFbIcon>
                    <FooterIgIcon><FaInstagram /></FooterIgIcon>
                </FooterIconsSection>
            </FooterLinksContainer>
        </FooterRow>
        <Copyright>Copyright 2021</Copyright>
    </FooterContainer>
);



export default Footer;