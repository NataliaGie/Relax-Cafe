import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png'

const Logo = () => {
    return (
        <MyLogo to="/">
            <img src={logo}
                 alt="Logo"/>
        </MyLogo>
    );
};

const MyLogo = styled(Link)`
    position: fixed;
    top: 0;
    & img {
        z-index: 5;
        height: 70px;
        width: 70px;
    }
`

export default Logo;