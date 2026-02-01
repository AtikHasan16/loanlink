import React, { useEffect } from "react";
import useAuth from "./useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

// const axiosSecure = axios.create({ baseURL: "http://localhost:5000" });
const axiosSecure = axios.create({
  baseURL: "https://loanlink-server-ten.vercel.app",
});

const useAxiosSecure = () => {
  const { currentUser, logOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // add authorization to axios secure
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${currentUser?.accessToken}`;
        return config;
      },
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOutUser()
            .then(() => {
              navigate("/login");
              toast.error(" Please login first ");
            })
            .catch((error) => {
              console.log(error);
            });
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [currentUser]);
  return axiosSecure;
};

export default useAxiosSecure;
