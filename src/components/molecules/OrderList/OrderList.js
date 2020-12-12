import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";
import ButtonSquare from "../../atoms/ButtonSquare/ButtonSquare";

const Wrapper = styled.div`
  border: 1px solid ${theme.colors.primary};
  display: flex;
  position: relative;
`;

const BoxWrapper = styled.div`
  min-width: 250px;

  max-width: 300px;
  :nth-last-of-type(1) {
    margin-right: 100px;
  }
`;

const StyledText = styled.p`
  /* display: inline-block; */
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.l};
  font-weight: bold;
  flex-grow: 1;
  margin: 0;
  padding: 10px 30px;
  white-space: nowrap;
`;

const OrderList = ({ id, firstName, lastName, phone, email, status }) => {
  return (
    <Wrapper>
      {/* <BoxWrapper>
        <StyledText>{id}</StyledText>
      </BoxWrapper> */}
      <BoxWrapper>
        <StyledText>{`${firstName} ${lastName}`}</StyledText>
      </BoxWrapper>
      <BoxWrapper>
        <StyledText>{phone}</StyledText>
      </BoxWrapper>
      <BoxWrapper>
        <StyledText>{email}</StyledText>
      </BoxWrapper>
      {/* <BoxWrapper>
        <StyledText>{status}</StyledText>
      </BoxWrapper> */}

      <ButtonSquare>Edytuj</ButtonSquare>
    </Wrapper>
  );
};

export default OrderList;
