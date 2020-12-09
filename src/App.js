import "./App.css";
import styled from "styled-components";

import { theme } from "./theme/mainTheme";

import HomePage from "./pages/HomePage";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.secondary};
`;

function App() {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
}

export default App;
