import styled from "styled-components";

export const DropContainer = styled.div`
  width: 100%;
  background-color: #3e9dff;
  height: auto;
  color: #fff;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const DropWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin-bottom: 24px;
  padding: 0 165px;

  @media screen and (max-width: 1420px) {
    padding: 0 185px;
  }
`;

export const DropMenu = styled.div`
  display: flex;
  gap: 70px;
`;

export const DropItem = styled.div`
  margin-top: 1.2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2vw;
  span {
    font-weight: 700;
    cursor: pointer;
    font-size: 16px;
  }
  a {
    color: #fff;
  }
`;
