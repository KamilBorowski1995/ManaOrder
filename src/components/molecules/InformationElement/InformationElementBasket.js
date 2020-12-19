import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";
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

const StyledParagraph = styled(Paragraph)`
  @media (max-width: 680px) {
    font-size: ${theme.fontSize.s};
  }
`;

const InformationElementBasket = ({ data, title }) => {
  const fixCost = (cost) => {
    const editCost = cost.replace(",", ".");

    function roundTo(value, places) {
      var power = Math.pow(10, places);
      return Math.round(value * power) / power;
    }

    if (editCost % 1 === 0) return parseInt(editCost, 10).toFixed(2);
    else return roundTo(editCost, 2);
  };
  return (
    <Wrapper>
      <StyledParagraph>{title}</StyledParagraph>
      <StyledParagraph>{`${fixCost(data)}zł`}</StyledParagraph>
    </Wrapper>
  );
};

export default InformationElementBasket;
