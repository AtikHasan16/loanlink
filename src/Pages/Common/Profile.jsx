/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { motion } from "motion/react";
import { FaUser, FaEnvelope, FaShieldAlt, FaTrashAlt } from "react-icons/fa";

const Profile = () => {
  const { currentUser, deleteCurrentUser, setLoading } = useAuth();

  const handleDeleteAccount = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCurrentUser()
          .then(() => {
            setLoading(false);
            Swal.fire({
              title: "Deleted!",
              text: "Your account has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            setLoading(false);
            Swal.fire({
              title: "Error!",
              text: error.message,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="min-h-screen   px-4 flex justify-center items-start bg-base-100 jost">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-accent shadow-2xl rounded-3xl overflow-hidden border border-base-200"
      >
        {/* Header / Banner */}
        <div className="h-48 bg-linear-180 from-primary to-black relative ">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-80 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 ">
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-primary  ring-offset-4 shadow-xl">
                <img
                  src={
                    currentUser?.photoURL ||
                    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  }
                  alt="Profile"
                  className="bg-base-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-20 pb-12 px-8 text-center">
          <h1 className="text-3xl font-bold text-base-content">
            {currentUser?.displayName || "User Name"}
          </h1>
          <p className="text-base-content/60 font-medium mt-1">
            {currentUser?.email || "user@example.com"}
          </p>
          <div className="badge badge-primary badge-outline mt-3 px-4 py-1.5 uppercase font-bold tracking-wider text-xs">
            Member
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left max-w-2xl mx-auto">
            {/* Full Name */}
            <div className="p-4 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <FaUser size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-base-content/50 tracking-wider">
                  Full Name
                </p>
                <p className="font-semibold text-lg">
                  {currentUser?.displayName || "N/A"}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-base-content/50 tracking-wider">
                  Email Address
                </p>
                <p className="font-semibold text-lg truncate">
                  {currentUser?.email || "N/A"}
                </p>
              </div>
            </div>

            {/* Account Status / Role Placeholder */}
            {/* Only showing if we had a role, otherwise just a placeholder or ID */}
            <div className="p-4 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <FaShieldAlt size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-base-content/50 tracking-wider">
                  Account ID
                </p>
                <p className="font-semibold text-sm truncate w-48">
                  {currentUser?.uid || "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-base-200 pt-8 w-full max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-error">Danger Zone</h3>
            <p className="text-sm text-base-content/60 max-w-md">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <button
              onClick={handleDeleteAccount}
              className="btn btn-error btn-outline rounded-full px-8 gap-2 mt-2 hover:bg-error hover:text-white transition-all"
            >
              <FaTrashAlt />
              Delete Account
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
