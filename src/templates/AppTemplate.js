import React from "react";
import styled from "styled-components";

import NavBar from "../components/organism/NavBar";
import NavCategory from "../components/organism/NavCategory";

const Wrapper = styled.div`
  /* max-width: 1366px; */
  margin: 0 auto;
  display: grid;
  padding: 20px 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <ContentWrapper>
        <NavCategory />
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainTemplate;
