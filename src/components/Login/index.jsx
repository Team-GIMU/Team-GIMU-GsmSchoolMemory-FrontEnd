import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as I from "../../assets";
import Input from "./Input";
import { toast } from "react-toastify";
import { useLogin } from "../../Hooks";

function Login({ setShowLogin, setSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fetch: postLogin } = useLogin({ email, password });

  function showLoginModal() {
    setShowLogin(prev => !prev);
  }

  function onClick() {
    if (!email || !password) {
      toast.error("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    setShowLogin(prev => !prev);
    postLogin({ email, password });
  };

  function changeModal() {
    setShowLogin(false);
    setSignup(true);
  }

  return (
    <>
      <S.ModalOverlay onClick={showLoginModal} />
      <S.ModalBox>
        <S.LoginContainer>
          <S.LoginTitle>
            <S.IconBox>
              <I.LoginLogo />
            </S.IconBox>
            <S.LoginContent>
              <S.LoginHighLight>GSM 학생들</S.LoginHighLight>이<br />
              가꿔나가는 위키
            </S.LoginContent>
          </S.LoginTitle>
          <S.FormContainer>
            <S.InputContainer>
              <Input
                label="이메일"
                placeholder="이메일을 입력해주세요"
                onChange={e => setEmail(e.target.value)}
                type="text"
                value={email}
              />
              <Input
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요"
                onChange={e => setPassword(e.target.value)}
                type="password"
                value={password}
              />
            </S.InputContainer>
            <S.ButtonContainer>
              <S.YesButton onClick={onClick} disabled={!email || !password}>로그인</S.YesButton>
              <S.Footer>
                계정이 없다면? <S.Signup type="button" onClick={changeModal}>회원가입</S.Signup>
              </S.Footer>
            </S.ButtonContainer>
          </S.FormContainer>
        </S.LoginContainer>
      </S.ModalBox>
    </>
  );
}

export default Login;
