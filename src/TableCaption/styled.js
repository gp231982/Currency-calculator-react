import styled, { css } from "styled-components";

export const Caption = styled.caption`
  font-size: 30px;
  padding: 20px;
  text-transform: uppercase;
  font-weight: bold;

  ${({isLoading}) =>
    isLoading &&
    css`
      color: blue;
      font-style: italic;
    `};

    ${({failure}) =>
    failure &&
    css`
      color: red;
      font-style: italic;
    `};
`;
