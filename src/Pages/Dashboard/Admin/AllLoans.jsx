import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import Loading from "../../Loading/Loading";
import toast from "react-hot-toast";

const AllLoans = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: allLoans = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-loans"],
    queryFn: async () => {
      const res = await axiosSecure.get("/loans");
      return res.data;
    },
  });

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/loans/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Loan has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  // Handle Update (Placeholder - implementation logic needed)
  const handleUpdate = (loan) => {
    // Logic for update modal or redirect
    // For now, let's just show a toast or log
    toast("Update functionality to be implemented", { icon: "🛠️" });
  };

  // Handle 'Show on Home' Toggle
  const handleShowOnHome = async (id, currentShowOnHome) => {
    // Optimistic update could be used, but standard wait is safer for now
    try {
      // Assuming backend supports PATCH /loans/:id with { showOnHome: boolean }
      // This matches the pattern used elsewhere
      const res = await axiosSecure.patch(`/loans/${id}`, {
        showOnHome: !currentShowOnHome,
      });
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Visibility updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update visibility");
    }
  };

  const filteredLoans = allLoans.filter(
    (loan) =>
      loan.loanTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loan.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <h1 className="text-4xl font-bold jost text-base-content">
              All Loans
            </h1>
            <p className="text-base-content/60 mt-2">
              Manage all loan products in the system
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by title or category..."
              className="input input-bordered w-full pl-12 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary bg-base-100/50 backdrop-blur-sm shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto bg-base-100/50 backdrop-blur-md rounded-2xl shadow-xl border border-base-200"
        >
          <table className="table w-full">
            {/* Head */}
            <thead className="bg-base-200/50 text-base-content font-bold text-sm uppercase tracking-wider">
              <tr>
                <th className="py-6 pl-8">Loan Info</th>
                <th>Category</th>
                <th>Interest</th>
                <th>Created By</th>
                <th className="text-center">Show on Home</th>
                <th className="text-right pr-8">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLoans.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-20 text-base-content/40 text-lg font-medium"
                  >
                    No loans found matching your search.
                  </td>
                </tr>
              ) : (
                filteredLoans.map((loan) => (
                  <tr
                    key={loan._id}
                    className="hover:bg-base-200/30 transition-colors border-b border-base-200 last:border-none"
                  >
                    <td className="pl-8 py-4">
                      <div className="flex items-center gap-4">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 bg-base-300">
                            <img src={loan.image} alt={loan.loanTitle} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">
                            {loan.loanTitle}
                          </div>
                          <div className="text-sm opacity-60">
                            Max: ${loan.maxLoanLimit}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="badge badge-outline badge-primary font-medium p-3">
                        {loan.category}
                      </div>
                    </td>
                    <td>
                      <div className="font-bold text-secondary">
                        {loan.interestRate}%
                      </div>
                    </td>
                    <td>
                      <div className="text-sm">
                        {/* Assuming loan object has user details or just email */}
                        {loan.userEmail || "Admin"}
                      </div>
                    </td>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        className="toggle toggle-success"
                        checked={loan.showOnHome}
                        onChange={() =>
                          handleShowOnHome(loan._id, loan.showOnHome)
                        }
                      />
                    </td>
                    <td className="text-right pr-8">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleUpdate(loan)}
                          className="btn btn-ghost btn-sm btn-circle text-primary hover:bg-primary/10 tooltip tooltip-left"
                          data-tip="Update"
                        >
                          <FaEdit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(loan._id)}
                          className="btn btn-ghost btn-sm btn-circle text-error hover:bg-error/10 tooltip tooltip-left"
                          data-tip="Delete"
                        >
                          <FaTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default AllLoans;
