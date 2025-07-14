import React, { useEffect, useState } from "react";
import * as C from "../../components";
import { useContent, useDelete, useFetch } from "../../Hooks";
import { useParams } from "react-router-dom";

const Comment = () => {
  let { id } = useParams();
  const state = useContent({ id });
  const [comments, setComments] = useState([]);
  const { fetch } = useFetch({
    url: `/comment/${id}`,
    method: "get",
    onSuccess: data => {
      // console.log(data);
      setComments(data);
    }
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <C.PageContainer
        title={state.title}
        // title={"테스트"}
        sort="댓글"
        hasHistoryButton={false}
        hasEditButton={false}
        hasDeleteButton={false}
      >
        {/* <C.Explanation>
          <C.BoardDetail
            id={state.id}
            title={state.title}
            createdDate={formattedCreatedDate}
            editedDate={formattedEditedDate}
            content={state.content}
          />
        </C.Explanation> */}
        <C.Comment comments={comments} />
      </C.PageContainer>
    </>
  );
};

export default Comment;
