import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

import boxImage from "../../assets/svg/box.svg";
import openBoxImage from "../../assets/svg/openBox.svg";
import clientImage from "../../assets/svg/client.svg";
import userImage from "../../assets/svg/user.svg";

import Paragraph from "../../atoms/Paragraph/Paragraph";

const Wrapper = styled.div``;

const activeClassName = "nav-item-active";

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  padding: 20px 30px;
  border: 2px solid transparent;
  transition: 0.3s ease-in-out;

  &.${activeClassName} {
    border: 2px solid ${theme.colors.primary};
  }
  :hover :not(${activeClassName}) {
    transform: scale(1.1);
  }
`;

const StyledImg = styled.img`
  width: 55px;
  margin: 14px auto 0;
  transition: 0.3s ease-in-out;
`;

const NavCategory = () => {
  return (
    <Wrapper>
      <StyledNavLink exact to="/">
        <StyledImg src={boxImage} alt="orders" />
        <Paragraph size="xl">Zamówienia</Paragraph>
      </StyledNavLink>
      <StyledNavLink to="/consumers">
        <StyledImg src={clientImage} alt="clients" />
        <Paragraph size="xl">Baza klientów</Paragraph>
      </StyledNavLink>
      <StyledNavLink to="/products">
        <StyledImg src={openBoxImage} alt="products" />
        <Paragraph size="xl">Produkty</Paragraph>
      </StyledNavLink>
      <StyledNavLink to="/users">
        <StyledImg src={userImage} alt="users" />
        <Paragraph size="xl">Użytkownicy</Paragraph>
      </StyledNavLink>
    </Wrapper>
  );
};

export default NavCategory;
