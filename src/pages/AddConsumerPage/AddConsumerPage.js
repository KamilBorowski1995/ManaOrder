import React, { useReducer, useState } from "react";
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
  const [selectConsumerType, setSelectConsumerType] = useState("Firma");

  const handleValue = (e) =>
    dispatch({
      type: "EDIT_VALUE",
      name: e.target.name,
      value: e.target.value,
    });

  const handleClickButton = () => {
    console.log(state);

    const newConsumer = {
      fullName: state.fullName,
      street: state.street,
      number: state.number,
      code: state.code,
      city: state.city,
      phone: state.phone,
      email: state.email,
      notes: state.notes,
      consumerType: selectConsumerType,
    };

    axios
      .post(
        "http://localhost:5000/api/consumers/add",
        {
          newConsumer,
        },
        {
          headers: {
            "auth-token": sessionStorage.getItem("auth-token"),
          },
        }
      )
      .then(function (response) {
        history.push("/consumers");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleRadioInput = (e) => {
    setSelectConsumerType(e.target.value);
  };
  return (
    <AppTemplate>
      <Wrapper>
        <WrapperConsumerData>
          <div>
            <label>
              <input
                type="radio"
                checked={selectConsumerType === "Firma"}
                name="consumerType"
                value="Firma"
                onChange={handleRadioInput}
              />
              Firma
            </label>
            <label>
              <input
                type="radio"
                name="consumerType"
                value="Osoba fizyczna"
                checked={selectConsumerType === "Osoba fizyczna"}
                onChange={handleRadioInput}
              />
              Osoba fizyczna
            </label>
          </div>
          <ElementTable
            onChange={handleValue}
            data={state.firstName}
            title={
              selectConsumerType === "Firma" ? "Nazwa firmy" : "Imię i nazwisko"
            }
            name="fullName"
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
