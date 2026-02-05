import React from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import Loading from "../../Pages/Loading/Loading";
import Forbidden from "../../Pages/Forbidden";
import { Navigate } from "react-router";

const UserRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const { role, isLoading } = useRole();

  //   console.log(loading, isLoading);
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  if (!currentUser) {
    return <Navigate to="/login"></Navigate>;
  }
  if (role.role !== "user") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default UserRoute;
