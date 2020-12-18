import React from "react";
import styled from "styled-components";

import Paragraph from "../../atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  margin-bottom: 10px;
  :nth-last-of-type(1) {
    margin-bottom: 20px;
  }
`;

const StyledParagraph = styled(Paragraph)``;

const InformationElementBasket = ({ data, title }) => {
  const fixCost = (cost) => {
    if (cost ^ 0) return parseInt(cost).toFixed(2);
    return cost;
  };
  return (
    <Wrapper>
      <StyledParagraph>{title}</StyledParagraph>
      <StyledParagraph>{`${fixCost(data)}zł`}</StyledParagraph>
    </Wrapper>
  );
};

export default InformationElementBasket;
