import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "./modal"; // 모달 컴포넌트

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
    font-size: 16px;
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
  const [modalType, setModalType] = useState("login");

  // 회원가입 상태 관리
  const [signUpData, setSignUpData] = useState({
    id: "",
    name: "",
    pw: "",
    pw2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id");
    const pw = formData.get("pw");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, pw }),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ 로그인 성공: " + data.message);
        closeModal();
      } else {
        alert("❌ 로그인 실패: " + data.message);
      }
    } catch (err) {
      alert("🚨 서버 에러: " + err.message);
    }
  };

  const handleCheckDuplicate = async (e) => {
    e.preventDefault();
    if (!signUpData.id) {
      alert("아이디를 입력해주세요.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/check-id", {
        id: signUpData.id,
      });

      if (res.data.available) {
        alert("✅ 사용 가능한 아이디입니다.");
      } else {
        alert("❌ 이미 사용 중인 아이디입니다.");
      }
    } catch (err) {
      console.error(err);
      alert("🚨 서버 에러: 아이디 중복확인 실패");
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    const { id, name, pw, pw2 } = signUpData;

    if (!id || !name || !pw || !pw2) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (pw !== pw2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        id,
        name,
        pw,
      });

      if (res.data.success) {
        alert("🎉 회원가입 성공!");
        closeModal();
        setSignUpData({ id: "", name: "", pw: "", pw2: "" });
      } else {
        alert("❌ 회원가입 실패: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("🚨 서버 에러: 회원가입 실패");
    }
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
        <h2>{modalType === "login" ? "로그인" : "회원가입"}</h2>

        {modalType === "login" ? (
          <LoginForm onSubmit={handleLoginSubmit}>
            <LoginInputContainer>
              <LoginInput type="text" name="id" placeholder="아이디를 입력해주세요." />
              <LoginInput type="password" name="pw" placeholder="비밀번호를 입력해주세요." />
            </LoginInputContainer>
            <SubmitBtn type="submit" value="로그인" />
          </LoginForm>
        ) : (
          <SignUpForm onSubmit={handleSignUpSubmit}>
            <SignUpInputArea>
              <SignUpContainer>
                <SignUpTitle>
                  아이디 <sup style={{ color: "red" }}>*</sup>
                </SignUpTitle>
                <SignUpIdInputContainer>
                  <input
                    type="text"
                    name="id"
                    value={signUpData.id}
                    onChange={handleChange}
                    placeholder="아이디를 입력해주세요."
                  />
                  <input
                    type="submit"
                    value="중복확인"
                    onClick={handleCheckDuplicate}
                  />
                </SignUpIdInputContainer>
              </SignUpContainer>

              <SignUpContainer>
                <SignUpTitle>
                  이름 <sup style={{ color: "red" }}>*</sup>
                </SignUpTitle>
                <SignUpInputContainer>
                  <input
                    type="text"
                    name="name"
                    value={signUpData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력해주세요."
                  />
                </SignUpInputContainer>
              </SignUpContainer>

              <SignUpPwContainer>
                <SignUpPwTitle>
                  비밀번호 <sup style={{ color: "red" }}>*</sup>
                </SignUpPwTitle>
                <SignUpPwInputContainer>
                  <input
                    type="password"
                    name="pw"
                    value={signUpData.pw}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력해주세요."
                  />
                  <input
                    type="password"
                    name="pw2"
                    value={signUpData.pw2}
                    onChange={handleChange}
                    placeholder="다시한번 입력해주세요."
                  />
                </SignUpPwInputContainer>
              </SignUpPwContainer>
            </SignUpInputArea>
            <SubmitBtn type="submit" value="회원가입" />
          </SignUpForm>
        )}
      </Modal>
    </>
  );
};

export default HeaderUtil;