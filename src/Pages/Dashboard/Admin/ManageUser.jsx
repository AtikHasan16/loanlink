import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaEdit,
  FaSearch,
  FaUserShield,
  FaUserTie,
  FaUser,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: userData = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Get role badge color
  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "admin":
        return "badge-error";
      case "manager":
        return "badge-warning";
      default:
        return "badge-info";
    }
  };

  // Get role icon
  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return <FaUserShield className="inline mr-1" />;
      case "manager":
        return <FaUserTie className="inline mr-1" />;
      default:
        return <FaUser className="inline mr-1" />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-10 rounded-3xl">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-2 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 jost"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Admin Dashboard
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-base-content">
            Manage Users
          </h1>
          <p className="text-base-content/60 max-w-xl mx-auto text-lg">
            View and manage user roles and permissions
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
            <table className="table w-full align-middle">
              {/* head */}
              <thead className="bg-primary/5 text-primary text-lg font-bold">
                <tr>
                  <th className="py-4 rounded-l-xl">Avatar</th>
                  <th className="py-4">Name</th>
                  <th className="py-4">Email</th>
                  <th className="py-4">Role</th>
                  <th className="py-4 text-center rounded-r-xl">Actions</th>
                </tr>
              </thead>
              <tbody className="text-base">
                {userData.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-10 text-gray-500 text-lg"
                    >
                      {userData.length === 0
                        ? "No users found."
                        : "No users match your search."}
                    </td>
                  </tr>
                ) : (
                  userData.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-base-200/50 transition-colors border-b border-base-200"
                    >
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user.photoURL || "https://i.pravatar.cc/150"}
                              alt={user.name}
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="font-bold text-lg text-base-content">
                          {user.name}
                        </div>
                      </td>
                      <td className="text-base-content/70">{user.email}</td>
                      <td>
                        <div
                          className={`badge badge-lg p-3 ${getRoleBadgeColor(
                            user.role
                          )}`}
                        >
                          {getRoleIcon(user.role)}
                          {user.role.charAt(0).toUpperCase() +
                            user.role.slice(1)}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center gap-3">
                          {/* Update/Edit Button */}
                          <Link
                            to={`/dashboard/update-user/${user._id}`}
                            className="btn btn-circle bg-blue-500 text-white hover:bg-blue-600 border-none shadow-md"
                            title="Update Role"
                          >
                            <FaEdit />
                          </Link>
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

export default ManageUser;
