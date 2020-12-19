import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

import auth from "../../AuthComponent/auth";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";
import InputRadio from "../../components/atoms/Input/InputRadio";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import Auth from "../../AuthComponent/auth";

import { config } from "../../config";

const WrapperInputRadio = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 200px));
  align-items: center;
  margin-bottom: 20px;
  :nth-last-of-type(1) {
    margin-bottom: 20px;
  }
`;

const WrapperList = styled.div`
  padding-bottom: 20px;
  max-height: calc(100vh - 250px);
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

const AppPage = () => {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [displayOrder, setDisplayOrder] = useState([]);
  const [selectConsumerType, setSelectConsumerType] = useState("Wszystkie");

  useEffect(() => {
    axios
      .get(`${config.server}/api/orders`, {
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
      })
      .then((res) => {
        setData(res.data);
        setDisplayOrder(res.data);
      })
      .catch(function (error) {
        Auth.logout(() => history.push("/"));
        console.log(error);
      })
      .then(function () {});
  }, [history]);

  const handleButtonToAddOrder = () => {
    if (auth.isAuthenticated()) history.push("/orders/add");
  };

  const handleButtonEdit = (e, id) => {
    history.push(`orders/edit/${id}`);
  };

  const handleRadioInput = (e) => {
    setSelectConsumerType(e.target.value);
    switch (e.target.value) {
      case "Wszystkie":
        setDisplayOrder(data);
        break;
      case "Aktywne":
        setDisplayOrder(
          data.filter(
            ({ tracking }) => tracking.status !== "Zamówienie zakończone"
          )
        );
        break;
      case "Zakończone":
        setDisplayOrder(
          data.filter(
            ({ tracking }) => tracking.status === "Zamówienie zakończone"
          )
        );
        break;
      default:
        break;
    }
  };
  return (
    <AppTemplate>
      <WrapperInputRadio>
        <InputRadio
          name="orderType"
          value="Wszystkie"
          selectConsumerType={selectConsumerType}
          onChange={handleRadioInput}
        />
        <InputRadio
          name="orderType"
          value="Aktywne"
          selectConsumerType={selectConsumerType}
          onChange={handleRadioInput}
        />
        <InputRadio
          name="orderType"
          value="Zakończone"
          selectConsumerType={selectConsumerType}
          onChange={handleRadioInput}
        />
      </WrapperInputRadio>
      <WrapperList>
        {displayOrder.map(({ _id, consumer, products, tracking }) => (
          <div key={_id}>
            <OrderList
              type="order"
              id={_id}
              fullName={consumer.fullName}
              street={consumer.street}
              code={consumer.code}
              number={consumer.number}
              city={consumer.city}
              phone={consumer.phone}
              email={consumer.email}
              status={tracking.status}
              onClick={handleButtonEdit}
            />
          </div>
        ))}
      </WrapperList>
      <ButtonSquare onClick={handleButtonToAddOrder}>
        Dodaj nowe zamówienie
      </ButtonSquare>
    </AppTemplate>
  );
};

export default AppPage;
