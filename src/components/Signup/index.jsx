import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as I from "../../assets";
import Input from "../Login/Input";
import { toast } from "react-toastify";
import { useSignup } from "../../Hooks";

function Signup({ setSignup, setShowLogin }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [stuNum, setStuNum] = useState("");
  const [password, setPassword] = useState("");
  const { fetch: postSignup } = useSignup({ 
    email, 
    name, 
    stuNum, 
    password, 
    onSuccess: () => {
      setSignup(false);
      setShowLogin(true);
    }
  });

  function showLoginModal() {
    setSignup(false);
    setShowLogin(true);
  }
  
  const onClick = () => {
    if (!email || !name || !stuNum || !password) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }
    postSignup({ email, name, stuNum, password });
  };

  return (
    <>
      <S.ModalOverlay onClick={showLoginModal} />
      <S.ModalBox>
        <S.LoginContainer>
          <S.LoginTitle>
            <S.IconBox>
              <I.LoginLogo />
            </S.IconBox>
          </S.LoginTitle>
          <S.FormContainer>
            <S.InputContainer>
              <Input
                label="이름"
                placeholder="이름을 입력해주세요"
                onChange={e => setName(e.target.value)}
                type="text"
                value={name}
              />
              <Input
                label="학번"
                placeholder="학번을 입력해주세요"
                onChange={e => setStuNum(e.target.value)}
                type="number"
                value={stuNum}
              />
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
              <S.YesButton onClick={onClick}>회원가입</S.YesButton>
              <S.Footer>
                이미 계정이 있으신가요? <S.Signup type="button" onClick={showLoginModal}>로그인</S.Signup>
              </S.Footer>
            </S.ButtonContainer>
          </S.FormContainer>
        </S.LoginContainer>
      </S.ModalBox>
    </>
  );
}

export default Signup;
