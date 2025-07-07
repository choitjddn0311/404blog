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
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border: 1px solid #ccc;
`;

const Tr = styled.tr`
    border: 1px solid #ccc;
    height: 50px;
`
const Th = styled.th`
    background: #f5f5f5;
    width: 150px;
`

const Td = styled.td`
    background: #fff;
    text-decoration: underline;
    padding-left: 10px;
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
    const getGenderKorean = (gender) => {
        switch(gender) {
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
                            <h1>내 정보</h1>
                            <Table>
                                <Tr>
                                    <Th>아이디</Th>
                                    <Td><input type="text" value={user.id} readOnly/></Td>
                                </Tr>
                                <Tr>
                                    <Th>이름</Th>
                                    <Td>{user.name}</Td>
                                </Tr>
                                <Tr>
                                    <Th>이메일</Th>
                                    <Td>{user.email}</Td>
                                </Tr>
                                <Tr>
                                    <Th>성별</Th>
                                    <Td>{getGenderKorean(user.gender)}</Td>
                                </Tr>
                                <Tr>
                                    <Th>생년월일</Th>
                                    <Td>{moment(user.birthday).format('YYYY-MM-DD')}</Td>
                                </Tr>
                                <Tr>
                                    <Th>가입일</Th>
                                    <Td>{moment(user.created_at).format('YYYY-MM-DD')}</Td>
                                </Tr>
                            </Table>
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