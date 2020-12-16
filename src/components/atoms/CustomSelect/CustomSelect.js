import React from "react";
import Select from "react-select";

const CustomSelect = ({ options, title, onChange, name }) => {
  const setMap = (name) => {
    switch (name) {
      case "consumer":
        return options.map(
          ({
            _id,
            firstName,
            lastName,
            phone,
            email,
            street,
            code,
            number,
            city,
          }) => ({
            value: _id,
            label: `${firstName} ${lastName} ul.${street} ${number}, ${code} ${city}, tel: ${phone} email: ${email}`,
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
      <Select
        placeholder="Wyszukaj..."
        noOptionsMessage={() => "Brak szukanej zawartości"}
        onChange={onChange}
        options={setMap(name)}
      />
    </div>
  );
};
export default CustomSelect;
