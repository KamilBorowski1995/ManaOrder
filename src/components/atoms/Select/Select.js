import React from "react";

const Select = ({ onChange }) => {
  return (
    <div>
      <label for="role">Uprawnienia:</label>

      <select onChange={onChange} name="role" id="role">
        <option value="admin">Administrator</option>
        <option selected value="user">
          Pracownik
        </option>
      </select>
    </div>
  );
};

export default Select;
