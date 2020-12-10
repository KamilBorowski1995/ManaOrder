import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const StyledButton = styled.button`
  width: 215px;
  height: 50px;
  font-family: ${theme.primaryFont};
  background-color: ${({ primaryColor }) =>
    primaryColor ? theme.colors.primary : theme.colors.tertiary};
  color: ${({ primaryColor }) =>
    primaryColor ? theme.colors.tertiary : theme.colors.primary};
  border: 0px solid ${theme.colors.primary};
  border-radius: 24px;
  font-size: ${theme.fontSize.l};
  box-shadow: 0 4px 10px 1px rgba(6, 22, 88, 0.28);
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.03);
    box-shadow: 0 4px 10px 4px rgba(6, 22, 88, 0.28);
  }
`;

const Button = ({ children, primaryColor, onClick }) => {
  return (
    <StyledButton onClick={onClick} primaryColor={primaryColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
