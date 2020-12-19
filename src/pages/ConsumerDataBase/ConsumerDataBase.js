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

const ConsumerDataBase = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.server}/api/consumers`, {
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
    history.push("consumers/add");
  };
  const handleButtonEdit = () => {
    console.log(history.location);
  };
  return (
    <AppTemplate>
      <WrapperList>
        {data.map(
          ({ _id, fullName, phone, email, street, code, number, city }) => (
            <div key={_id}>
              <OrderList
                type="consumer"
                fullName={fullName}
                phone={phone}
                email={email}
                street={street}
                code={code}
                number={number}
                city={city}
                onClick={handleButtonEdit}
              />
            </div>
          )
        )}
      </WrapperList>
      <ButtonSquare onClick={handleClickButton}>
        Dodaj nowego klienta
      </ButtonSquare>
    </AppTemplate>
  );
};

export default ConsumerDataBase;
