import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import Auth from "../../AuthComponent/auth";

const ConsumerDataBase = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/consumers", {
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
  }, []);

  const handleClickButton = () => {
    history.push("consumers/add");
  };

  return (
    <AppTemplate>
      {console.log(data)}
      {data.map(
        ({
          _id,
          firstName,
          lastName,
          phone,
          email,
          street,
          code,
          number,
          city,
        }) => (
          <div key={_id}>
            <OrderList
              type="consumer"
              firstName={firstName}
              lastName={lastName}
              phone={phone}
              email={email}
              street={street}
              code={code}
              number={number}
              city={city}
            />
          </div>
        )
      )}
      <ButtonSquare onClick={handleClickButton}>
        Dodaj nowego klienta
      </ButtonSquare>
    </AppTemplate>
  );
};

export default ConsumerDataBase;
