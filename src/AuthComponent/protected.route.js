import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./auth";

const ProtectedRoute = ({
  component: Component,
  redirect: RedirectComponent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <RedirectComponent {...props} />;
        }
      }}
    />
  );
};

export const RedirectRoute = ({
  component: Component,
  redirect: RedirectComponent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
