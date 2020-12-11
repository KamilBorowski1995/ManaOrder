import React from "react";

import AppTemplate from "../../templates/AppTemplate";

import ElementTable from "../../components/molecules/ElementTable";

const ConsumerDataBase = () => {
  return (
    <AppTemplate>
      <table>
        <ElementTable data="#48621547895">Numer Zamówienia:</ElementTable>
        <ElementTable data="#98579985657">Numer Klienta:</ElementTable>
        <ElementTable data="Piotr Kowalski">Imię i nazwisko:</ElementTable>
        <ElementTable data="Wywozimy Grazimy WCewódki">
          Pełna nazwa firmy:
        </ElementTable>
      </table>
    </AppTemplate>
  );
};

export default ConsumerDataBase;
