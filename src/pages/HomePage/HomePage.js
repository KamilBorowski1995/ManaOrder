import React from "react";
import styled from "styled-components";

// assets
import Logo from "../../components/assets/svg/Logo.svg";
import Image from "../../components/assets/svg/Image1.svg";

import Button from "../../components/atoms/Button/Button";
import Header from "../../components/atoms/Header/Header";

const Wrapper = styled.div`
  display: grid;
  padding: 56px 65px;
`;
const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 160px;
`;
const StyledHeader = styled.div`
  flex-basis: 50%;
  padding-right: 50px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <NavBarWrapper>
        <img src={Logo} alt="logo ManaOrder" />
        <Nav>
          <p>FAQ</p>
          <p>Kontakt</p>
          <Button>Zaloguj się</Button>
        </Nav>
      </NavBarWrapper>

      <ContentWrapper>
        <StyledHeader>
          <Header>Zarządzaj swoimi zamówieniami z jednego miejsca.</Header>

          <Button primaryColor="false">Zaloguj się</Button>
        </StyledHeader>
        <div>
          <img src={Image} alt="sitting girl" />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HomePage;
