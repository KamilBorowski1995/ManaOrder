import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";
import ButtonSquare from "../../atoms/ButtonSquare/ButtonSquare";

const Wrapper = styled.div`
  border: 1px solid ${theme.colors.primary};
  display: grid;
  /* grid-template-columns: minmax(250px, max-content) repeat(auto-fit, 360px); */
  grid-template-columns: repeat(auto-fit, 300px);
  position: relative;
  padding: 0 30px;
  min-width: 350px;
`;

const StyledText = styled.p`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.m};
  font-weight: ${({ weight }) => (weight === "bold" ? "bold" : "500")};
  padding: 10px 0px;
  :nth-last-of-type(1) {
    margin-right: 100px;
  }
  overflow: hidden;
`;

const OrderList = ({
  type,
  id,
  fullName,
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
  onClick,
}) => {
  const fixCost = (cost) => {
    if (cost ^ 0) return parseInt(cost).toFixed(2);
    return cost;
  };

  const [userRole, setUserRole] = useState([]);

  useEffect(() => {
    setUserRole(sessionStorage.getItem("role"));
  }, []);

  return (
    <Wrapper>
      {/* {type === "order" && <StyledText>{`#${id}`}</StyledText>} */}
      {type === "product" && <StyledText> {nameProduct}</StyledText>}
      {type === "product" && <StyledText> {`${fixCost(cost)}zł`}</StyledText>}

      {(type === "consumer" || type === "user") && (
        <StyledText>{fullName}</StyledText>
      )}
      {type === "order" && (
        <StyledText>
          {fullName} <br />
          ul.{street} {number}, <br />
          {code} {city}
        </StyledText>
      )}
      {type === "user" && <StyledText>{role}</StyledText>}
      {type === "consumer" && (
        <StyledText>
          ul.{street} {number}, <br />
          {code} {city}
        </StyledText>
      )}
      {(type === "consumer" || type === "order") && (
        <StyledText>{phone}</StyledText>
      )}
      {(type === "consumer" || type === "order") && (
        <StyledText>{email}</StyledText>
      )}
      {type === "order" && (
        // <div>
        //   <StyledText weight="bold">Status:</StyledText>
        //   <StyledText>{status}</StyledText>
        // </div>

        <StyledText>
          Status: <br />
          {status}
        </StyledText>
      )}
      {(userRole === "admin" || type === "order") && (
        <ButtonSquare type="edit" onClick={(e) => onClick(e, id)}>
          Edytuj
        </ButtonSquare>
      )}
    </Wrapper>
  );
};

export default OrderList;
