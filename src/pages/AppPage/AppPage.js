import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";

import auth from "../../AuthComponent/auth";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import Auth from "../../AuthComponent/auth";

const AppPage = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders", {
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        Auth.logout(() => history.push("/"));
        console.log(error);
      })
      .then(function () {});
  }, []);

  const handleButtonToAddOrder = () => {
    if (auth.isAuthenticated()) history.push("/orders/add");
  };

  return (
    <AppTemplate>
      {data.map(({ _id, consumer, products, tracking }) => (
        <div key={_id}>
          <OrderList
            type="order"
            id={consumer._id}
            firstName={consumer.firstName}
            lastName={consumer.lastName}
            street={consumer.street}
            code={consumer.code}
            number={consumer.number}
            city={consumer.city}
            phone={consumer.phone}
            email={consumer.email}
            status={tracking.status}
          />
        </div>
      ))}
      <ButtonSquare onClick={handleButtonToAddOrder}>
        Dodaj nowe zamówienie
      </ButtonSquare>
    </AppTemplate>
  );
};

export default AppPage;
