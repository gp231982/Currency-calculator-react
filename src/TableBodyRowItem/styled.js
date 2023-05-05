import styled, { css } from "styled-components";

export const Item = styled.td`
  padding: 20px;
  border: 1px solid black;

  ${({ selectedId, id }) =>
    selectedId === id &&
    css`
      background-color: greenyellow;
    `}

  &:hover {
    cursor: pointer;
    background-color: rgb(211, 207, 207);
  }
`;
