import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import OrderList from "../../components/molecules/OrderList/OrderList";

import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import Auth from "../../AuthComponent/auth";

const UsersPage = () => {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [userRole, setUserRole] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users", {
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
      })
      .then((res) => {
        setData(res.data);
        setUserRole(sessionStorage.getItem("role"));
      })
      .catch(function (error) {
        Auth.logout(() => history.push("/"));
        console.log(error);
      })
      .then(function () {});
  }, [history]);

  const handleClickButton = () => {
    history.push("/users/add");
  };

  return (
    <AppTemplate>
      {data.map(({ _id, fullName, role }) => (
        <div key={_id}>
          <OrderList type="user" id={_id} fullName={fullName} role={role} />
        </div>
      ))}
      {userRole === "admin" && (
        <ButtonSquare onClick={handleClickButton}>
          Dodaj nowego użytkownika
        </ButtonSquare>
      )}
    </AppTemplate>
  );
};

export default UsersPage;
