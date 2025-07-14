import * as S from "./style";
import * as I from "../../assets";
import TokenManager from "../../apis/TokenManager";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { roleState } from "../../lib/RoleStore";
import { useNavigate } from "react-router-dom";
import GetRole from "../../lib/GetRole";
import { useEffect } from "react";

function Sidebar({ setShowSidebar, setShowLogin }) {
  const tokenManager = new TokenManager();
  const isLoggedIn =
    tokenManager.accessToken &&
    tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken
    );
  const role = GetRole();
  const navigate = useNavigate();

  return (
    <>
      <S.ModalOverlay onClick={() => setShowSidebar(false)} />
      <S.ModalBox>
        <S.ItemContainer>
          <S.SidebarItem>
            <S.SidebarTitle>
              <I.SideNotice />
              공지
            </S.SidebarTitle>
            <hr />
            <S.SidebarContent href="/notice">공지사항</S.SidebarContent>
            <hr />
            <S.SidebarContent
              href={role === "관리자" ? "/inquiry" : "/inquiryWrite"}
            >
              문의
            </S.SidebarContent>
            <hr />
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarTitle>
              <I.SideSchool />
              학교
            </S.SidebarTitle>
            <hr />
            <S.SidebarContent href="/student">학생</S.SidebarContent>
            <hr />
            <S.SidebarContent href="/teacher">선생님</S.SidebarContent>
            <hr />
            <S.SidebarContent href="/club">동아리</S.SidebarContent>
            <hr />
            <S.SidebarContent href="/major">전공</S.SidebarContent>
            <hr />
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarTitle>
              <I.SideEtc />
              기타
            </S.SidebarTitle>
            <hr />
            <S.SidebarContent href="/event">사건</S.SidebarContent>
            <hr />
            <S.SidebarContent href="/schedule">학사일정</S.SidebarContent>
            <hr />
          </S.SidebarItem>
        </S.ItemContainer>
        <S.LogText
          onClick={() => {
            if (isLoggedIn) {
              tokenManager.removeTokens();
              toast.success("로그아웃 되었습니다.");
              navigate("/");
            } else {
              setShowLogin(true);
              setShowSidebar(false);
            }
          }}
        >
          {isLoggedIn ? "로그아웃" : "로그인"}
        </S.LogText>
      </S.ModalBox>
    </>
  );
}

export default Sidebar;
