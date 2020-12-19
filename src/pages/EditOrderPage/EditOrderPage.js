import React, { useReducer, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { theme } from "../../theme/mainTheme";
import AppTemplate from "../../templates/AppTemplate";

import InformationElement from "../../components/molecules/InformationElement";
import ElementTable from "../../components/molecules/ElementTable";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";

import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import { selectTracking } from "../../reducers/selectTracking.reducer";
import Select from "../../components/atoms/Select/Select";
import Auth from "../../AuthComponent/auth";
import OrderFullList from "../../components/organism/OrderFullList/OrderFullList";

import { config } from "../../config";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    padding-bottom: 40px;
  }
`;

const WrapperConsumerData = styled.div`
  position: relative;
  /* width: 100%; */
  height: 100%;
`;

const WrapperNotes = styled.div`
  position: relative;
`;

const StyledParagraphHeader = styled(Paragraph)`
  @media (max-width: 680px) {
    font-size: ${theme.fontSize.m};
    font-weight: bold;
  }
`;

const EditOrderPage = () => {
  const history = useHistory();
  const params = useParams();

  const [stateProducts, setStateProducts] = useState([]);

  const [consumerData, setConsumerData] = useState([]);
  const [stateTracking, dispatchTracking] = useReducer(selectTracking, {});

  useEffect(() => {
    axios
      .get(`${config.server}/api/orders/order`, {
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
        params: { orderId: params.id },
      })
      .then((res) => {
        const tracking = res.data[0].tracking;

        for (const [key, value] of Object.entries(tracking)) {
          dispatchTracking({
            type: "EDIT_VALUE",
            name: key,
            value: value,
          });
        }
        setConsumerData(res.data[0].consumer);
        setStateProducts(res.data[0].products);
      })
      .catch(function (error) {
        Auth.logout(() => history.push("/"));
        console.log(error);
      })
      .then(function () {});
  }, [history, params.id]);

  const handleValue = (e) =>
    dispatchTracking({
      type: "EDIT_VALUE",
      name: e.target.name,
      value: e.target.value,
    });

  const handleClickButton = () => {
    const tracking = {
      courier: stateTracking.courier,
      trackingNumber: stateTracking.trackingNumber,
      status: stateTracking.status || "Zamówienie złożone",
    };

    axios
      .put(
        `${config.server}/api/orders/${params.id}`,
        {
          tracking,
        },
        {
          headers: {
            "auth-token": sessionStorage.getItem("auth-token"),
          },
        }
      )
      .then(function (response) {
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const value = [
    {
      title: "Zamówienie złożone",
      value: "Zamówienie złożone",
    },
    {
      title: "Zamówienie przyjęte do realizacji",
      value: "Zamówienie przyjęte do realizacji",
    },
    {
      title: "Zamówienie wysłane",
      value: "Zamówienie wysłane",
    },
    {
      title: "Zamówienie dostarczone",
      value: "Zamówienie dostarczone",
    },
    {
      title: "Zamówienie zakończone",
      value: "Zamówienie zakończone",
    },
  ];

  return (
    <AppTemplate>
      <Wrapper>
        <WrapperConsumerData>
          <StyledParagraphHeader>Dane klienta:</StyledParagraphHeader>
          <div>
            <InformationElement
              data={consumerData.fullName}
              title={
                consumerData.consumerType === "firma"
                  ? "Nazwa firmy"
                  : "Imię i nazwisko"
              }
            />

            <InformationElement
              data={`ul. ${consumerData.street} ${consumerData.number}, ${consumerData.code} ${consumerData.city}`}
              title="Adres:"
            />
            <InformationElement
              data={consumerData.phone}
              title="Numer telefonu:"
            />
            <InformationElement data={consumerData.email} title="Email:" />
            <ElementTable
              onChange={handleValue}
              data={stateTracking.courier}
              title="Firma kurierska"
              name="courier"
            />
            <ElementTable
              onChange={handleValue}
              data={stateTracking.trackingNumber}
              title="Numer przesyłki"
              name="trackingNumber"
            />

            <Select
              value={value.map(({ title, value }) => ({
                title: title,
                value: value,
                selected: value === stateTracking.status ? true : false,
              }))}
              onChange={handleValue}
              name="Status zamówienia"
              type="status"
            />
          </div>

          <ButtonSquare onClick={handleClickButton}>Zapisz zmiany</ButtonSquare>
        </WrapperConsumerData>
        <WrapperNotes>
          <StyledParagraphHeader>Zamówienie:</StyledParagraphHeader>

          <OrderFullList product={stateProducts} />
        </WrapperNotes>
      </Wrapper>
    </AppTemplate>
  );
};

export default EditOrderPage;
