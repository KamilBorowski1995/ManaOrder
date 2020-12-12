import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

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

const StyledButton = styled(ButtonSquare)`
  margin-top: 20px;
  margin-right: 30px;
`;

const UsersPage = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/consumers")
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
    history.push("/users/add");
  };

  return (
    <AppTemplate>
      <Wrapper>
        {data.map(({ _id, firstName, lastName, password, role }) => (
          <div key={_id}>
            <OrderList
              type="user"
              id={_id}
              firstName={firstName}
              lastName={lastName}
              password={password}
              role={role}
            />
          </div>
        ))}
        <StyledButton onClick={handleClickButton}>
          Dodaj nowy produkt
        </StyledButton>
      </Wrapper>
    </AppTemplate>
  );
};

export default UsersPage;
