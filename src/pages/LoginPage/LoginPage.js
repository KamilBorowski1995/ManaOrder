import React from "react";

import MainTemplate from "../../templates/MainTemplate";

import Image2 from "../../components/assets/svg/Image2.svg";

import Form from "../../components/organism/Form";

const LoginPage = () => {
  return (
    <MainTemplate page="login" src={Image2} alt="Girls login in page">
      <Form />
    </MainTemplate>
  );
};

export default LoginPage;
