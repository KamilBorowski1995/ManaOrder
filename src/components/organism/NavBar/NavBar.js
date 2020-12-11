import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/svg/Logo.svg";
import Button from "../../atoms/Button/Button";

import { theme } from "../../../theme/mainTheme";

import auth from "../../../AuthComponent/auth";

const NavBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin-bottom: 20px;
`;
const NavWrapper = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  transition: 0.3s ease-in-out;
  padding-right: 50px;
  :hover {
    opacity: 0.8;
  }
`;
const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
`;

const NavBar = () => {
  const [userIsLogged, setUserIsLogged] = useState(false);

  const history = useHistory();

  const handleClickButton = (e) => {
    if (userIsLogged) {
      auth.logout(() => history.push("/"));
    } else {
      history.push("/login");
    }
  };

  const handleClickLogo = (e) => {
    history.push("/");
  };

  useEffect(() => {
    setUserIsLogged(auth.isAuthenticated());
  }, [auth.isAuthenticated()]);

  return (
    <NavBarWrapper>
      <StyledLogo to="/">
        <img onClick={handleClickLogo} src={Logo} alt="logo ManaOrder" />
      </StyledLogo>

      <NavWrapper>
        <StyledLink to="/">FAQ</StyledLink>
        <StyledLink to="/">Kontakt</StyledLink>
        <Button logout={userIsLogged} onClick={handleClickButton}>
          {userIsLogged ? "Wyloguj" : "Zaloguj się"}
        </Button>
      </NavWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
