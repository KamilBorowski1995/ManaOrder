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

const StyledWrapperChildren = styled.div`
  margin-left: 150px;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <ContentWrapper>
        <NavCategory />
        <StyledWrapperChildren>{children}</StyledWrapperChildren>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainTemplate;
