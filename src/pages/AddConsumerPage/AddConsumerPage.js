import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import ElementTable from "../../components/molecules/ElementTable";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";

import { addConsumerReducer } from "../../reducers/addConsumer.reducer";

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

const AddConsumerPage = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(addConsumerReducer, {});

  const handleValue = (e) =>
    dispatch({
      type: "EDIT_VALUE",
      name: e.target.name,
      value: e.target.value,
    });

  const handleClickButton = () => {
    console.log(state);

    const newConsumer = {
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
      .post("http://localhost:5000/api/consumers/add", {
        newConsumer,
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
      })
      .then(function (response) {
        console.log(response);
        history.push("/consumers");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <AppTemplate>
      <Wrapper>
        <WrapperConsumerData>
          <ElementTable
            onChange={handleValue}
            data={state.firstName}
            title="Imię"
            name="firstName"
          />
          <ElementTable
            onChange={handleValue}
            data={state.lastName}
            title="Nazwisko"
            name="lastName"
          />
          <ElementTable
            onChange={handleValue}
            data={state.companyName}
            title="Pełna nazwa firmy"
            name="companyName"
          />
          <ElementTable
            onChange={handleValue}
            data={state.NIP}
            title="NIP"
            name="NIP"
          />
          <ElementTable
            onChange={handleValue}
            data={state.street}
            title="Ulica"
            name="street"
          />
          <ElementTable
            onChange={handleValue}
            data={state.number}
            title="Numer budynku"
            name="number"
          />
          <ElementTable
            onChange={handleValue}
            data={state.code}
            title="Kod pocztowy"
            name="code"
          />
          <ElementTable
            onChange={handleValue}
            data={state.city}
            title="Miejscowość"
            name="city"
          />
          <ElementTable
            onChange={handleValue}
            data={state.phone}
            title="Numer telefonu"
            name="phone"
          />
          <ElementTable
            onChange={handleValue}
            data={state.email}
            title="Email"
            name="email"
          />
          <ButtonSquare onClick={handleClickButton}>
            Dodaj nowego klienta
          </ButtonSquare>
        </WrapperConsumerData>
        <WrapperNotes>
          <ElementTable
            onChange={handleValue}
            data={state.notes}
            title="Notatki"
            name="notes"
          />
        </WrapperNotes>
      </Wrapper>
    </AppTemplate>
  );
};

export default AddConsumerPage;
