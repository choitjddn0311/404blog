import React from "react";
import styled from "styled-components";

const containerSize = 1400;
const mainColor = '#fb8500';

const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ddd;
`;

const Container = styled.div`
    width: ${containerSize}px;
    background: #aaa;
`;

const Form = styled.form`
    width: 100%;
    height: 90vh;
    position: sticky;
    top: 0;
    background: ${mainColor};
    overflow-y: scroll;

    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Post = () => {
    return(
        <>
            <Main>
                <Container>
                    <Form></Form>
                </Container>
            </Main>
        </>
    )
}

export default Post;