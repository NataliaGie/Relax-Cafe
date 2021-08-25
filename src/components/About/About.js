import React from 'react';
import { withRouter } from 'react-router';
import { AboutContainer,
         AboutContent,
         AboutImage,
         AboutText } from './AboutElements';
import { PrimaryButton } from '../PrimaryButton';         
import Welcome from '../../images/welcome.jpg';
import Title from '../Title';

const About = (props) => {

    const goToNextPath = (path) => {
        props.history.push(path);
    }

    return (
    <AboutContainer>
        <AboutImage src={Welcome} alt="Hands with cofee" />
        <AboutContent>
            <Title>About us</Title>
            <AboutText>Relax Cafe is a place where everyone can 
                feel at ease and just relax. We offer top quality
                coffee, best desserts preparet with love and passion.
                Just try on!
            </AboutText>
            <PrimaryButton onClick={() => goToNextPath('/menu')}>
                Our Menu
            </PrimaryButton>
        </AboutContent>
    </AboutContainer>
    )
};


export default withRouter(About);