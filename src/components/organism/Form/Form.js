import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Paragraph from "../../atoms/Paragraph/Paragraph";

import Auth from "../../../AuthComponent/auth";

const StyledButtonWrapper = styled.div`
  padding-top: 20px;
`;

const Form = () => {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/api/users/login", {
        params: { login, password },
      })
      .then(function (response) {
        Auth.login(() => history.push("/"), response.data);
      })
      .catch(function (error) {
        if (error.response) setError(error.response.data);
        else console.log(error);
      })
      .then(function (e) {
        // always executed
      });
  };

  const handleInput = (e) => {
    const { type, value } = e.target;

    switch (type) {
      case "text":
        setLogin(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value="Login" onChange={handleInput} />
      <Input type="password" value="Pasword" onChange={handleInput} />
      <StyledButtonWrapper>
        <Button type="submit" primaryColor="true">
          Zaloguj
        </Button>
      </StyledButtonWrapper>
      {error.length > 0 && <Paragraph>{error}</Paragraph>}
    </form>
  );
};

export default Form;
