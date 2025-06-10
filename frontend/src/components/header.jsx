import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/images/logo/logo.png";
import { GoSearch } from "react-icons/go";

const containerSize = 1400;
const mainColor = '#fb8500';

const MainHeader = styled.header`
    width: 100%;
    height: 100px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
`;

const HeaderContainer = styled.div`
    width: ${containerSize}px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.div`
    height: 100%;
    width: 100px;

    & img {
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
    justify-content: end;
    gap: 50px;
    align-items: center;
`;

const Gnb = styled.li`
    height: 100%;
    font-size: 25px;
    font-weight: bold;
    align-content: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 0px;
        border-radius: 2px;
        bottom: 0;
        left: 0;
        background: #111;
        display: ${(props) => props.$active ? 'none' : 'block'};
        transition: .3s;
    }

    a {
        color: ${(props) => props.$active ? "111" : "#ddd"};
        text-decoration: none;

        &:hover {
            color: #111;
        }
    }

    &:hover::before {
        height: 4px;
        transition: .3s;
    }
`;

const SearchForm = styled.form`
    width: 350px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & input {
        width: 100%;
        height: 50%;
        outline: none;
        border: none;
        border-bottom: 3px solid ${props => props.$hasValue ? '#111' : '#ddd'};
        font-size: 20px;
        caret-color: ${props => props.$hasValue ? '#111' : '#ddd'};
        color: #111;
        font-weight: 500;
    }

    & input::placeholder {
        color: #ddd;
        font-weight: 300;
    }
`;

const SearchBtn = styled.div`
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.$hasValue ? '#111' : '#ddd'};
`;

// ✅ 컴포넌트 본문
const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [search, setSearch] = useState("");

    return (
        <MainHeader>
            <HeaderContainer>
                <LogoContainer>
                    <Link to="/"><img src={LogoImg} alt="logo" /></Link>
                </LogoContainer>
                <Nav>
                    <GnbContainer>
                        <Gnb $active={currentPath === "/"}>
                            <Link to="/">홈으로</Link>
                        </Gnb>
                        <Gnb $active={currentPath === "/post"}>
                            <Link to="/post">글쓰기</Link>
                        </Gnb>
                        <Gnb $active={currentPath === "/intro"}>
                            <Link to="/intro">소개</Link>
                        </Gnb>
                        {currentPath === '/' && (
                            <SearchForm $hasValue={search !== ""}>
                                <input
                                    type="text"
                                    placeholder="검색할 내용을 입력하세요.."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <SearchBtn $hasValue={search !== ""}>
                                    <GoSearch />
                                </SearchBtn>
                            </SearchForm>
                        )}
                    </GnbContainer>
                </Nav>
            </HeaderContainer>
        </MainHeader>
    );
};

export default Header;
