import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";

const ProductsPage = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  const handleClickButton = () => {
    history.push("/products/add");
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
