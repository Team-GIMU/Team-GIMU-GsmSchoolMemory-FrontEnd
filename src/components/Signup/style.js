import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  position: fixed;
`;

export const ModalBox = styled.div`
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IconBox = styled.div`
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  background-color: #007eff33;
`;

export const LoginContainer = styled.div`
  padding: 60px;
  width: 442px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 101;
  & > svg {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }

  @media (max-width: 442px) {
    margin-top: 60px;
    width: full;
    height: 100vh;
  }
`;

export const LoginHighLight = styled.span`
  color: #007eff;
`;

export const LoginContent = styled.p`
  font-size: 36px;
  font-weight: 800;
  line-height: 42px;
`;

export const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;

  & > svg {
    margin-top: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const YesButton = styled.button`
  width: 322px;
  color: white;
  background: #007eff;
  cursor: pointer;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 10px;
  border: 1px solid #007eff;
  margin-top: 12px;
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const Footer = styled.p`
  font-size: 16px;
  color: #575757;
`;

export const Signup = styled.button`
  color: #007eff;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`;
