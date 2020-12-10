import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/svg/Logo.svg";
import Button from "../../atoms/Button/Button";

import { theme } from "../../../theme/mainTheme";

const NavBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
`;
const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  transition: 0.3s ease-in-out;

  :hover {
    opacity: 0.8;
  }
`;
const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
`;

const NavBar = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/login");
  };

  return (
    <NavBarWrapper>
      <StyledLogo to="/">
        <img onClick={handleClick} src={Logo} alt="logo ManaOrder" />
      </StyledLogo>

      <NavWrapper>
        <StyledLink to="/">FAQ</StyledLink>
        <StyledLink to="/">Kontakt</StyledLink>
      </NavWrapper>
      <Button onClick={handleClick}>Zaloguj się</Button>
    </NavBarWrapper>
  );
};

export default NavBar;
