import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const StyledButton = styled.h1`
  font-size: ${theme.fontSize.xxl};
  font-family: ${theme.secondaryFont};
  font-weight: 400;
  color: ${theme.colors.primary};
`;

const Header = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Header;
