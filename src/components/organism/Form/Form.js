import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

import auth from "../../../AuthComponent/auth";

const StyledButtonWrapper = styled.div`
  padding-top: 20px;
`;

const Form = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(() => history.push("/"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value="Login" />
      <Input type="password" value="Pasword" />
      <StyledButtonWrapper>
        <Button type="submit" primaryColor="true">
          Zaloguj
        </Button>
      </StyledButtonWrapper>
    </form>
  );
};

export default Form;
