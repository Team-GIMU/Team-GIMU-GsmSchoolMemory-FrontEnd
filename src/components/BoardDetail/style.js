import styled from "styled-components";

export const Content = styled.p`
  font-size: 1rem;
  color: #191919;
  line-height: 26px;
  margin-top: -40px;

  a {
    color: #007eff;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 20px;
  }

  @media (max-width: 840px) {
    margin-top: 0px;
  }
`;

export const NTBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
  margin-left: 68%;

  @media (max-width: 840px) {
    display: none;
  }
`;

export const Date = styled.p`
  height: 0.8rem;
  text-align: right;
  font-size: 0.8rem;
  color: #999;
  font-weight: 400;
`;
