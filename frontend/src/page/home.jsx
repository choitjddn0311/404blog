import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PostCard from "../components/postCard/mainPost";
import { GoDiscussionOutdated } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

const containerSize = 1400;
const mainColor = '#fb8500';

const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const PostTab = styled.ul`
    width: ${containerSize}px;
    height: 100px;
    padding: 20px 0;
    color: #ddd;
    display: flex;
    flex-direction: start;
    align-items: center;
    gap: 25px;

    & > li {
        height: 100%;
        align-content: center;
        position: relative;
    }

    & > li > h2 {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    & > li:hover {
        color: #111;
        cursor: pointer;
    }

    & > li::before {
        content: '';
        width: 100%;
        height: 0;
        background: #111;
        position: absolute;
        bottom: 0;
        border-radius: 3px;
        left: 0;
    }
    
    & > li:hover::before {
        height: 3px;
    }
`

const Container = styled.div`
    width: ${containerSize}px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 25px;
    align-items: center;
`
const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/posts")
        .then(res => {
            setPosts(res.data);
        })
        .catch(err => {
            console.error("글 불러오기 실패:",err);
        })
    })
    return (
        <>
            <Main>
                <PostTab>
                    <li><h2><GoDiscussionOutdated /> 최신</h2></li>
                    <li><h2><FaUserFriends /> 친구 포스트</h2></li>
                    <li><h2><HiOutlineDocumentDuplicate /> 내 포스트</h2></li>
                </PostTab>
                <Container>
                    {posts.map((post) => (
                        <PostCard
                            key={post.idx}
                            title={post.title}
                            post_text={post.post_text}
                            id={post.id}
                        />

                        // postCard onClick -> postShow.jsx : title, content, user, created_at 보이기...
                    ))}
                </Container>
            </Main>
        </>
    )
}
export default Home;