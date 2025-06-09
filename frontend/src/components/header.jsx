import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/images/logo/logo.png"

const Header = () => {
    const containerSize = 1400;
    const mainColor= '#fb8500';
    const Header = styled.header`
        width: 100%;
        height: 100px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        `;
    const HeaderContainer = styled.div`
        width: ${containerSize}px;
        height: 100%;
        color: ${mainColor};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    const LogoContainer = styled.div`
        height: 100%;
        width: 100px;
        
        & > img {
            width: 100%;
            height: 100%;
        }
    `;

    const Nav = styled.nav`
        width: 800px;
        height: 100%;
    `;
    const GnbContainer = styled.ul`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        gap: 100px;
        align-items: center;
    `;
    const Gnb = styled.li`
        height: 100%;
        font-size: 30px;
        align-content: center;
    `;
    return (
        <>
            <Header>
                <HeaderContainer>
                        <LogoContainer>
                            <img src={LogoImg} alt="" />
                        </LogoContainer>
                    <Nav>
                        <GnbContainer>
                            <Gnb><Link to="/">홈으로</Link></Gnb>
                            <Gnb><Link to="/post">글쓰기</Link></Gnb>
                        </GnbContainer>
                    </Nav>
                </HeaderContainer>
            </Header>
        </>
    )
}

export default Header;