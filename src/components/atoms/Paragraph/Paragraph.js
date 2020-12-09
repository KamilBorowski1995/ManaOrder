import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const StyledButton = styled.p`
  font-size: ${theme.fontSize.l};
  font-family: ${theme.secondaryFont};
  font-weight: ${({ weight }) => weight};
  color: ${theme.colors.primary};
`;

const Paragraph = ({ children, weight }) => {
  return <StyledButton weight={weight}>{children}</StyledButton>;
};

export default Paragraph;
