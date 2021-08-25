import styled from 'styled-components';

export const PrimaryButton = styled.button`
width: 200px;
height: 60px;
margin: 50px auto;
padding: 18px 0;
cursor: pointer;
font-size: 20px;
text-align: center;
text-decoration: none;
text-transform: uppercase;
color: white;
background-color: black;
border: black;
border-radius: 50px;

&:hover {
animation: rotate 0.7s ease-in-out both span;
    animation: storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
}

@media (max-width: 500px) {
    width: 150px;
    height: 50px;
    font-size: 18px;
    padding: 14px 0;
}

@keyframes rotate {
0%
  { transform: rotate(0deg); translate3d(0, 0, 0); }
25%
  { transform: rotate(3deg); translate3d(0, 0, 0); }
50%
  { transform: rotate(-3deg); translate3d(0, 0, 0); }
75%
  { transform: rotate(1deg); translate3d(0, 0, 0); }
100%
  { transform: rotate(0deg); translate3d(0, 0, 0); }
}  

@keyframes storm {
0%
  { transform: translate3d( 0, 0, 0) translateZ(0); }
25%
  { transform: translate3d( 4px, 0, 0) translateZ(0); }
50%
  { transform: translate3d( -3px, 0, 0) translateZ(0); }
75%
  { transform: translate3d( 2px, 0, 0) translateZ(0); }
100%
  { transform: translate3d( 0, 0, 0) translateZ(0); }
}  
`