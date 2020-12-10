import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./theme/mainTheme";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.secondary};
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
