import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./modal"; // 모달 컴포넌트
import { TbError404 } from "react-icons/tb";

const containerSize = 1400;
const mainColor = '#fb8500';

const MainUtil = styled.div`
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UtilContainer = styled.div`
  width: ${containerSize}px;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const UtilInner = styled.ul`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

const Util = styled.li`
  height: 100%;
  text-align: center;
  align-content: center;
  color: #ddd;
  cursor: pointer;

  &:hover {
    color: #111;
  }
`;

const LoginForm = styled.form`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LoginInputContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const LoginInput = styled.input`
    width: 100%;
    height: 50%;
    border: 1px solid #ddd;
    outline: none;
    padding-left: 10px;
`;

const SubmitBtn = styled.input`
    width: 100%;
    height: 50px;
    text-align: center;
    align-content: center;
    border-radius: 5px;
    background: ${mainColor};
    color: #fff;
    border: none;

    &:hover,
    &:active {
        background: #e67300;
        cursor: pointer;
    }
`;

const SignUpContainer = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const SignUpForm = styled.form`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const SignUpInputArea = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const SignUpTitle = styled.div`
    width: 100%;
    height: 30px;
    text-align: start;
    align-content: center;
    font-weight: bold;
`;

const SignUpIdInputContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > input[type=text] {
        width: 75%;
        height: 100%;
        padding-left: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        outline: none;
        font-size: 16px;
    }

    & > input[type=submit] {
        width: 20%;
        height: 100%;
        background: ${mainColor};
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
    }
`;

const SignUpInputContainer = styled.div`
    width: 100%;
    height: 50px;

    & > input {
        width: 100%;
        height: 100%;
        padding-left: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        outline: none;
        font-size: 16px
    }
`;

const SignUpPwTitle = styled.div`
    width: 100%;
    height: 40px;
    text-align: start;
    align-content: center;
    font-weight: bold;
`

const SignUpPwContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SignUpPwInputContainer = styled.div`
    width: 100%;
    height: 100px;

    & > input {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border: 1px solid #ddd;
        font-size: 16px;
        padding-left: 10px;
        outline: none;
    }
`

const HeaderUtil = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login"); // 로그인 또는 회원가입입

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <MainUtil>
        <UtilContainer>
          <UtilInner>
            <Util onClick={() => openModal("login")}>로그인</Util>
            <Util onClick={() => openModal("signup")}>회원가입</Util>
          </UtilInner>
        </UtilContainer>
      </MainUtil>

      <Modal isOpen={modalOpen} onClose={closeModal} type={modalType}>
        <h2>{modalType === "login" ?  "로그인" : "회원가입"}</h2>
        {modalType === "login" ? (
            <LoginForm action="">
                <LoginInputContainer>
                    <LoginInput type="text" placeholder="아이디를 입력해주세요." style={{borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}/>
                    <LoginInput type="password" placeholder="비밀번호를 입력해주세요." style={{borderTop: "none", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}/>
                </LoginInputContainer>
                <SubmitBtn type="submit" value="로그인"/>
            </LoginForm>
        ) : (
            <SignUpForm action="">
                <SignUpInputArea>
                    <SignUpContainer>
                        <SignUpTitle>아이디 <sup style={{color:'red'}}>*</sup></SignUpTitle>
                        <SignUpIdInputContainer><input type="text" placeholder="아이디를 입력해주세요." /><input type="submit" value="중복확인" /></SignUpIdInputContainer>
                    </SignUpContainer>
                    <SignUpContainer>
                        <SignUpTitle>이름 <sup style={{color: 'red'}}>*</sup></SignUpTitle>
                        <SignUpInputContainer><input type="text" placeholder="이름을 입력해주세요." /></SignUpInputContainer>
                    </SignUpContainer>
                    <SignUpPwContainer>
                        <SignUpPwTitle>비밀번호 <sup style={{color: 'red'}}>*</sup></SignUpPwTitle>
                        <SignUpPwInputContainer>
                            <input type="password" placeholder="비밀번호를 입력해주세요." style={{borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}/>
                            <input type="password" placeholder="다시한번 입력해주세요." style={{borderTop: "none", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}/>
                        </SignUpPwInputContainer>
                    </SignUpPwContainer>
                </SignUpInputArea>
                <SubmitBtn type="submit" value="회원가입"/>
            </SignUpForm>
        )}
      </Modal>
    </>
  );
};

export default HeaderUtil;
