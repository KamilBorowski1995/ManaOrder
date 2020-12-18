import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import ElementTable from "../../components/molecules/ElementTable";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import Select from "../../components/atoms/Select/Select";

import { addConsumerReducer } from "../../reducers/addConsumer.reducer";

import { config } from "../../config";

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
`;

const WrapperConsumerData = styled.div`
  position: relative;
  /* width: 100%; */
  height: 100%;
`;

const AddUserPage = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(addConsumerReducer, { role: "user" });

  const handleValue = (e) =>
    dispatch({
      type: "EDIT_VALUE",
      name: e.target.name,
      value: e.target.value,
    });

  const handleClickButton = () => {
    const newUsers = {
      fullName: state.fullName,
      password: state.password,
      login: state.login,
      role: state.role,
    };

    axios
      .post(
        `${config.server}/api/users/add`,
        {
          newUsers,
        },
        {
          headers: {
            "auth-token": sessionStorage.getItem("auth-token"),
          },
        }
      )
      .then(function (response) {
        history.push("/users");
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
            data={state.fullName}
            title="Imię i nazwisko"
            name="fullName"
          />
          <ElementTable
            onChange={handleValue}
            data={state.login}
            title="Nazwa użytkownika"
            name="login"
          />

          <ElementTable
            onChange={handleValue}
            data={state.password}
            title="Hasło"
            name="password"
          />

          <Select
            value={[
              { selected: false, title: "Administrator", value: "admin" },
              { selected: true, title: "Użytkownik", value: "user" },
            ]}
            onChange={handleValue}
            name="Rola"
            type="role"
          />
          <ButtonSquare onClick={handleClickButton}>
            Dodaj nowego użytkownika
          </ButtonSquare>
        </WrapperConsumerData>
      </Wrapper>
    </AppTemplate>
  );
};

export default AddUserPage;
