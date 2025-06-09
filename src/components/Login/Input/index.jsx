import React from "react";
import * as S from "./style";

const Input = ({ label, onChange, placeholder, value, type }) => {
  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type || "text"}
      />
    </S.InputContainer>
  );
};

export default Input;
