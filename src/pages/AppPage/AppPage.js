import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

import auth from "../../AuthComponent/auth";

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
  /* margin-left: 150px; */
  position: relative;
`;

const StyledElementList = styled.div`
  margin-bottom: 20px;
`;

const AppPage = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  const handleButtonToAddOrder = () => {
    console.log("klikam");
    console.log(auth.isAuthenticated());
    if (auth.isAuthenticated()) history.push("/orders/add");
  };

  return (
    <AppTemplate>
      <Wrapper>
        {data.map(({ consumer, products, tracking }) => (
          <div key={consumer._id}>
            <OrderList
              type="order"
              id={consumer._id}
              firstName={consumer.firstName}
              lastName={consumer.lastName}
              phone={consumer.phone}
              email={consumer.email}
              status={tracking.status}
            />
          </div>
        ))}
        <ButtonSquare onClick={handleButtonToAddOrder}>
          DODAJ NOWE ZAMÓWIENIE
        </ButtonSquare>
      </Wrapper>
    </AppTemplate>
  );
};

export default AppPage;
