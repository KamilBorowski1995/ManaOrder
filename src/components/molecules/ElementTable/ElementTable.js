import React from "react";
import styled from "styled-components";

import { theme } from "../../../theme/mainTheme";

import Paragraph from "../../atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 200px) 2fr;
  align-items: center;
  margin-bottom: 10px;
  :nth-last-of-type(1) {
    margin-bottom: 20px;
  }
`;

const StyledParagraph = styled(Paragraph)``;

const Input = styled.input`
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

  :focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background-color: transparent;
  padding: 10px;
  width: 80%;
  height: 200px;
  font-weight: 500;
  font-size: ${theme.fontSize.l};
  color: ${theme.colors.primary};
  font-family: ${theme.primaryFont};
  border: 1px solid ${theme.colors.primary};
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

const ElementTable = ({
  size,
  data,
  title,
  onChange,
  name,
  type = "input",
}) => {
  const inputPlaceholder = !data && "Edytuj";

  return (
    <Wrapper>
      <StyledParagraph>{title}:</StyledParagraph>
      {type === "input" && (
        <Input
          name={name}
          value={data}
          onChange={onChange}
          placeholder={inputPlaceholder}
        />
      )}
      {type === "textarea" && (
        <TextArea name={name} value={data} onChange={onChange} />
      )}
    </Wrapper>
  );
};

export default ElementTable;
