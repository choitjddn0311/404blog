import React, { useState , useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 450px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CardImg = styled.div`
    width: 100%;
    height: 200px;
    background: #ddd;
    text-align: center;
    align-content: center;
`

const CardTextContainer = styled.div`
    width: 100%;
    height: 100px;
    background: #eee;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const CardWriter = styled.div`
    width: 100%;
    height: 50px;
    background: #eee;
    padding: 0 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;

    & > div {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #fff;
    }
    & > p > span {
        font-weight: bold;
    }
`

const PostCard = ({title, post_text, id}) => {
    return (
        <>
            <Card>
                <CardImg>카드 이미지 영역입니다</CardImg>
                <CardWriter>
                    <div></div>
                    <p><span>{id}</span> 님이 작성한 포스트</p>
                </CardWriter>
                <CardTextContainer>
                    <h3>{title}</h3>
                    <p>{post_text}</p>
                </CardTextContainer>
            </Card>
        </>
    )
}
export default PostCard;