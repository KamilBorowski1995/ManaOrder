import React from "react";

const SelectOrderStatus = ({ onChange, data }) => {
  return (
    <div>
      <label for="role">Status:</label>

      <select onChange={onChange} name="status" id="status">
        <option
          selected={data === "Zamówienie złożone" && true}
          value="Zamówienie złożone"
        >
          Zamówienie złożone
        </option>
        <option
          selected={data === "Zamówienie przyjęte do realizacji" && true}
          value="Zamówienie przyjęte do realizacji"
        >
          Zamówienie przyjęte do realizacji
        </option>
        <option
          selected={data === "Zamówienie wysłane" && true}
          value="Zamówienie wysłane"
        >
          Zamówienie wysłane
        </option>
        <option
          selected={data === "Zamówienie dostarczone" && true}
          value="Zamówienie dostarczone"
        >
          Zamówienie dostarczone
        </option>
        <option
          selected={data === "Zamówienie zakończone" && true}
          value="Zamówienie zakończone"
        >
          Zamówienie zakończone
        </option>
      </select>
    </div>
  );
};

export default SelectOrderStatus;
