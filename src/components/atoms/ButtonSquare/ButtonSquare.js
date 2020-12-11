import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  /* height: 100%; */
  color: ${theme.colors.tertiary};
  background-color: ${theme.colors.primary};
  font-size: ${theme.fontSize.x};
  font-family: ${theme.secondaryFont};
  border: 1px solid ${theme.colors.primary};
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s linear;

  :hover {
    opacity: 0.9;
  }
`;

const ButtonSquare = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default ButtonSquare;
