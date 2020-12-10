import React from "react";
import styled from "styled-components";

import NavBar from "../components/organism/NavBar";

const Wrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: grid;
  padding: 56px 65px;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
