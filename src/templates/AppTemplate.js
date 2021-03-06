import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Auth from "../AuthComponent/auth";

import NavBar from "../components/organism/NavBar";
import NavCategory from "../components/organism/NavCategory";

import { theme } from "../theme/mainTheme";
import { config } from "../config";

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  padding: 20px 30px;

  @media (max-width: 680px) {
    /* padding: 10px 5px; */
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 230px auto;

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
  }
  /* @media (max-width: 680px) {
    display: flex;
    flex-direction: column-reverse;
  } */
`;

const StyledNavCategory = styled.div`
  margin: 20px 0;
  /* padding: 0 0 20px; */
`;

const StyledWrapperChildren = styled.div`
  padding: 0px 30px;
  max-height: calc(100vh - 200px);
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

const MainTemplate = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${config.server}/api/users/veryfToken`, {
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
      })
      .then((res) => {})
      .catch(function (error) {
        Auth.logout(() => history.push("/"));
        console.log(error);
      })
      .then(function () {});
  }, [history]);

  return (
    <Wrapper>
      <NavBar />
      <ContentWrapper>
        <StyledNavCategory>
          <NavCategory />
        </StyledNavCategory>

        <StyledWrapperChildren>{children}</StyledWrapperChildren>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainTemplate;
