import React from "react";
import LoanCard from "./LoanCard";
import { Link } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Pages/Loading/Loading";

const HomeCard = () => {
  const axiosSecure = useAxiosSecure();
  const { data: loans = [], isLoading } = useQuery({
    queryKey: ["loans", "home"],
    queryFn: async () => {
      const res = await axiosSecure.get("/loans/home");
      return res.data;
    },
  });
if (isLoading) {
  return <Loading></Loading>
}
  return (
    <section className="py-24 container mx-auto px-6 jost">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">
          Opportunities
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Available Loans</h2>
        <p className="text-base-content/60 mt-4 max-w-2xl mx-auto text-lg">
          Explore our range of loan options designed to meet your specific
          financial needs. From personal growth to business expansion, we have
          you covered.
        </p>
      </div>

      {loans.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl py-10 font-bold text-primary/10">
            No loans available
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loans.map((loan) => (
            <div key={loan._id} className="h-full">
              <LoanCard loan={loan} />
            </div>
          ))}
        </div>
      )}

      <div className="mt-16 text-center">
        <Link
          to="/all-loans"
          className="btn btn-outline btn-lg rounded-full px-12 hover:bg-primary hover:text-white transition-all"
        >
          View All Loans
        </Link>
      </div>
    </section>
  );
};

export default HomeCard;
