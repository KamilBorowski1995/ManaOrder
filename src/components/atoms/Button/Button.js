import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const StyledButton = styled.button`
  padding: 15px 20px;
  width: ${({ wide }) => wide && "215px"};
  height: ${({ wide }) => wide && "50px"};
  font-family: ${theme.primaryFont};
  background-color: ${({ primary }) =>
    primary ? theme.colors.primary : theme.colors.tertiary};
  color: ${({ primary }) =>
    primary ? theme.colors.tertiary : theme.colors.primary};
  border: none;
  border-radius: 24px;
  font-size: ${theme.fontSize.l};
  box-shadow: 0 4px 10px 1px rgba(6, 22, 88, 0.28);
  font-weight: bold;
`;

const Button = ({ children, primary, wide }) => {
  return (
    <StyledButton primary={primary} wide={wide}>
      {children}
    </StyledButton>
  );
};

export default Button;
