import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { motion } from "motion/react";
import { FaEye, FaMoneyBillWave, FaTimesCircle } from "react-icons/fa";
import Loading from "../../Loading/Loading";
import toast from "react-hot-toast";
const MyLoan = () => {
  const { currentUser, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myLoan = [] } = useQuery({
    queryKey: ["userEmail", currentUser?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/loanApplication?email=${currentUser?.email}`
      );
      return response.data;
    },
  });
  console.log(myLoan);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleCancelLoan = (id) => {
    axiosSecure.delete(`/loanApplication/${id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success("Loan Application Cancelled");
      }
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-10 rounded-3xl">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 jost"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Dashboard
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-base-content">
            My Loan Applications
          </h1>
          <p className="text-base-content/60 max-w-xl mx-auto text-lg">
            Track the status of your loan requests and manage payments easily.
          </p>
        </motion.div>

        {/* Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-base-100 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-base-200 relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-primary/20 to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>

          <div className="overflow-x-auto relative z-10">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-primary/5 text-primary text-lg font-bold">
                <tr>
                  <th className="py-4 rounded-l-xl">Loan ID</th>
                  <th className="py-4">Loan Info</th>
                  <th className="py-4">Amount</th>
                  <th className="py-4">Status</th>
                  <th className="py-4 text-center rounded-r-xl">Actions</th>
                </tr>
              </thead>
              <tbody className="text-base">
                {myLoan.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-10 text-gray-500 text-lg"
                    >
                      You have no loan applications yet.
                    </td>
                  </tr>
                ) : (
                  myLoan.map((loan, index) => (
                    <tr
                      key={loan._id}
                      className="hover:bg-base-200/50 transition-colors border-b border-base-200"
                    >
                      <td className="font-mono text-sm opacity-70">
                        {index + 1}
                      </td>
                      <td>
                        <div className="font-bold text-lg text-base-content">
                          {loan.loanTitle || "General Loan"}
                        </div>
                        <div className="text-sm text-base-content/60">
                          {loan.date || "N/A"}
                        </div>
                      </td>
                      <td className="font-bold text-primary text-lg">
                        ${loan.loanAmount}
                      </td>
                      <td>
                        <div
                          className={`badge ${
                            loan.status === "Approved"
                              ? "badge-success"
                              : loan.status === "Rejected"
                              ? "badge-error"
                              : "badge-warning"
                          } gap-2 text-white px-4 py-3 font-medium`}
                        >
                          {loan.status || "Pending"}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center gap-3">
                          {/* View Button */}
                          <button
                            className="btn bg-primary rounded-full text-white gap-2"
                            title="View Details"
                          >
                            <FaEye /> View
                          </button>

                          {/* Pay Button - Only enabled if Approved */}
                          <button
                            className="btn bg-green-600 rounded-full text-white gap-2"
                            disabled={loan.status !== "Approved"}
                            title="Pay Loan"
                          >
                            <FaMoneyBillWave /> Pay
                          </button>

                          {/* Cancel Button - Only enabled if Pending */}
                          <button
                            onClick={() => handleCancelLoan(loan._id)}
                            className="btn bg-rose-500 rounded-full text-white gap-2"
                            disabled={loan.status !== "Pending"}
                            title="Cancel Application"
                          >
                            <FaTimesCircle /> Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyLoan;
