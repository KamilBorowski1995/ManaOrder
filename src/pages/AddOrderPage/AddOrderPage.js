import React, { useReducer, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import InformationElement from "../../components/molecules/InformationElement";
import ElementTable from "../../components/molecules/ElementTable";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import CustomSelect from "../../components/atoms/CustomSelect/CustomSelect";
import SelectOrderStatus from "../../components/atoms/Select/SelectOrderStatus";

import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import { selectReducer } from "../../reducers/selectConsumer.reducer";
import { selectProducts } from "../../reducers/selectProducts.reducer";
import { selectTracking } from "../../reducers/selectTracking.reducer";

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
`;

const WrapperConsumerData = styled.div`
  position: relative;
  /* width: 100%; */
  height: 100%;
`;

const WrapperNotes = styled.div`
  position: relative;
`;

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
      .get("http://localhost:5000/api/consumers", {
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
      .get("http://localhost:5000/api/products", {
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
    console.log(stateTracking);
    const data = [
      { ...state },
      [...stateProducts],
      {
        courier: stateTracking.courier,
        trackingNumber: stateTracking.trackingNumber,
        status: stateTracking.status,
      },
    ];

    axios
      .post(
        "http://localhost:5000/api/orders/add",
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
    console.log(e);
    const id = e.value;
    const selectedData = allConsumer.filter(({ _id }) => _id === id);
    dispatch({ type: "SELECT_VALUE", state: selectedData[0] });
    console.log(state);
  };

  const handleSelectProduct = (e) => {
    const id = e.value;
    const selectedData = allProduct.filter(({ _id }) => _id === id);
    setActiveProduct(selectedData);
  };

  const handleButtonAddProduct = () => {
    setIsOpen(false);
    dispatchProducts({ type: "SELECT_VALUE", data: activeProduct[0] });
    // setActiveProduct({});
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
              <InformationElement data={state.firstName} title="Imię:" />
              <InformationElement data={state.lastName} title="Nazwisko:" />
              <InformationElement
                data={state.companyName}
                title="Pełna nazwa firmy:"
              />
              <InformationElement
                data={`ul. ${state.street} ${state.number}, ${state.code} ${state.city}`}
                title="Adres:"
              />
              <InformationElement data={state.NIP} title="NIP:" />
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
              <SelectOrderStatus
                onChange={handleValue}
                data={state.status}
                title="Status"
                name="status"
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
              <ButtonSquare type="edit" onClick={handleButtonAddProduct}>
                Dodaj
              </ButtonSquare>
            </div>
          ) : (
            <ButtonSquare type="edit" onClick={() => setIsOpen(true)}>
              Kolejny produkt
            </ButtonSquare>
          )}
          {stateProducts.map(({ cost, nameProduct }) => (
            <InformationElement data={cost} title={nameProduct} />
          ))}
        </WrapperNotes>
      </Wrapper>
    </AppTemplate>
  );
};

export default AddOrderPage;
