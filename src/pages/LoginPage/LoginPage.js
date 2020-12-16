import React from "react";

import styled from "styled-components";

import MainTemplate from "../../templates/MainTemplate";

import Form from "../../components/organism/Form";

import Image2 from "../../components/assets/svg/Image2.svg";

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
