import React from "react";
import styled from "styled-components";

import Logo from "../../assets/svg/Logo.svg";
import Button from "../../atoms/Button/Button";

import { Link, useHistory } from "react-router-dom";

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.div`
  flex-basis: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => {
  const history = useHistory();

  const handleClick = () => {
    console.log("klikam");
    history.push("/login");
  };

  return (
    <NavBarWrapper>
      <img src={Logo} alt="logo ManaOrder" />
      <Nav>
        <Link to="/">FAQ</Link>
        <Link to="/">Kontakt</Link>
        <Button onClick={handleClick}>Zaloguj się</Button>
      </Nav>
    </NavBarWrapper>
  );
};

export default NavBar;
