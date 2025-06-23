import React from "react";
import styled from "styled-components";

const container = 1400;

const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: ${container}px;
    min-height: 100px;
    background: #aaa;
`

const Mypage = () => {
    return (
        <>
            <Main>
                <Container></Container>
            </Main>
        </>
    )
}
export default Mypage;