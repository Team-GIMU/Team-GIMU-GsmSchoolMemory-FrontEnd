import React from "react";
import * as S from "./style";
import useMarkdown from "../../Hooks/useMarkdown";

const BoardDetailItem = ({ content, createdDate, editedDate }) => {
  const { markdownToHtml } = useMarkdown();

  const html = markdownToHtml(content);

  return (
    <>
      <S.NTBox>
        <S.Date> </S.Date>
        <S.Date> </S.Date>
      </S.NTBox>

      <S.Content dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default BoardDetailItem;
