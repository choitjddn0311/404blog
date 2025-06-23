import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {useAuth} from '../components/authContext';
import { useNavigate } from "react-router-dom";

const containerSize = 1400;
const mainColor = '#111';

const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: ${containerSize}px;
`;

const Form = styled.form`
    width: 100%;
    height: 90vh;
    position: sticky;
    top: 0;
    background: #fff;
    overflow-y: scroll;
    // padding: 10px;

    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FormInner = styled.div`
    width: 100%;
    height: 85%;
    // padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FromTop = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
`;

const FromTopLeft = styled.div`
    width: 80%;
    height: 100%;

    & > h3 {
        width: 100%;
        height: 30px;
        align-content: center;
        color: #111;
    }
`;

const TitleInput = styled.input`
    width: 100%;
    height: 70px;
    background: #fff;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
`

const FromTopRight = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
`;

const TemporailyPostBtn = styled.div`
    width: 90%;
    height: 70%;
    background: #111;
    color: #fff;
    text-align: center;
    align-content: center;
    border-radius: 5px;
    cursor: pointer;
`;

const FormMain = styled.main`
    width: 100%;
    height: 85%;
`;

const ContentTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    background: #fff;
    resize: none;
    outline: none;
    font-size: 18px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow-y: scroll;
`;

const FormSubmitCon = styled.div`
    width: 100%;
    height: 15%;
    background: #fff;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 25px;
`;

const FormSubmitBtn = styled.input`
    width: 200px;
    height: 50%;
    background: ${mainColor};
    color: #fff;
    border: none;
    outline: none;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    
    &:hover {
        cursor: pointer;
        background: #000;
    }
    `
    
    const FromTemporailySaveBtn = styled.input`
    width: 200px;
    height: 50%;
    border: 1px solid ${mainColor};
    background: #fff;
    color: ${mainColor};
    outline: none;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`;

// 설정된 props는 임시저장본을 불러올때 사용됨
// 자세히 모르겠다;;
const Post = () => {
    const {user} = useAuth();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post_text = content.slice(0,50);
        console.log(user);

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/upload` , {
                id: user?.id,
                title,
                content,
                post_text,
            });
            alert("글이 게시되었습니다.");
        } catch(err) {
            console.error(err);
            alert('글 게시 실패');
        }
        
        setTimeout(() => {
            navigate('/');
        },1000)
    }


    // 현재 날짜 출력하기
    const today = new Date();
    // month에 1 더하는 이유 => 1월 부터 12월이 0~11로 값이 있어 1~12월로 출력하려면 1을 더해야한다
    // 생각보다 간단함
    const formatDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    return(
        <>
            <Main>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <FormInner>
                            <FromTop>
                                <FromTopLeft>
                                    <h3>{formatDate}</h3>
                                    <TitleInput 
                                        name="title" 
                                        placeholder="제목을 입력해주세요." 
                                        type="text"
                                        value={title}
                                        onChange={(e) => {
                                            const newTitle = e.target.value;
                                            if(newTitle.length > 132) {
                                                alert('제목은 최대 132글자입니다');
                                                setTitle(newTitle.slice(0,132));
                                                return;
                                            } else {
                                                setTitle(newTitle);
                                            }
                                        }}
                                        />
                                </FromTopLeft>
                                <FromTopRight>
                                    <TemporailyPostBtn><h3>임시저장본 불러오기</h3></TemporailyPostBtn>
                                </FromTopRight>
                            </FromTop>
                            <FormMain>
                                <ContentTextArea 
                                        placeholder="내용을 입력해주세요." 
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    >
                                </ContentTextArea>
                            </FormMain>
                        </FormInner>
                        <FormSubmitCon>
                            <FromTemporailySaveBtn type="button" value="임시저장"/>
                            <FormSubmitBtn type="submit" value="글 올리기"/>
                        </FormSubmitCon>
                    </Form>
                </Container>
            </Main>
        </>
    )
}

export default Post;