import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/svg/Logo.svg";
import Button from "../../atoms/Button/Button";
import Paragraph from "../../atoms/Paragraph/Paragraph";

import { theme } from "../../../theme/mainTheme";

import Auth from "../../../AuthComponent/auth";

const NavBarWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 4fr 1fr;
  margin-bottom: 20px;
  align-items: center;
`;
const NavWrapper = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const StyledUserName = styled.div`
  padding-left: 80px;
  padding-right: 20px;
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
  const [userName, setUserName] = useState("");

  const history = useHistory();

  const handleClickButton = (e) => {
    if (userIsLogged) {
      Auth.logout(() => history.push("/"));
    } else {
      history.push("/login");
    }
  };

  const handleClickLogo = (e) => {
    history.push("/");
  };

  useEffect(() => {
    setUserName(sessionStorage.getItem("user"));
    setUserIsLogged(Auth.isAuthenticated());
  }, []);

  return (
    <NavBarWrapper>
      <div>
        <StyledLogo to="/">
          <img onClick={handleClickLogo} src={Logo} alt="logo ManaOrder" />
        </StyledLogo>
      </div>

      {userName !== "" && (
        <StyledUserName>
          <Paragraph>Witaj {userName}</Paragraph>
        </StyledUserName>
      )}
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
