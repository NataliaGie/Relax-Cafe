import styled from 'styled-components';
import contactPageBackgr from '../../images/contactPageBackgr.jpg';

export const ContactSection = styled.section`
    width: 100%;
    height: 1100px;
    background-image: url(${contactPageBackgr});
    background-size: cover;

    @media (max-width: 620px) {
        height: 950px;
    }
`

export const ContactForm = styled.form`
    width: 50%;
    height: 700px;
    margin: 50px auto;
    background-color: transparent;
    border: 2px solid black;
    box-shadow: 7px 5px 10px #5c5c5c;

    @media (max-width: 900px) {
        width: 70%;
        margin: 30px auto;
        height: 660px;
    }

    @media (max-width: 620px) {
        width: 88%;
        height: 620px;
        margin: 10px auto;
    }
`

export const ContactItemsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 85%;
    margin: 70px auto 30px;
    padding-top: 50px;

    @media (max-width: 900px) {
        width: 87%;
    }

    @media (max-width: 620px) {
        margin: 30px auto;
    }
`

export const ContactItemsRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 20px 0 90px;
`

export const ContactItem = styled.input`
    width: 47%;
    height: 35px;
    margin: 0 auto;
    font-size: 18px;
    background: transparent;
    border: transparent;
    border-bottom: 2px solid black;

    &:focus {
        outline: none;
        background-color: white;
        border: 1px solid black;
    }
`

export const ContactMessage = styled.textarea`
    height: 100px;
    margin-bottom: 60px;
    background: transparent;
    border: transparent;
    border-bottom: 2px solid black;
    font-size: 18px;

    &:focus {
        outline: none;
        background-color: white;
        border: 1px solid black;
    }

    @media (max-width: 620px) {
        height: 140px;
    }
`

export const SubmitButtonContainer = styled.div`
    margin: 0 auto;
`