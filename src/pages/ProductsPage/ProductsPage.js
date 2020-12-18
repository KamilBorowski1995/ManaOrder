import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import Auth from "../../AuthComponent/auth";

import { config } from "../../config";

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
      <ButtonSquare onClick={handleClickButton}>
        Dodaj nowy produkt
      </ButtonSquare>
    </AppTemplate>
  );
};

export default ProductsPage;
