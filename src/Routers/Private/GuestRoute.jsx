import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router";
const GuestRoute = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export default GuestRoute;
