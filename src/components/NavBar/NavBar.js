import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import { BurgerLink } from './BurgerMenuStyles';
import { burgerStyles } from './BurgerMenuStyles';
import { slide as Menu } from 'react-burger-menu';


const Navbar = (props) => {

    const [myNavbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const setNavigation = () => {
        if (myNavbar) {
            return ( <Nav active
                          dark={props.dark}
                          sticky={props.sticky}>
                        <Logo />
                        <NavigationItems />
                    </Nav>);
        } else {
            return ( <Nav 
                        dark={props.dark}
                        sticky={props.sticky}>
                        <Logo />
                        <NavigationItems />
                    </Nav>);
        }
    };

    const setBurgerMenu = () => {
        if (window.innerWidth < 780) {
            return (
                <Menu 
                    styles={burgerStyles}
                    right>
                    <BurgerLink href="/menu">Menu</BurgerLink>
                    <BurgerLink href="/contact">Contact us</BurgerLink>
                </Menu>
            )
        }
    }

    return (
        <>
        {setNavigation()}
        {setBurgerMenu()}
        </>
    )
}

const Nav = styled.nav`
position: ${props => props.sticky ? 'sticky' : 'fixed'};
background-color: ${props => props.active ? '#333333' : (props.dark ? '#333333' : 'transparent')};
top: 0;
height: 70px;
display: flex;
justify-content: space-between;
width: 100%;
z-index: 5;
transition: ${props => props.sticky ? 'none' : 'all ease-in-out 0.5s'};
`

export default Navbar;