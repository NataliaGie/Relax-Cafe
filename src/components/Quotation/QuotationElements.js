import styled from 'styled-components';
import q1 from '../../images/quotation-pic.jpg';

export const QuotationWrapper = styled.div`
    position: relative;
    height: 500px;
    box-shadow: inset 0 0 0 100vw rgba(0,0,0,0.5);
    background: url(${q1});
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1040px) {
        height: 350px;
        background-size: 1040px 500px;
        }

    @media (max-width: 780px) {
        height: 290px;
        background-size: 780px 450px;
    }

    @media (max-width: 580px) {
        height: 250px;
        background-size: 580px 400px;
    }

    @media (max-width: 420px) {
        height: 400px;
        background-size: 430px 430px;
    }

`

export const CustomShape = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    & svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 127px;
    }

    & .shape-fill {
        fill: #FFFAFA;
    }
`

export const Quote = styled.p`
    inline-size: 1000px;
    overflow-wrap: break-word;
    color: white;
    font-size: 18px;
    font-style: italic;
    line-height: 1.4;

    @media (max-width: 1040px) {
        inline-size: 700px;
        margin-top: 30px;
    }

    @media (max-width: 780px) {
        inline-size: 500px;
        font-size: 15px;
    }

    @media (max-width: 580px) {
        inline-size: 300px;
        font-size: 13px;
        margin-top: 55px;
    }

    @media (max-width: 420px) {
        
    }
`

export const QuotationAuthor = styled.p`
    color: white;
    font-size: 18px;
    margin-top: 20px;

    @media (max-width: 780px) {
        margin-top: 10px;
        font-size: 15px;
    }

    @media (max-width: 580px) {
        margin-top: 2px;
        font-size: 13px;
    }

    @media (max-width: 420px) {
       
    }
`