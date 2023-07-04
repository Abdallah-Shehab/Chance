import React from "react";
import { Route } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
  console.log("Private Route Works !");

  return <Route {...rest}> {children}</Route>;
};

export default PrivateRoute;
