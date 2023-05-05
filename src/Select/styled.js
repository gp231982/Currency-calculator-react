import styled from "styled-components";

export const Currency = styled.select`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin-left: 0px;
  border-radius: 5px;
  box-shadow: 2px 2px;

  &:hover {
    background-color: #f5e1e1;
    outline-style: double;
    outline-width: 5px;
    outline-offset: 1px;
    cursor: pointer;
  }
`;
