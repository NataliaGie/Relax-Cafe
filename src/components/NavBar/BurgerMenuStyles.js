import styled from 'styled-components';

export const BurgerLink = styled.a`
    font-size: 21px;
    font-weight: bold;
    color: #b8b7ad;
    text-decoration: none;

    &:active {
        color: #FFB6C1;
    }
`

export const burgerStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '40px',
      height: '35px',
      right: '30px',
      top: '18px'
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'column'
    },
    bmItem: {
        marginLeft: '10px',
        padding: '10px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }