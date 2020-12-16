import React from "react";
import styled from "styled-components";

import Paragraph from "../../atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 200px) 2fr;
  align-items: center;
  margin-bottom: 10px;
  :nth-last-of-type(1) {
    margin-bottom: 20px;
  }
`;

const StyledParagraph = styled(Paragraph)``;

const InformationElement = ({ data, title }) => {
  return (
    <Wrapper>
      <StyledParagraph>{title}</StyledParagraph>
      <StyledParagraph>{data}</StyledParagraph>
    </Wrapper>
  );
};

export default InformationElement;
