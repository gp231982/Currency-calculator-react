import styled, { css } from "styled-components";
import Button from "../Button";

export const CalcForm = styled.form`
  display: block;
`;

export const Result = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const StyledButton = styled(Button)`
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 40px;
  border-radius: 5px;
  letter-spacing: 2.5px;
  width: 200px;
  font-weight: bold;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}

  &:hover {
    cursor: pointer;
    outline: 3px solid whitesmoke;
    border-radius: 15px;
    color: white;
    background-color: teal;
  }
`;
