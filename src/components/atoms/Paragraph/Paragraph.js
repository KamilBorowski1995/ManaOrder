import React from "react";
import styled, { css } from "styled-components";

import { theme } from "../../../theme/mainTheme";

const StyledParagraph = styled.p`
  font-family: ${theme.secondaryFont};
  font-weight: ${({ weight }) => weight};
  color: ${theme.colors.primary};
  transition: 0.3s ease-in-out;
  display: inline-block;

  ${({ size }) =>
    size === "l" &&
    `
      font-size: ${theme.fontSize.l}
    `}
  ${({ size }) =>
    size === "xl" &&
    `
      font-size: ${theme.fontSize.xl}
    `}
`;

const Paragraph = ({ className, children, weight = 500, size = "l" }) => {
  return (
    <StyledParagraph className={className} weight={weight} size={size}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
