import React from "react";
import { Route } from "react-router-dom";
import auth from "./auth";
import HomePage from "../pages/HomePage";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <HomePage {...props} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
