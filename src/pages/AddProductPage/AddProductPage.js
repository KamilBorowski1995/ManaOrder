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

    const newConsumer = {
      nameProduct: state.nameProduct,
      cost: state.cost,
    };

    axios
      .post(
        "http://localhost:5000/api/products/add",
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
        history.push("/products");
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
