import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const ButtonBase = styled.button`
  height: 50px;
  font-family: ${theme.primaryFont};
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
`;

const StyledButton = styled(ButtonBase)`
  width: 215px;
  background-color: ${({ primaryColor }) =>
    primaryColor ? theme.colors.primary : theme.colors.tertiary};
  color: ${({ primaryColor }) =>
    primaryColor ? theme.colors.tertiary : theme.colors.primary};
  border-radius: 24px;
  font-size: ${theme.fontSize.l};
  box-shadow: 0 4px 10px 1px rgba(6, 22, 88, 0.28);
  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.03);
    box-shadow: 0 4px 10px 4px rgba(6, 22, 88, 0.28);
  }
`;

const StyledButtonLogout = styled(ButtonBase)`
  background-color: transparent;
  color: ${theme.colors.primary};
  padding: 0 20px;
`;

const Button = ({ children, primaryColor, onClick, logout }) => {
  return (
    <div>
      {logout ? (
        <StyledButtonLogout onClick={onClick} primaryColor={primaryColor}>
          {children}
        </StyledButtonLogout>
      ) : (
        <StyledButton onClick={onClick} primaryColor={primaryColor}>
          {children}
        </StyledButton>
      )}
    </div>
  );
};

export default Button;
