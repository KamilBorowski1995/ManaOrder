import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import ElementTable from "../../components/molecules/ElementTable";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";

import { addProductsReducer } from "../../reducers/addProducts.reducer";

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr;
`;

const WrapperConsumerData = styled.div`
  position: relative;
  height: 100%;
`;

const AddProductPage = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(addProductsReducer, {});

  const handleValue = (e) =>
    dispatch({
      type: "EDIT_VALUE",
      name: e.target.name,
      value: e.target.value,
    });

  const handleClickButton = () => {
    console.log(state);

    // const newConsumer = {
    //   firstName: state.firstName,
    //   lastName: state.lastName,
    //   companyName: state.companyName,
    //   NIP: state.NIP,
    //   street: state.street,
    //   number: state.number,
    //   code: state.code,
    //   city: state.city,
    //   phone: state.phone,
    //   email: state.email,
    //   notes: state.notes,
    // };

    // axios
    //   .post("http://localhost:5000/api/", {
    //     newConsumer,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     history.push("/consumers");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <AppTemplate>
      <Wrapper>
        <WrapperConsumerData>
          <ElementTable
            onChange={handleValue}
            data={state.title}
            title="Nazwa produktu"
            name="nameProduct"
          />
          <ElementTable
            onChange={handleValue}
            data={state.title}
            title="Cena produktu"
            name="cost"
          />

          <ButtonSquare onClick={handleClickButton}>
            Dodaj nowy produkt
          </ButtonSquare>
        </WrapperConsumerData>
      </Wrapper>
    </AppTemplate>
  );
};

export default AddProductPage;
