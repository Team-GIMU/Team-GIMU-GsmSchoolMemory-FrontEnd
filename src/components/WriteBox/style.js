import styled from "styled-components";

export const WriteOptions = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 4.7vh;

  @media (max-width: 840px) {
    max-width: 236px;
    height: 100%;
    flex-direction: column-reverse;
  }
`;

export const WriteBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChangeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const EditButton = styled.button`
  width: 4.6vw;
  height: 5vh;
  background: ${props => (props.checked ? "#ffffff" : "none")};
  border: ${props => (props.checked ? "1px solid #c0c0c0" : "none")};
  border-bottom: ${props => (props.checked ? "none" : "")};
  color: #999999;
  cursor: pointer;
  font-size: 1rem;
  outline: none;

  @media screen and (max-width: 1400px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 840px) {
    font-size: 18px;
    width: 100%;
    height: 100%;
    padding: 3px 16px ;
  }
`;

export const PreviewButton = styled.button`
  width: 5vw;
  height: 5vh;
  color: #007eff;
  background: ${props => (props.checked ? "#ffffff" : "none")};
  border: ${props => (props.checked ? "1px solid #c0c0c0" : "none")};
  border-bottom: ${props => props.checked && "1px solid #ffffff"};
  cursor: pointer;
  font-size: 1rem;
  outline: none;

  @media screen and (max-width: 1400px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 840px) {
    font-size: 18px;
    width: 100%;
    height: auto;
    padding: 3px 16px;
    white-space: nowrap;
  }
`;

export const WriteBox = styled.div`
  background-color: none;
  overflow-y: auto;
  border: 1px solid #c0c0c0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* padding: 20px; */

  @media screen and (max-width: 840px) {
    border: none;
    border-top: 1px solid #c0c0c0;
    margin-top: -1px;
  }
`;

export const RegisterButton = styled.button`
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #007eff;
  width: 8vw;
  height: 5vh;
  font-size: 1rem;
  margin: 20px 0;
  margin-left: auto;
  cursor: pointer;
`;

export const MobileWriteBox = styled.div`
  display: none;

  @media (max-width: 840px) {
    display: block;
    width: 100%;
  }
`;
