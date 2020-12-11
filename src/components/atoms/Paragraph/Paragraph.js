import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const StyledParagraph = styled.p`
  font-size: ${theme.fontSize.xl};
  font-family: ${theme.secondaryFont};
  font-weight: ${({ weight }) => weight};
  color: ${theme.colors.primary};
  transition: 0.3s ease-in-out;
`;

const Paragraph = ({ children, weight = 500 }) => {
  return <StyledParagraph weight={weight}>{children}</StyledParagraph>;
};

export default Paragraph;
