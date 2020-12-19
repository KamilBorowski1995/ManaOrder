import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import Auth from "../../AuthComponent/auth";

import { config } from "../../config";

const WrapperList = styled.div`
  padding-bottom: 20px;
  max-height: calc(100vh - 250px);
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

const ProductsPage = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.server}/api/products`, {
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        Auth.logout(() => history.push("/"));
        console.log(error);
      })
      .then(function () {});
  }, [history]);

  const handleClickButton = () => {
    history.push("/products/add");
  };

  const handleButtonEdit = () => {
    console.log(history.location);
  };

  return (
    <AppTemplate>
      <WrapperList>
        {data.map(({ _id, nameProduct, cost }) => (
          <div key={_id}>
            <OrderList
              type="product"
              id={_id}
              nameProduct={nameProduct}
              cost={cost}
              onClick={handleButtonEdit}
            />
          </div>
        ))}
      </WrapperList>
      <ButtonSquare onClick={handleClickButton}>
        Dodaj nowy produkt
      </ButtonSquare>
    </AppTemplate>
  );
};

export default ProductsPage;
