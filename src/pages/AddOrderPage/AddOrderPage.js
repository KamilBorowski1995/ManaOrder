import React, { useReducer, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import InformationElement from "../../components/molecules/InformationElement";
import ElementTable from "../../components/molecules/ElementTable";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import CustomSelect from "../../components/atoms/CustomSelect/CustomSelect";

import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import { selectReducer } from "../../reducers/selectConsumer.reducer";
import { selectProducts } from "../../reducers/selectProducts.reducer";
import { selectTracking } from "../../reducers/selectTracking.reducer";
import Select from "../../components/atoms/Select/Select";
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

const StyledButtonSquare = styled(ButtonSquare)``;

const AddOrderPage = () => {
  const history = useHistory();

  const [allConsumer, setAllConsumer] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});

  const [state, dispatch] = useReducer(selectReducer, []);
  const [stateProducts, dispatchProducts] = useReducer(selectProducts, []);
  const [stateTracking, dispatchTracking] = useReducer(selectTracking, []);

  useEffect(() => {
    axios
      .get(`${config.server}/api/consumers`, {
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
      })
      .then((res) => {
        setAllConsumer(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});

    axios
      .get(`${config.server}/api/products`, {
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
      })
      .then((res) => {
        setAllProduct(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  const handleValue = (e) =>
    dispatchTracking({
      type: "EDIT_VALUE",
      name: e.target.name,
      value: e.target.value,
    });

  const handleClickButton = () => {
    if (stateProducts.length < 1) return;
    if (stateTracking.length < 1) return;
    if (state.length < 1) return;
    const data = [
      { ...state },
      [...stateProducts],
      {
        courier: stateTracking.courier,
        trackingNumber: stateTracking.trackingNumber,
        status: stateTracking.status || "Zamówienie złożone",
      },
    ];
    console.log(data);
    axios
      .post(
        `${config.server}/api/orders/add`,
        {
          data,
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

  const handleSelectConsumer = (e) => {
    const id = e.value;
    const selectedData = allConsumer.filter(({ _id }) => _id === id);
    dispatch({ type: "SELECT_VALUE", state: selectedData[0] });
  };

  const handleSelectProduct = (e) => {
    const id = e.value;
    const selectedData = allProduct.filter(({ _id }) => _id === id);
    setActiveProduct(selectedData);
  };

  const handleButtonAddProduct = () => {
    if (activeProduct) {
      dispatchProducts({ type: "SELECT_VALUE", data: activeProduct[0] });
      setActiveProduct(null);
    }
    setIsOpen(false);
  };

  return (
    <AppTemplate>
      <Wrapper>
        <WrapperConsumerData>
          <CustomSelect
            name="consumer"
            title="Klient: "
            options={allConsumer}
            onChange={handleSelectConsumer}
          />
          {state.length !== 0 && (
            <div>
              <InformationElement
                data={state.fullName}
                title={
                  state.consumerType === "Firma"
                    ? "Nazwa firmy"
                    : "Imię i nazwisko"
                }
              />

              <InformationElement
                data={`ul. ${state.street} ${state.number}, ${state.code} ${state.city}`}
                title="Adres:"
              />
              <InformationElement data={state.phone} title="Numer telefonu:" />
              <InformationElement data={state.email} title="Email:" />
              <ElementTable
                onChange={handleValue}
                data={state.courier}
                title="Firma kurierska"
                name="courier"
              />
              <ElementTable
                onChange={handleValue}
                data={state.trackingNumber}
                title="Numer przesyłki"
                name="trackingNumber"
              />

              <Select
                value={[
                  {
                    selected: true,
                    title: "Zamówienie złożone",
                    value: "Zamówienie złożone",
                  },
                  {
                    selected: false,
                    title: "Zamówienie przyjęte do realizacji",
                    value: "Zamówienie przyjęte do realizacji",
                  },
                  {
                    selected: false,
                    title: "Zamówienie wysłane",
                    value: "Zamówienie wysłane",
                  },
                  {
                    selected: false,
                    title: "Zamówienie dostarczone",
                    value: "Zamówienie dostarczone",
                  },
                  {
                    selected: false,
                    title: "Zamówienie zakończone",
                    value: "Zamówienie zakończone",
                  },
                ]}
                onChange={handleValue}
                name="Status zamówienia"
                type="status"
              />
            </div>
          )}

          <ButtonSquare onClick={handleClickButton}>
            Dodaj nowe zamówienie
          </ButtonSquare>
        </WrapperConsumerData>
        <WrapperNotes>
          <Paragraph>Zamówienie</Paragraph>
          {isOpen ? (
            <div>
              <CustomSelect
                name="product"
                title=""
                options={allProduct}
                onChange={handleSelectProduct}
              />
              <StyledButtonSquare type="add" onClick={handleButtonAddProduct}>
                Dodaj
              </StyledButtonSquare>
            </div>
          ) : (
            <div>
              <StyledButtonSquare type="add" onClick={() => setIsOpen(true)}>
                Kolejny produkt
              </StyledButtonSquare>
            </div>
          )}
          <OrderFullList product={stateProducts} />
        </WrapperNotes>
      </Wrapper>
    </AppTemplate>
  );
};

export default AddOrderPage;
