import React, { useEffect } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const axiosSecure = axios.create({ baseURL: "http://localhost:5000" });

const useAxiosSecure = () => {
  const { currentUser } = useAuth();
  // useEffect(() => {
  //   axiosSecure.interceptors.request.use((config) => {
  //     config.headers.authorization = `Bearer ${currentUser?.AccessToken}`;
  //     return config;
  //   });
  // }, [currentUser]);
  return axiosSecure;
};

export default useAxiosSecure;
