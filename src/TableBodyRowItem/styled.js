import styled, { css } from "styled-components";

export const Item = styled.td`
  padding: 20px;
  border: 1px solid black;

  ${({ selectedId, id }) =>
    selectedId === id &&
    css`
      background-color: rgba(197, 183, 163, 0.735);
    `}

  &:hover {
    cursor: pointer;
    background-color: rgba(197, 183, 163, 0.735)

  }
`;
