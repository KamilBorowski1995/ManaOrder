import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

import boxImage from "../../assets/svg/box.svg";
import openBoxImage from "../../assets/svg/openBox.svg";
import clientImage from "../../assets/svg/client.svg";
import userImage from "../../assets/svg/user.svg";

import Paragraph from "../../atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1040px) {
    flex-direction: row;
    width: calc(100vw - 10px);
    justify-content: space-between;
    margin-bottom: 30px;
  }
  @media (max-width: 680px) {
    width: 100vw;
    margin: 0;
    /* background-color: ${theme.colors.tertiary};
    box-shadow: 0 0px 2px 2px ${theme.colors.primary}; */
  }
`;

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

  @media (max-width: 680px) {
    padding: 10px 15px;
  }
`;

const StyledImg = styled.img`
  width: 55px;
  margin: 14px auto 0;
  transition: 0.3s ease-in-out;
  @media (max-width: 680px) {
    margin: 0 auto;
    width: 30px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  @media (max-width: 1040px) {
    font-size: ${theme.fontSize.l};
  }
  @media (max-width: 680px) {
    display: none;
  }
`;

const NavCategory = () => {
  return (
    <Wrapper>
      <StyledNavLink exact to="/">
        <StyledImg src={boxImage} alt="orders" />
        <StyledParagraph size="xl">Zamówienia</StyledParagraph>
      </StyledNavLink>
      <StyledNavLink to="/consumers">
        <StyledImg src={clientImage} alt="clients" />
        <StyledParagraph size="xl">Baza klientów</StyledParagraph>
      </StyledNavLink>
      <StyledNavLink to="/products">
        <StyledImg src={openBoxImage} alt="products" />
        <StyledParagraph size="xl">Produkty</StyledParagraph>
      </StyledNavLink>
      <StyledNavLink to="/users">
        <StyledImg src={userImage} alt="users" />
        <StyledParagraph size="xl">Użytkownicy</StyledParagraph>
      </StyledNavLink>
    </Wrapper>
  );
};

export default NavCategory;
