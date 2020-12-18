import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const StyledButton = styled.button`
  position: ${({ type }) => (type === "edit" ? "absolute" : "fixed")};
  right: ${({ type }) => (type === "edit" ? "0" : "30px")};
  /* bottom: ${({ type }) => (type === "edit" ? "50%" : "30px")}; */
  bottom: ${({ type }) =>
    (type === "add" && "80px") || (type === "edit" && "50%") || "30px"};

  transform: ${({ type }) => (type === "edit" ? "translateY(50%)" : "30px")};
  color: ${({ type }) =>
    type === "edit" ? `${theme.colors.primary}` : `${theme.colors.tertiary}`};
  background-color: ${({ type }) =>
    type === "edit" ? "transparent" : `${theme.colors.primary}`};
  font-size: ${theme.fontSize.x};
  font-family: ${theme.secondaryFont};
  border: ${({ type }) =>
    type === "edit" ? "none" : `1px solid ${theme.colors.primary}`};
  border-left: ${({ type }) =>
    type === "edit" && `1px solid ${theme.colors.primary}`};
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s linear;

  :hover {
    opacity: 0.9;
  }
  
`;

const ButtonSquare = ({ children, onClick, className, type }) => {
  return (
    <StyledButton className={className} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default ButtonSquare;
