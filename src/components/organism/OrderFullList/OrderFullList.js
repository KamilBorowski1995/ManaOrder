import React from "react";
import styled from "styled-components";

import InformationElementBasket from "../../molecules/InformationElement/InformationElementBasket";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-top: 10px;
  /* padding: 0 20px; */
  max-height: calc(100vh - 300px);
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #061658;

    border-radius: 30px 30px;
  }
`;

const OrderFullList = ({ product }) => {
  const mapProduct = product.map(({ cost, nameProduct }) => (
    <InformationElementBasket data={cost} title={nameProduct} />
  ));

  return (
    <Wrapper>
      {/* <p>Lista zakupów</p> */}
      {mapProduct}
    </Wrapper>
  );
};

export default OrderFullList;
