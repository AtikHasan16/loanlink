import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router";

const GuestRoute = ({ children }) => {
  const { currentUser } = useAuth();
  console.log(currentUser);

  if (currentUser) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default GuestRoute;
