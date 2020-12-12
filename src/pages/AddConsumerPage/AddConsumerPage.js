import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  companyName: "",
  NIP: "",
  street: "",
  number: "",
  code: "",
  city: "",
  phone: "",
  email: "",
  notes: "",
};

const AddConsumerPage = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(addConsumerReducer, initialState);

  const handleValue = (e) =>
    dispatch({
      type: "EDIT_VALUE",
      name: e.target.name,
      value: e.target.value,
    });

  const handleClickButton = () => {
    console.log(state);
    history.push("/consumers");
  };
  return (
    <AppTemplate>
      <Wrapper>
        <WrapperConsumerData>
          <ElementTable
            onChange={handleValue}
            data={state.id}
            title="Numer Klienta"
            name="id"
          />
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
