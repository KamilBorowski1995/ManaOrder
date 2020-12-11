import React from "react";
import styled from "styled-components";

import Paragraph from "../../atoms/Paragraph/Paragraph";

const Wrapper = styled.tr`
  /* width: 400px; */
  /* display: flex; */
  /* justify-content: space-between; */
`;

const StyledParagraph = styled(Paragraph)`
  width: 300px;
`;

const ElementTable = ({ size, data, children }) => {
  return (
    <Wrapper>
      <StyledParagraph size={size}>{children}</StyledParagraph>
      <Paragraph size={size}>{data}</Paragraph>
    </Wrapper>
  );
};

export default ElementTable;
