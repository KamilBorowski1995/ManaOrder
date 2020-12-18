import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const StyledHeader = styled.h1`
  font-size: ${theme.fontSize.xxl};
  font-family: ${theme.secondaryFont};
  font-weight: 400;
  color: ${theme.colors.primary};
`;

const Header = ({ children, className }) => {
  return <StyledHeader className={className}>{children}</StyledHeader>;
};

export default Header;
