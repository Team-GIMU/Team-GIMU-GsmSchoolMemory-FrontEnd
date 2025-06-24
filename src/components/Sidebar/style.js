import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: none;

  @media (max-width: 840px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 900;
  }
`;

export const ModalBox = styled.div`
  display: none;

  @media (max-width: 840px) {
    display: block;

    z-index: 901;
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100vh;
    background-color: #fff;
    padding: 20px;
    border-left: 1px solid #e0e0e0;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  hr {
    border: 1px solid #e0e0e0;
    margin: 12px 0;
  }
`;

export const SidebarTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: #575757;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SidebarContent = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: #999999;
`;

export const LogText = styled.p`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
`;