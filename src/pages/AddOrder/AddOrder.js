import React from "react";
import AppTemplate from "../../templates/AppTemplate";

const AddOrder = () => {
  return (
    <AppTemplate>
      <table>
        <tr>
          <td>Numer Zamówienia </td> <td>#48621547895</td>
        </tr>
        <tr>
          <td>Numer Klienta </td> <td>#98579985657</td>
        </tr>
        <tr>
          <td>Imię i nazwisko </td> <td>Piotr Kowalski</td>
        </tr>
      </table>
    </AppTemplate>
  );
};

export default AddOrder;
