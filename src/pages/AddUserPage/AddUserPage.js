import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import ElementTable from "../../components/molecules/ElementTable";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import Select from "../../components/atoms/Select/Select";

import { addConsumerReducer } from "../../reducers/addConsumer.reducer";

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
    console.log(state);

    const newUsers = {
      firstName: state.firstName,
      lastName: state.lastName,
      password: state.password,
      login: state.login,
      role: state.role,
    };

    axios
      .post("http://localhost:5000/api/users/add", {
        newUsers,
      })
      .then(function (response) {
        console.log(response);
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
            data={state.firstName}
            title="Imię"
            name="firstName"
          />

          <ElementTable
            onChange={handleValue}
            data={state.lastName}
            title="Nazwisko"
            name="lastName"
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
            onChange={handleValue}
            data={state.role}
            title="Rola"
            name="role"
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
