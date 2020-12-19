import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { theme } from "../../theme/mainTheme";

import MainTemplate from "../../templates/MainTemplate";

import Image from "../../components/assets/svg/Image1.svg";

import Button from "../../components/atoms/Button/Button";
import Header from "../../components/atoms/Header/Header";

const HeaderWrapper = styled.div`
  padding-right: 50px;
  @media (max-width: 1366px) {
    width: 600px;
  }
  @media (max-width: 1150px) {
    padding-right: 0;
    width: 100%;
  }
`;

const StyledHeader = styled(Header)`
  @media (max-width: 1150px) {
    text-align: center;
  }
  @media (max-width: 1150px) and (orientation: portrait) {
    text-align: center;
    font-size: ${theme.fontSize.xl};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 45px;
  @media (max-width: 1150px) {
    text-align: center;
  }
`;

const HomePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/login");
  };
  return (
    <MainTemplate src={Image} alt="sitting girl">
      <HeaderWrapper>
        <StyledHeader>Wszystkie twoje zamówienia w jednym miejscu</StyledHeader>
        <ButtonWrapper>
          <Button onClick={handleClick} primaryColor="true">
            Wypróbuj za darmo
          </Button>
        </ButtonWrapper>
      </HeaderWrapper>
    </MainTemplate>
  );
};

export default HomePage;
