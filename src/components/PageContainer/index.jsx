import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as C from "../../components";
import * as S from "./style";
import * as I from "../../assets";
import { useEdit, useSearchList } from "../../Hooks";
import TokenManager from "../../apis/TokenManager";

function PageContainer({
  children,
  title,
  sort,
  hasEditButton,
  hasPostButton,
  hasHistoryButton,
  hasDeleteButton,
  url,
  onClick,
  editUrl,
  hasTitle
}) {
  const { id } = useParams();
  const searchInputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [filteredBoardList, setFilteredBoardList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const { searchList } = useSearchList({ title: search });
  const tokenManager = new TokenManager();

  const CheckTokenHandler = () => {
    const hasAccess = tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken
    );

    if (hasAccess) return true;
    else return false;
  };

  const handleSearchChange = e => {
    let inputValue = e.target.value;
    setSearch(inputValue);

    if (inputValue.length <= 0) {
      setFilteredBoardList([]);
    } else {
      const updatedFilteredList = searchList.filter(item => {
        return item.title.toLowerCase().includes(inputValue.toLowerCase());
      });
      setFilteredBoardList(updatedFilteredList);
    }
  };

  useEffect(() => {
    CheckTokenHandler();
  }, [tokenManager.accessToken]);

  return (
    <>
      <S.HeaderWrapper>
        <C.Header />
        <S.SearchContainer>
          <S.SearchInput
            ref={searchInputRef}
            placeholder="search"
            onChange={handleSearchChange}
            value={search}
            onMouseEnter={() => {
              setShowMenu(false);
            }}
          />
          <S.SearchIcon>
            <I.Search />
          </S.SearchIcon>
        </S.SearchContainer>
      </S.HeaderWrapper>
      <S.Page>
        <S.PageContainer>
          <S.TitleContainer>
            <div>
              {hasTitle && <span>G무위키:</span>}
              <span>{title}</span>
            </div>
            <S.ContentsButtonContainer>
              <>
                {hasEditButton && (
                  <Link to={`/${editUrl}/edit/${id}`}>
                    <C.ContentsButton>편집</C.ContentsButton>
                  </Link>
                )}
                {hasPostButton && CheckTokenHandler() && (
                  <Link to={url}>
                    <C.ContentsButton>추가</C.ContentsButton>
                  </Link>
                )}
                {hasHistoryButton && (
                  <Link to={`/board/${id}/record`}>
                    <C.ContentsButton>역사</C.ContentsButton>
                  </Link>
                )}
                {hasDeleteButton && (
                  <Link onClick={onClick}>
                    <C.ContentsButton>삭제</C.ContentsButton>
                  </Link>
                )}
              </>
            </S.ContentsButtonContainer>
          </S.TitleContainer>
          <S.SubTitleContainer>
            <span>분류: </span>
            <span>{sort}</span>
          </S.SubTitleContainer>
          <div>{children}</div>
        </S.PageContainer>
        <C.RecentModified />
        <C.ScrollButton />
      </S.Page>
      <C.Footer />
    </>
  );
}

export default PageContainer;
