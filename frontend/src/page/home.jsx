import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PostCard from "../components/postCard/mainPost";
import { GoDiscussionOutdated } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

const containerSize = 1400;

const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
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
        gap: 10px;
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
`;

const EmptyPostText = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/posts`)
        .then(res => {
            setPosts(res.data);
        })
        .catch(err => {
            console.error("글 불러오기 실패:",err);
        })
    }, []);
    return (
        <>
            <Main>
                <PostTab>
                    <li><h2><GoDiscussionOutdated /> 최신</h2></li>
                    {/*  뜻 친구 */}
                    <li><h2><FaUserFriends />  사공 글</h2></li>
                    <li><h2><HiOutlineDocumentDuplicate /> 내 글</h2></li>
                </PostTab> 
                <Container>
                    {posts.length === 0 ? (
                    <EmptyPostText>
                        <h2>올라온 포스트가 없습니다.</h2>
                    </EmptyPostText>
                    ) : (
                        posts.map((post) => {
                          const date = new Date(post.created_at);
                          const koreanTime = new Date(date.getTime() + 9 * 60 * 60 * 1000);
                          return (
                            <PostCard
                              key={post.idx}
                              title={post.title}
                              post_text={post.post_text}
                              id={post.id}
                              dateTime={`${koreanTime.toISOString().slice(0, 16).replace("T", " ")}`}
                            />
                            );
                        })
                    )}

                        {/* // postCard onClick -> postShow.jsx : title, content, user, created_at 보이기... */}
                </Container>
            </Main>
        </>
    )
}
export default Home;