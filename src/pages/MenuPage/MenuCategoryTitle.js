import React from 'react';
import styled from 'styled-components';

const MenuCategoryTitle = (props) => (
    <MenuCatTitle>
        {props.children}
        <MenuCatVertical />
    </MenuCatTitle>
);

const pink = '#FFB6C1';

const MenuCatTitle = styled.div`
    margin: 60px auto;
    padding-top: 15px;
    width: 200px;
    height: 50px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 3px;
    font-weight: bold;
    text-align: center;
    box-shadow: inset 0 0 0 2px ${pink};

    @media (max-width: 1140px) {
        margin: 0 auto;
    }
`

const MenuCatVertical = styled.div`
    position: relative;
    top: -54px;
    width: 170px;
    height: 80px;
    margin-left: 15px;
    box-shadow: inset 0 0 0 2px ${pink};
`

export default MenuCategoryTitle;