import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #007eff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 840px) {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 500;
  }
`;

export const Logo = styled.div`
  display: block;

  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const HiddenLogo = styled.div`
  display: none;

  @media screen and (max-width: 840px) {
    display: block;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 84px;
  svg {
    cursor: pointer;
  }

  @media (max-width: 840px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SidebarButton = styled.div`
  display: none;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 840px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #fff;
    font-weight: 700;
    margin-left: 20px;
    cursor: pointer;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 57px;

  @media (max-width: 840px) {
    display: none;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
  span {
    color: #fff;
    font-weight: 700;
    margin-left: 8px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #c0c0c0;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  width: 10vw;
  height: 30px;
  outline: none;
  border: none;
  text-indent: 10px;

  &::placeholder {
    color: #c0c0c0;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-left: 1px solid #c0c0c0;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SearchItem = styled.ul`
  background-color: white;
  width: 10.1vw;
  height: 30px;
  border: 1px solid #c0c0c0;
  color: black;
  font-size: 12.5px;
  border-top: 0;
  display: flex;
  align-items: center;
  text-indent: 9px;
  position: absolute;
  top: ${prop => prop.top}px;
  z-index: 3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #e4f1ff;
  }
`;

export const FixedInput = styled.div`
  display: flex;

  span {
    display: flex;
    align-items: center;
  }
`;
