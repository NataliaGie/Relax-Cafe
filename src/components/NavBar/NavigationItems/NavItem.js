import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const NavItem = (props) => (
    <NavLi burger={props.burger}>
        <NavLink
         to={props.link}>{props.children}</NavLink>
    </NavLi>
);

const NavLi = styled.li`
    & a {
    position: relative;
    text-decoration: none;
    color: white;
    margin: 0 65px 0 45px;
    height: 100px;
    font-size: 22px;
    text-transform: uppercase;
    }

    & a:hover {
        color: #daa520;
        transition: .9s;
    }

    & a:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%) scaleX(0);
        transform-origin: 50% 50%;
        width: 100%;
        height: 2px;
        background-color: #daa520;
        transition: transform 250ms;
    }

    & a:hover:after {
        transform: translateX(-50%) scaleX(1);
    }
`;

export default NavItem;