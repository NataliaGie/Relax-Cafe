import styled from 'styled-components';

 export const AboutContainer = styled.div`
    background-color: white;
    height: 700px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: transparent;

    @media (max-width: 870px) {
        flex-direction: column;
        height: auto;
    }
`;

 export const AboutContent = styled.div`
    position: relative;
    width: 60vw;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 420px;
    }

    @media (max-width: 870px) {
        order: -1;
        padding-bottom: 50px;
    }
`;

export const AboutImage = styled.img`
    width: 390px;
    height: 520px;
    margin: 40px 0 40px 80px;
    box-shadow: 20px -20px 0 -3px #FFFAFA,
        20px -20px black;

    @media (max-width: 1200px) {
        width: 330px;
        height: 480px;
    } 
    
    @media (max-width: 870px) {
        margin: 5px 0 90px;
        width: 390px;
        height: 520px;
    }

    @media (max-width: 500px) {
        width: 270px;
        height: 420px;
    }
`;

export const AboutText = styled.p`
    margin: 0 auto;
    inline-size: 500px;
    overflow-wrap: break-word;
    font-size: 22px;
    line-height: 1.6;

    @media (max-width: 1200px) {
        
        inline-size: 400px;
        font-size: 22px;
    }

    @media (max-width: 870px) {
        font-size: 24px;
    }

    @media (max-width: 500px) {
        inline-size: 300px;
        font-size: 18px;
    }
`;

