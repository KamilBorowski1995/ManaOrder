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
  const [isOpen, setIsOpen] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const [state, dispatch] = useReducer(selectReducer, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/consumers")
      .then((res) => {
        setAllConsumer(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});

    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log(res.data);
        setAllProduct(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  const handleValue = (e) =>
    dispatch({
      type: "EDIT_VALUE",
      name: e.target.name,
      value: e.target.value,
    });

  const handleClickButton = () => {
    console.log(state);

    const newOrder = {
      firstName: state.firstName,
      lastName: state.lastName,
      companyName: state.companyName,
      NIP: state.NIP,
      street: state.street,
      number: state.number,
      code: state.code,
      city: state.city,
      phone: state.phone,
      email: state.email,
      notes: state.notes,
    };

    axios
      .post("http://localhost:5000/api/orders/add", {
        newOrder,
      })
      .then(function (response) {
        console.log(response);
        history.push("/consumers");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSelect = (e) => {
    console.log(e);
    const id = e.value;
    const selectedData = allConsumer.filter(({ _id }) => _id === id);
    dispatch({ type: "SELECT_VALUE", state: selectedData[0] });
  };

  return (
    <AppTemplate>
      <Wrapper>
        <WrapperConsumerData>
          <CustomSelect
            name="consumer"
            title="Klient: "
            options={allConsumer}
            onChange={handleSelect}
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
                // onChange={handleSelect}
              />
              <ButtonSquare onClick={() => setIsOpen(false)}>
                Dodaj
              </ButtonSquare>
            </div>
          ) : (
            <ButtonSquare onClick={() => setIsOpen(true)}>
              Kolejny produkt
            </ButtonSquare>
          )}
        </WrapperNotes>
      </Wrapper>
    </AppTemplate>
  );
};

export default AddOrderPage;
