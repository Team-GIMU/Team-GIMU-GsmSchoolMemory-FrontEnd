import styled from "styled-components";

export const CommentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  overflow: auto;
`;

export const CommentHeader = styled.p`
  display: flex;
  align-items: end;
  gap: 8px;
`;

export const CommentAuthor = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: black;
`;

export const CommentCreateDate = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: normal;
  color: #999999;
`;

export const CommentContent = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  color: black;
`;
