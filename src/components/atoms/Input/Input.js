import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const Wrapper = styled.div`
  width: 425px;
  padding: 20px 0;
  position: relative;

  font-family: ${theme.secondaryFont};
  font-size: ${theme.fontSize.l};
  color: ${theme.colors.primaryColor};
  border: none;
`;

const StyledInput = styled.input`
  background-color: transparent;
  padding: 10px;
  width: 100%;
  font-weight: 500;
  font-size: ${theme.fontSize.l};
  border: none;
  cursor: pointer;
  z-index: 1;

  :focus {
    outline: none;
  }
  :focus ~ label {
    top: 10px;
    font-size: ${theme.fontSize.s};
  }

  :not(:placeholder-shown) ~ label {
    top: 10px;
    font-size: ${theme.fontSize.s};
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  color: ${theme.colors.primary};
`;

const StyledBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.primary};
`;

const Input = ({ value, type, data }) => {
  return (
    <Wrapper>
      <StyledInput placeholder="" name={value} type={type} value={data} />
      <StyledLabel htmlFor={value}>{value}</StyledLabel>
      <StyledBar></StyledBar>
    </Wrapper>
  );
};

export default Input;
