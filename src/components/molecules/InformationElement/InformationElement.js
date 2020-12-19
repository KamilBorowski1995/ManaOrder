import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 200px) 2fr;
  align-items: center;
  margin-bottom: 10px;
  :nth-last-of-type(1) {
    margin-bottom: 20px;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const StyledParagraphHeader = styled(Paragraph)`
  @media (max-width: 680px) {
    font-size: ${theme.fontSize.s};
    font-weight: bold;
    font-style: italic;
  }
`;

const StyledParagraph = styled(Paragraph)`
  @media (max-width: 680px) {
    font-size: ${theme.fontSize.s};
  }
`;

const InformationElement = ({ data, title }) => {
  return (
    <Wrapper>
      <StyledParagraphHeader>{title}</StyledParagraphHeader>
      <StyledParagraph>{data}</StyledParagraph>
    </Wrapper>
  );
};

export default InformationElement;
