import React from "react";
import Select from "react-select";
import styled from "styled-components";
import Auth from "../../../AuthComponent/auth";

import { theme } from "../../../theme/mainTheme";

const StyledSelect = styled(Select)`
  font-size: ${theme.fontSize.m};
  @media (max-width: 680px) {
    font-size: ${theme.fontSize.xs};
  }
`;

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: "100%",
    maxHeight: "150px",
    overflow: "auto",
    zIndex: "99",
  }),
};

const CustomSelect = ({ options, title, onChange, name }) => {
  const setMap = (name) => {
    switch (name) {
      case "consumer":
        return options.map(
          ({ _id, fullName, phone, email, street, code, number, city }) => ({
            value: _id,
            label: `${fullName} ul.${street} ${number}, ${code} ${city}, tel: ${phone} email: ${email}`,
          })
        );

      case "product":
        return options.map(({ nameProduct, cost, _id }) => ({
          value: _id,
          label: `${nameProduct}:  ${cost}zł`,
        }));

      default:
        break;
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <StyledSelect
        styles={customStyles}
        placeholder="Wyszukaj..."
        noOptionsMessage={() => "Brak szukanej zawartości"}
        onChange={onChange}
        options={setMap(name)}
      />
    </div>
  );
};
export default CustomSelect;
