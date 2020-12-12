import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";
import ButtonSquare from "../../atoms/ButtonSquare/ButtonSquare";

const Wrapper = styled.div`
  border: 1px solid ${theme.colors.primary};
  display: flex;
  position: relative;
`;

const StyledText = styled.p`
  /* display: inline-block; */
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.l};
  font-weight: 500;
  flex-grow: 1;
  margin: 0;
  padding: 10px 30px;
  white-space: nowrap;

  min-width: 280px;

  max-width: 300px;
  :nth-last-of-type(1) {
    margin-right: 100px;
  }
`;

const OrderList = ({
  type,
  id,
  firstName,
  lastName,
  phone,
  email,
  status,
  street,
  code,
  number,
  city,
  cost,
  nameProduct,
  password,
  role,
}) => {
  const fixCost = (cost) => {
    if (cost ^ 0) return parseInt(cost).toFixed(2);

    return cost;
  };

  return (
    <Wrapper>
      {/* {type === "product" && <StyledText>{id}</StyledText>} */}
      {type === "product" && <StyledText>Nazwa : {nameProduct}</StyledText>}
      {type === "product" && (
        <StyledText>Cena: {`${fixCost(cost)}zł`}</StyledText>
      )}

      {(type === "consumer" || type === "user") && (
        <StyledText>
          {firstName} {lastName}
        </StyledText>
      )}
      {type === "user" && <StyledText>{password}</StyledText>}
      {type === "user" && <StyledText>{role}</StyledText>}
      {type === "consumer" && <StyledText>{phone}</StyledText>}
      {type === "consumer" && <StyledText>{email}</StyledText>}
      {type === "consumer" && (
        <StyledText>
          ul.{street} {number}, {code} {city}{" "}
        </StyledText>
      )}

      {/* <BoxWrapper>
        <StyledText>{status}</StyledText>
      </BoxWrapper> */}

      <ButtonSquare>Edytuj</ButtonSquare>
    </Wrapper>
  );
};

export default OrderList;
