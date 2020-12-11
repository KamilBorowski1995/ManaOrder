import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./theme/mainTheme";

import AppPage from "./pages/AppPage/AppPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AddOrder from "./pages/AddOrder";
import ConsumerDataBase from "./pages/ConsumerDataBase";

import ProtectedRoute from "./AuthComponent/protected.route";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.secondary};
`;

function App() {
  return (
    // Poprawić routingi aby przy wejściu na zakzaną stronę nie tylko renderowało stronę główną ale takze zmieniało adress w przeglądarce. Może redirect?

    <BrowserRouter>
      <Wrapper>
        <ProtectedRoute
          exact
          path="/"
          component={AppPage}
          redirect={HomePage}
        />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/orders" component={AppPage} />
        <Route exact path="/consumers" component={ConsumerDataBase} />
        <Route exact path="/orders/add" component={AddOrder} />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
