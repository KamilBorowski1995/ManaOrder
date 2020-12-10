import React from "react";
import { Route } from "react-router-dom";
import auth from "./auth";

const ProtectedRoute = ({
  component: Component,
  redirect: Redirect,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <Redirect {...props} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
