import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router";
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
