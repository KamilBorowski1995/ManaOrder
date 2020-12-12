import React from "react";
import styled from "styled-components";

import AppTemplate from "../../templates/AppTemplate";

import ElementTable from "../../components/molecules/ElementTable";

const Wrapper = styled.div`
  max-height: 500px;
  overflow: auto;
  /* border: 2px solid black; */

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #061658;
    /* outline: 1px solid slategrey; */
    border-radius: 20px 20px;
  }
`;

const ConsumerDataBase = () => {
  return (
    <AppTemplate>
      <Wrapper>
        <ElementTable data="#48621547895">Numer Zamówienia:</ElementTable>
        <ElementTable data="#98579985657">Numer Klienta:</ElementTable>
        <ElementTable data="Piotr Kowalski">Imię i nazwisko:</ElementTable>
        <ElementTable data="Wywozimy Grazimy WCewódki">
          Pełna nazwa firmy:
        </ElementTable>
        <ElementTable data="#48621547895">Numer Zamówienia:</ElementTable>
        <ElementTable data="#98579985657">Numer Klienta:</ElementTable>
        <ElementTable data="Piotr Kowalski">Imię i nazwisko:</ElementTable>
        <ElementTable data="Wywozimy Grazimy WCewódki">
          Pełna nazwa firmy:
        </ElementTable>
        <ElementTable data="#48621547895">Numer Zamówienia:</ElementTable>
        <ElementTable data="#98579985657">Numer Klienta:</ElementTable>
        <ElementTable data="Piotr Kowalski">Imię i nazwisko:</ElementTable>
        <ElementTable data="Wywozimy Grazimy WCewódki">
          Pełna nazwa firmy:
        </ElementTable>
      </Wrapper>
    </AppTemplate>
  );
};

export default ConsumerDataBase;
