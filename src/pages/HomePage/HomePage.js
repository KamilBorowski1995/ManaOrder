import React from "react";
import styled from "styled-components";

import { theme } from "../../theme/mainTheme";

// assets
import Logo from "../../components/assets/svg/Logo.svg";
import Image from "../../components/assets/svg/Image1.svg";

import Button from "../../components/atoms/Button/Button";
import Header from "../../components/atoms/Header/Header";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.secondary};
`;

const HomePage = () => {
  return (
    <Wrapper>
      <div>
        <img src={Logo} alt="logo" />
        <p>FAQ</p>
        <p>Kontakt</p>
        <Button>Zaloguj się</Button>
      </div>

      <div>
        <div>
          <Header>Zarządzaj swoimi zamówieniami z jednego miejsca.</Header>
          <Button primaryColor="false">Zaloguj się</Button>
          <div>
            <img src={Image} alt="photo of a sitting girl" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
