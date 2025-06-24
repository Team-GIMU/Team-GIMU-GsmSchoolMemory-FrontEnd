import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 322px;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  border: 1px solid #dddddd;
  padding: 12px;
  outline: none;
  color: black;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  &::placeholder {
    color: #dddddd;
    font-size: 15px;
  }
`;
