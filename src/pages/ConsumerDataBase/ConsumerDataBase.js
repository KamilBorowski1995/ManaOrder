import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import ElementTable from "../../components/molecules/ElementTable";

const Wrapper = styled.div`
  max-height: 500px;
  overflow: auto;
  /* border: 2px solid black; */

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #061658;
    /* outline: 1px solid slategrey; */
    border-radius: 20px 20px;
  }
`;

const ConsumerDataBase = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/consumers")
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log(data);
      });
  }, []);

  return (
    <AppTemplate>
      <Wrapper>
        {console.log(data)}
        {data.map(({ id, firstName, lastName, companyName, phone, email }) => (
          <div key={id}>
            <p>Użytkownik</p>
            <p>
              {firstName} {lastName}
            </p>
            <p>{companyName}</p>
            <p>{phone} </p>
            <p>{email} </p>
          </div>
        ))}
      </Wrapper>
    </AppTemplate>
  );
};

export default ConsumerDataBase;
