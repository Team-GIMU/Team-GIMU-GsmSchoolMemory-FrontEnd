import React, { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as C from "../../components";
import * as S from "./style";
import * as I from "../../assets";
import { useFetch, useSearchList } from "../../Hooks";
import { useEffect } from "react";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [comment, setComment] = useState("");
  const [filteredBoardList, setFilteredBoardList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const { searchList } = useSearchList({ title: search });
  const { fetch } = useFetch({
    url: "/comment",
    method: "post",
    body: {
      content: comment,
      boardId: id
    },
    onSuccess: () => {
      toast.success("댓글 작성을 완료하였습니다.");
      window.location.reload();
    },
    onFailure: () => {
      toast.error("댓글 작성을 실패하였습니다. 다시 시도해주세요.");
    }
  });

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
    searchList.map(item => {
      console.log(item.id, item.title);
    });
  }, [searchList]);

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
        <S.SearchItemContainer>
          {search &&
            searchList.map(item => (
              <Link to={`/board/${item.id}`} key={item.id}>
                <S.SearchItem>{item.title}</S.SearchItem>
              </Link>
            ))}
        </S.SearchItemContainer>
      </S.HeaderWrapper>
      <S.Page>
        <S.PageContainer>
          <S.TitleContainer>
            <div>
              {hasTitle && <span>G무위키:</span>}
              <span>{title}</span>
            </div>
            <S.ContentsButtonContainer>
              {sort &&
                (!(sort === "댓글") ? (
                  <>
                    {hasEditButton && (
                      <Link to={`/${editUrl}/edit/${id}`}>
                        <C.ContentsButton>편집</C.ContentsButton>
                      </Link>
                    )}
                    {hasPostButton && (
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
                ) : (
                  <>
                    <Link to={`/board/${id}`}>
                      <C.Button
                        width={"104"}
                        height={"32"}
                        color={"#999999"}
                        backgroundColor={"#ffffff"}
                        fontWeight={600}
                      >
                        게시글로
                      </C.Button>
                    </Link>
                  </>
                ))}
            </S.ContentsButtonContainer>
          </S.TitleContainer>
          {!(sort === "댓글") && (
            <S.SubTitleContainer>
              <div>
                <span>분류: </span>
                <span>{sort}</span>
              </div>
              {sort === "글" && (
                <Link to={`/board/${id}/comment`}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33203 14.6667V1.33337H14.6654V12H3.9987L1.33203 14.6667ZM3.43203 10.6667H13.332V2.66671H2.66536V11.4167L3.43203 10.6667ZM3.9987 9.33337H9.33203V8.00004H3.9987V9.33337ZM3.9987 7.33337H11.9987V6.00004H3.9987V7.33337ZM3.9987 5.33337H11.9987V4.00004H3.9987V5.33337Z"
                      fill="#636363"
                    />
                  </svg>
                </Link>
              )}
            </S.SubTitleContainer>
          )}
          <div>{children}</div>
        </S.PageContainer>
        <C.RecentModified />
        {/* <C.ScrollButton /> */}
      </S.Page>
      {sort === "댓글" && (
        <S.InputBox
          onSubmit={e => {
            e.preventDefault();
            fetch();
          }}
        >
          <S.Input
            placeholder="댓글은 최대 100글자까지 쓸 수 있습니다."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <S.SubmitButton type="button">
            댓글 달기
          </S.SubmitButton>
        </S.InputBox>
      )}
      {!(sort === "댓글") && <C.Footer />}
    </>
  );
}

export default PageContainer;
