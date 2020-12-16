import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";

const UsersPage = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  const handleClickButton = () => {
    history.push("/users/add");
  };

  return (
    <AppTemplate>
      {data.map(({ _id, firstName, lastName, password, role }) => (
        <div key={_id}>
          <OrderList
            type="user"
            id={_id}
            firstName={firstName}
            lastName={lastName}
            password={password}
            role={role}
          />
        </div>
      ))}
      <ButtonSquare onClick={handleClickButton}>
        Dodaj nowego użytkownika
      </ButtonSquare>
    </AppTemplate>
  );
};

export default UsersPage;
