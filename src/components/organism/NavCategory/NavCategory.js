import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

import boxImage from "../../assets/svg/box.svg";
import openBoxImage from "../../assets/svg/openBox.svg";
import clientImage from "../../assets/svg/client.svg";
import userImage from "../../assets/svg/user.svg";

import Paragraph from "../../atoms/Paragraph/Paragraph";

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
    <div>
      <StyledNavLink exact activeClassName="active" to="/">
        <StyledImg src={boxImage} alt="orders" />
        <Paragraph>Zamówienia</Paragraph>
      </StyledNavLink>
      <StyledNavLink activeClassName="active" to="/orders">
        <StyledImg src={clientImage} alt="clients" />
        <Paragraph>Baza klientów</Paragraph>
      </StyledNavLink>
      <StyledNavLink to="/orders">
        <StyledImg src={openBoxImage} alt="products" />
        <Paragraph>Produkty</Paragraph>
      </StyledNavLink>
      <StyledNavLink to="/orders">
        <StyledImg src={userImage} alt="users" />
        <Paragraph>Użytkownicy</Paragraph>
      </StyledNavLink>
    </div>
  );
};

export default NavCategory;
