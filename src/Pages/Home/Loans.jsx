import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoanCard from "../../Components/LoanCard";
import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

const Loans = () => {
  const axiosSecure = useAxiosSecure();
  const { data: loans = [], isLoading } = useQuery({
    queryKey: ["loans"],
    queryFn: async () => {
      const res = await axiosSecure.get("/loans");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen relative overflow-hidden jost rounded-4xl">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-primary/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] bg-secondary/50 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 pt-10 pb-12 px-6"
      >
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary font-bold tracking-widest uppercase text-sm"
          >
            Explore Opportunities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-primary"
          >
            All Available Loans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base-content/70 text-lg"
          >
            Browse through our comprehensive collection of loan options tailored
            to meet your financial goals and aspirations.
          </motion.p>
        </div>
      </motion.section>

      {/* Loans Grid */}
      <section className="relative pb-15  container mx-auto px-6">
        {loans.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-7xl pt-40 font-bold text-primary/10">
              No loans available
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loans.map((loan) => (
              <LoanCard loan={loan} key={loan._id} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Loans;
