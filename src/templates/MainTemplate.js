import React from "react";
import styled from "styled-components";

import NavBar from "../components/organism/NavBar";

const Wrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: grid;
  padding: 36px 65px;
  @media (max-width: 1366px) {
    max-width: 1200px;
  }
  @media (max-width: 1150px) {
    /* padding: 20px 10px; */
    padding: 20px 10px;
  }
`;

const WrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 180px;
  @media (max-width: 1366px) {
    margin-top: 160px;
  }
  @media (max-width: 1150px) {
    margin-top: 50px;
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

const StyledImage = styled.img`
  width: ${({ page }) => (page === "login" ? "500px" : "600px")};
  @media (max-width: 1366px) {
    width: ${({ page }) => (page === "login" ? "400px" : "450px")};
  }
  @media (max-width: 1150px) {
    width: ${({ page }) => (page === "login" ? "300px" : "300px")};
    /* display: none; */
  }
  @media (max-width: 950px) {
    width: ${({ page }) => (page === "login" ? "150px" : "240px")};
    /* display: none; */
    margin: 0 auto 50px;
  }
`;

const MainTemplate = ({ children, src, alt, page }) => {
  return (
    <Wrapper>
      <NavBar />
      <WrapperContent>
        {children}
        <StyledImage page={page} src={src} alt={alt} />
      </WrapperContent>
    </Wrapper>
  );
};

export default MainTemplate;

// import React from "react";
// import styled from "styled-components";

// import NavBar from "../components/organism/NavBar";

// const Wrapper = styled.div`
//   max-width: 1366px;
//   margin: 0 auto;
//   display: grid;
//   padding: 56px 65px;
//   @media (max-width: 1366px) {
//     max-width: 1200px;
//   }
// `;

// const MainTemplate = ({ children }) => {
//   return (
//     <Wrapper>
//       <NavBar />
//       {children}
//     </Wrapper>
//   );
// };

// export default MainTemplate;
