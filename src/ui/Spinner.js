import React from 'react';
import styled from 'styled-components';
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';


const Spinner = () => (
    <SpinnerContainer>
        <BarLoader
            height={6}
            css={override} />
    </SpinnerContainer>
);

const override = css`
    left: 44%;
    top: 50%;
    display: inline-block;
    width: 200px;
`

const SpinnerContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
`

export default Spinner;