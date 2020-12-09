import React from "react";
import styled from "styled-components";

// assets

import NavBar from "../../components/organism/NavBar";

import Image from "../../components/assets/svg/Image1.svg";

import Button from "../../components/atoms/Button/Button";
import Header from "../../components/atoms/Header/Header";

const Wrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: grid;
  padding: 56px 65px;
`;

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

const StyledImgage = styled.img`
  /* width: 100%; */
  /* margin-right: 100px; */
`;

const HomePage = () => {
  return (
    <Wrapper>
      <NavBar />
      <ContentWrapper>
        <HeaderWrapper>
          <Header>Zarządzaj swoimi zamówieniami z jednego miejsca.</Header>
          <ButtonWrapper>
            <Button primaryColor="true">Wypróbuj za darmo</Button>
          </ButtonWrapper>
        </HeaderWrapper>

        <StyledImgage src={Image} alt="sitting girl" />
      </ContentWrapper>
    </Wrapper>
  );
};

export default HomePage;
