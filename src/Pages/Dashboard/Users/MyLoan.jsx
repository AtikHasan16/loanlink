import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";

const MyLoan = () => {
  const { currentUser, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myLoan = [] } = useQuery({
    queryKey: ["userEmail", currentUser?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/loanApplication?email=atik@gmail.com`
      );
      return response.data;
    },
  });
  console.log(myLoan);

 

  return <div>MyLoan</div>;
};

export default MyLoan;
