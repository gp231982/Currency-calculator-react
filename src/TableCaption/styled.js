import styled, { css } from "styled-components";

export const Caption = styled.caption`
  font-size: 20px;
  padding: 20px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;

  ${({ isLoading }) =>
    isLoading &&
    css`
      width:50%
      text-align: left;
      color: blue;
      font-style: italic;
      

      @media (max-width: 1000px) {
        width: 50%;
        text-align: left;
      }
    `};

  ${({ failure }) =>
    failure &&
    css`
      width: 50%;
      color: red;
      font-style: italic;

      @media (max-width: 1000px) {
        width: 50%;
        text-align: left;
      }
    `};
`;
