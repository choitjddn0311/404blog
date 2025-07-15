import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import Profile from "../assets/images/my/profile.jpg"
import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    height: 200vh;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    height: 100%;
    
`

const Intro = () => {
    return (
        <>
        <Main>
            <Container>
                <img src={Profile} />
            </Container>
        </Main>
        </>
    )   
}

export default Intro;