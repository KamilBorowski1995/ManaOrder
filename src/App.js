import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { theme } from "./theme/mainTheme";

import AppPage from "./pages/AppPage/AppPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ConsumerDataBase from "./pages/ConsumerDataBase";
import ProductsPage from "./pages/ProductsPage";
import AddConsumerPage from "./pages/AddConsumerPage";
import AddProductPage from "./pages/AddProductPage";
import UsersPage from "./pages/UsersPage";
import AddUserPage from "./pages/AddUserPage";
import AddOrderPage from "./pages/AddOrderPage";

import ProtectedRoute, { RedirectRoute } from "./AuthComponent/protected.route";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.secondary};
`;

function App() {
  return (
    // Dodać chat wewnętrzny dla pracowników

    <BrowserRouter>
      <Wrapper>
        <Route exact path="/login" component={LoginPage} />

        <ProtectedRoute
          exact
          path="/"
          component={AppPage}
          redirect={HomePage}
        />
        <RedirectRoute exact path="/consumers" component={ConsumerDataBase} />
        <RedirectRoute exact path="/products" component={ProductsPage} />
        <RedirectRoute exact path="/products/add" component={AddProductPage} />

        <RedirectRoute
          exact
          path="/consumers/add"
          component={AddConsumerPage}
        />
        <RedirectRoute exact path="/users" component={UsersPage} />
        <RedirectRoute exact path="/users/add" component={AddUserPage} />
        <RedirectRoute exact path="/orders/add" component={AddOrderPage} />

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
