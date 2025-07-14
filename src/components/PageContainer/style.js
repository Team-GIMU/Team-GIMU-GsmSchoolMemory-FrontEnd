import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;

export const SearchContainer = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    border: 1px solid #c0c0c0;
    cursor: pointer;
    position: relative;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  height: 52px;
  outline: none;
  border: none;
  text-indent: 10px;

  &::placeholder {
    color: #c0c0c0;
  }
`;

export const SearchItemContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
`;

export const SearchItem = styled.div`
  background-color: white;
  width: 100%;
  height: 30px;
  border: 1px solid #c0c0c0;
  color: black;
  font-size: 16px;
  border-top: 0;
  display: flex;
  align-items: center;
  text-indent: 9px;
  top: ${prop => prop.top}px;
  z-index: 3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #e4f1ff;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 50px;
  background-color: #fff;
  border-left: 1px solid #c0c0c0;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const PageContainer = styled.div`
  position: relative;
  width: 70vw;
  min-height: ${({ sort }) =>
    sort && !(sort === "댓글") ? "calc(100vh - 214px)" : "calc(100vh - 160px)"};
  /* min-height: calc(100vh - 150px); */
  height: auto;
  background-color: #fff;
  /* margin: 0 4vw 20px 8vw; */
  margin: 0px 4vw 0 8vw;
  padding: 0 3vw 5vw 3vw;
  border-top: none;
  border: 1px solid #c0c0c0;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0;
    min-height: calc(100vh - 130px);
  }
`;

export const Page = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  color: #636363;
  font-size: 2.4rem;
  font-weight: 600;
  margin: 3vw 0 2vw 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
    margin-top: 32px;
  }
`;

export const SubTitleContainer = styled.div`
  border: 1px solid #d9d9d9;
  height: 5vh;
  line-height: 5vh;
  padding: 0 1vw;
  color: #191919;
  margin-bottom: 32px;

  display: flex;
  justify-content: space-between;
  div {
    span:nth-child(2) {
      color: #007eff;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    svg {
      width: 16px;
    }
  }
`;

export const ContentsButtonContainer = styled.div`
  display: flex;
  gap: 1px;

  button {
    border: 2px solid #dddddd;
  }
`;

export const InputBox = styled.form`
  margin-left: 8vw;
  width: 100%;
  max-width: 70vw;
  padding: 20px 8px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: calc(100% - 80px);
  padding: 12px;
  background-color: white;
  border: 1px solid #c0c0c0;
  outline: none;
  font-size: 18px;
  line-height: 28px;
  color: black;

  ::placeholder {
    color: #c0c0c0;
  }
`;

export const SubmitButton = styled.button`
  color: #007eff;
  background: none;
  font-size: 16px;
  line-height: 24px;
  border: none;
`;
