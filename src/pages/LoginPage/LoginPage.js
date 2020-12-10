import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import MainTemplate from "../../templates/MainTemplate";

import Form from "../../components/organism/Form";

import Image2 from "../../components/assets/svg/Image2.svg";
import auth from "../../AuthComponent/auth";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 180px;
  grid-template-columns: 1fr 1fr;
`;

const StyledImage = styled.img`
  height: 250px;
`;

const LoginPage = () => {
  const history = useHistory();

  useEffect(() => {
    if (auth.isAuthenticated()) history.push("/");
  }, []);

  return (
    <MainTemplate>
      <Wrapper>
        <Form />
        <StyledImage src={Image2} alt="Girls login in page" />
      </Wrapper>
    </MainTemplate>
  );
};

export default LoginPage;
