import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const NavItems = styled.ul`
    width: 95%;
    margin-left: 5%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const navigationItems = () => (
    <NavItems>
        <NavItem link="/menu">Menu</NavItem>
        <NavItem link="/contact">Contact us</NavItem>
    </NavItems>
);

export default navigationItems;