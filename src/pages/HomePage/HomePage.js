import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import MainTemplate from "../../templates/MainTemplate";

// assets
import Image from "../../components/assets/svg/Image1.svg";

import Button from "../../components/atoms/Button/Button";
import Header from "../../components/atoms/Header/Header";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 160px;
`;
const HeaderWrapper = styled.div`
  /* flex-basis: 60%; */
  padding-right: 50px;
`;

const ButtonWrapper = styled.div`
  margin-top: 45px;
`;

const HomePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/login");
  };
  return (
    <MainTemplate>
      <ContentWrapper>
        <HeaderWrapper>
          <Header>Wszystkie twoje zamówienia w jednym miejscu</Header>
          <ButtonWrapper>
            <Button onClick={handleClick} primaryColor="true">
              Wypróbuj za darmo
            </Button>
          </ButtonWrapper>
        </HeaderWrapper>

        <img src={Image} alt="sitting girl" />
      </ContentWrapper>
    </MainTemplate>
  );
};

export default HomePage;
