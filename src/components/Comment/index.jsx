import React from "react";
import * as S from "./style";

function Comment({ comments }) {
  return (
    <S.CommentList>
      {comments.map(comment => (
        <S.Comment>
          <S.CommentHeader>
            <S.CommentAuthor>{comment.username}</S.CommentAuthor>
            <S.CommentCreateDate>{comment.createDate.slice(0,9)}</S.CommentCreateDate>
          </S.CommentHeader>
          <S.CommentContent>
            {comment.content}  
          </S.CommentContent>
        </S.Comment>
      ))}
    </S.CommentList>
  );
}

export default Comment;
