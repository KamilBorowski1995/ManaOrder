import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 200px) 2fr;
  align-items: center;
  margin-bottom: 10px;
  :nth-last-of-type(1) {
    margin-bottom: 20px;
  }
`;

const StyledLabel = styled.label`
  font-family: ${theme.secondaryFont};
  font-weight: 500;
  color: ${theme.colors.primary};
  transition: 0.3s ease-in-out;
  display: inline-block;
`;

const StyledSelect = styled.select`
  background-color: transparent;
  padding: 10px;
  width: 80%;

  font-weight: 500;
  font-size: ${theme.fontSize.l};
  color: ${theme.colors.primary};
  font-family: ${theme.primaryFont};
  border: none;
  cursor: pointer;
  border-bottom: 1px solid ${theme.colors.primary};
`;

const StyledOption = styled.option`
  background-color: ${theme.colors.secondary};
  padding: 10px;
  width: 80%;
  font-weight: 300;
  font-size: ${theme.fontSize.l};
  color: ${theme.colors.primary};
  font-family: ${theme.primaryFont};
  cursor: pointer;
`;

// const Select = ({ onChange }) => {
//   return (
//     <Wrapper>
//       <StyledLabel htmlFor="role">Uprawnienia:</StyledLabel>

//       <StyledSelect onChange={onChange} name="role" id="role">
//         <StyledOption value="admin">Administrator</StyledOption>
//         <StyledOption selected value="user">
//           Pracownik
//         </StyledOption>
//       </StyledSelect>
//     </Wrapper>
//   );
// };

const Select = ({ value, onChange, name, type }) => {
  const valueMap = value.map(({ value, selected, title }) => (
    <StyledOption selected={selected} value={value}>
      {title}
    </StyledOption>
  ));
  return (
    <Wrapper>
      <StyledLabel htmlFor="role">{name}:</StyledLabel>

      <StyledSelect onChange={onChange} name={type} id={type}>
        {valueMap}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
