import React from "react";
import { useHistory } from "react-router-dom";

import AppTemplate from "../../templates/AppTemplate";
import SquareButton from "../../components/atoms/ButtonSquare/ButtonSquare";

const ProductsPage = () => {
  const history = useHistory();
  return (
    <AppTemplate>
      <p>ProductsPage</p>
      <SquareButton onClick={() => history.push("/products/add")}>
        Dodaj produkt
      </SquareButton>
    </AppTemplate>
  );
};

export default ProductsPage;
