import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";

const Wrapper = styled.div`
  max-height: 500px;
  overflow: auto;
  /* border: 2px solid black; */

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #061658;
    /* outline: 1px solid slategrey; */
    border-radius: 20px 20px;
  }
`;

const WrapperMapObject = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;

const ConsumerDataBase = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/consumers")
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log(data);
      });
  }, []);

  const handleClickButton = () => {
    history.push("consumers/add");
  };

  return (
    <AppTemplate>
      <Wrapper>
        {data.map(({ id, firstName, lastName, phone, email }) => (
          <WrapperMapObject key={id}>
            <OrderList
              firstName={firstName}
              lastName={lastName}
              phone={phone}
              email={email}
            />
          </WrapperMapObject>
        ))}
        <ButtonSquare onClick={handleClickButton}>
          Dodaj nowego klienta
        </ButtonSquare>
      </Wrapper>
    </AppTemplate>
  );
};

export default ConsumerDataBase;
