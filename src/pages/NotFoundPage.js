import styled from "styled-components"

const NotFound = () => (
    <NotFoundDiv>
        <NotFoundTitle>Page not found!</NotFoundTitle>
    </NotFoundDiv>
);

const NotFoundDiv = styled.div`
    width: 100%;
    height: 100vh;
`

const NotFoundTitle = styled.h2`
    margin: 50px 0;
    text-align: center;
`

export default NotFound;