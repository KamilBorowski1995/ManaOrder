import React from "react";
import styled from "styled-components";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";

const baseOrders = [
  {
    id: "#48464864682",
    firstName: "Piotr",
    lastName: "Kowalski",
    phone: "500-800-965",
    mail: "k.borowski@onet.pl",
    status: "Oczekiwanie na płatność",
  },
  {
    id: "#fwwfwf",
    firstName: "Piotr",
    lastName: "Kowalski",
    phone: "500-800-965",
    mail: "k.borowski@onet.pl",
    status: "Wysłane",
  },
  {
    id: "#adwwdwd",
    firstName: "Piotr",
    lastName: "Kowalski",
    phone: "500-800-965",
    mail: "k.borowski@onet.pl",
    status: "Zaginęła w akcji",
  },
  {
    id: "#fcd7fc682",
    firstName: "Piotr",
    lastName: "Kowalski",
    phone: "500-800-965",
    mail: "k.borowski@onet.pl",
    status: "W oczekiwaniu na kuriera",
  },
];

const Wrapper = styled.div`
  margin-left: 150px;
  position: relative;
`;
const StyledElementList = styled.div`
  margin-bottom: 20px;
`;

const StyledButonSquare = styled(ButtonSquare)`
  position: absolute;
  right: 0;
`;

const AppPage = () => {
  const orderMap = baseOrders.map(
    ({ id, firstName, lastName, phone, mail, status }) => (
      <StyledElementList>
        <OrderList
          key={id}
          id={id}
          firstName={firstName}
          lastName={lastName}
          phone={phone}
          mail={mail}
          status={status}
        />
      </StyledElementList>
    )
  );

  return (
    <AppTemplate>
      <Wrapper>
        {orderMap}
        <ButtonSquare>DODAJ NOWE ZAMÓWIENIE</ButtonSquare>
      </Wrapper>
    </AppTemplate>
  );
};

export default AppPage;
