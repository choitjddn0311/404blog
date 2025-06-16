import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo/logo.png"

const containerSize = 1400;

const Container = styled.footer`
    width: 100%;
    height: 200px;
    background: #fff;
    border-top: 1px solid #ddd;
    box-shadow: 0 0 20px #ddd;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
`;

const Inner = styled.div`
    width: ${containerSize}px;
    height: 100%;
`

const FooterLogo = styled.div`
    width: 100px;
    height: 100px;

    & > img {
        width: 100%;
        height: 100%;
    }
`

const Footer = () => {
    return(
        <>
            <Container>
                <Inner>
                    <FooterLogo>
                        <img src={Logo} alt="" />
                    </FooterLogo>
                </Inner>
            </Container>
        </>
    )
}

export default Footer;