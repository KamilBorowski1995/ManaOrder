import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const StyledLabel = styled.label`
  font-family: ${theme.secondaryFont};
  font-weight: 500;
  font-size: ${theme.fontSize.s};
  color: ${theme.colors.primary};
  transition: 0.3s ease-in-out;
  display: inline-block;
`;

const StyledInput = styled.input`
  margin-right: 10px;
`;

const InputRadio = ({ onChange, name, value, selectConsumerType }) => {
  return (
    <StyledLabel>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={selectConsumerType === value ? true : false}
        onChange={onChange}
      />
      {value}
    </StyledLabel>
  );
};

export default InputRadio;
