import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import moment from 'moment';

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
    const [user, setUser] = useState(null);

    useEffect(() => {
        // localstorge에서 id가져오고
        const id = localStorage.getItem('userId');
        // console.log(id)

        if(!id) return;

        // 여기서 백엔드에 넘김
        axios.post(`${process.env.REACT_APP_API_URL}/user/info` , {id})
            .then(res => {
                if(res.data.success) {
                    setUser(res.data.user);
                }
            })
            .catch(err => {
                console.error('정보 가져오기 실패' , err)
            })
    },[]);

    // db에서 넘어오는거 case문으로 한글로 출력해줌
    const getGenderText = (code) => {
        switch(code) {
            case 'male':
                return '남성';
            case 'female':
                return '여성';
            case 'other':
                return '기타';
            default:
                return '미입력';
        }
    }

    return (
        <>
            <Main>
                <Container>
                    {user? (
                        <>
                            <h1>마이페이지</h1>
                            <p>아아디 {user.id}</p>
                            <p>이메일 {user.email}</p>
                            {/* moment.js 를 활용한 datetime format */}
                            <p>생년월일: {moment(user.birthday).format('YYYY년 MM월 DD일')}</p>
                            {/* 성별 출력 */}
                            <p>성별: {getGenderText(user.gender)}</p>
                        </>
                    ) : (
                        <p>오류가 발생했습니다.</p>
                    )}
                </Container>
            </Main>
        </>
    )
}
export default Mypage;